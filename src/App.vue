<template>
  <header class="h-48"></header>

  <main class="px-8 py-12 space-y-12 lg:px-16 xl:px-32 max-w-1440px mx-auto">
    <div
      v-if="categories.length"
      class="-mt-20 card pt-0 flex justify-between items-center"
    >
      <div class="flex flex-wrap">
        <Tag
          v-for="category in categories"
          :key="category"
          :text="category"
          removeable
          class="mr-4 mt-4"
          @remove="removeCategory"
        />
      </div>
      <div>
        <button
          class="font-bold text-dg-cyan px-4 mt-4 duration-300 hover:(text-primary underline underline-primary underline-offset-2)"
          @click="clearCategories"
        >
          Clear
        </button>
      </div>
    </div>
    <Card
      v-for="job in categories.length ? filteredJobs : jobs"
      :key="job.id"
      :job="job"
      :newest="job.new"
      :featured="job.featured"
      @select-tag="addCategory"
    />
  </main>
</template>

<script setup>
import json from "./data/data.json";
import { computed, onMounted, reactive, ref } from "vue";
import Card from "./components/Card.vue";
import Tag from "./components/Tag.vue";

const getLogoCompany = (logo) => {
  return new URL(`./assets/images/${logo}`, import.meta.url).href;
};

const jobs = computed(() =>
  json.map((j) => {
    j.logo = getLogoCompany(j.logo);
    j.requirements = [j.role, j.level, ...j.languages, ...j.tools];
    return j;
  })
);

const categories = reactive([]);

const addCategory = (category) => {
  if (!categories.includes(category)) {
    categories.push(category);
  }
};

const removeCategory = (category) => {
  const idx = categories.indexOf(category);
  categories.splice(idx, 1);
};

const clearCategories = () => {
  categories.splice(0);
};

const filteredJobs = computed(() => {
  return jobs.value.filter((job) => {
    return categories.every((cat) => job.requirements.includes(cat));
  });
});
</script>

<style scoped>
header {
  background: url("./assets/images/bg-header-mobile.svg"), hsl(180, 29%, 50%);
  background-repeat: no-repeat;
  background-size: cover;
}

@screen lg {
  header {
    background: url("./assets/images/bg-header-desktop.svg"), hsl(180, 29%, 50%);
    background-repeat: no-repeat;
    background-size: cover;
  }
}
</style>
