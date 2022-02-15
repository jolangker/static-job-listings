<template>
  <header class="h-48"></header>
  <main class="px-8 py-12 space-y-12 lg:px-16 xl:px-32 max-w-1440px mx-auto">
    <Card
      v-for="job in data"
      :key="job.id"
      :job="job"
      :newest="job.new"
      :featured="job.featured"
    ></Card>
  </main>
</template>

<script setup>
import json from "./data/data.json";
import { computed } from "vue";
import Card from "./components/Card.vue";

const getLogoCompany = (logo) => {
  return new URL(`./assets/images/${logo}`, import.meta.url).href;
};

const data = computed(() =>
  json.map((j) => {
    j.logo = getLogoCompany(j.logo);
    return j;
  })
);
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
