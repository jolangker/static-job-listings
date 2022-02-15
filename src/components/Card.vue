<template>
  <div
    class="card border-l-8 border-primary lg:(flex items-center px-8 border-l-4 rounded)"
    :class="{ 'border-l-0 lg:border-l-0': !featured }"
  >
    <img
      :src="job.logo"
      class="w-12 h-12 rounded-full bg-gray-500 -mt-10 lg:hidden"
    />
    <img :src="job.logo" class="<lg:hidden mr-6" />
    <div class="border-b-2 pb-3 lg:(border-0 p-0)">
      <div class="flex items-center py-3">
        <p class="text-primary font-bold mr-3">{{ job.company }}</p>
        <p v-if="newest" class="pill-primary">NEW!</p>
        <p v-if="featured" class="pill-vdg-cyan ml-2">FEATURED</p>
      </div>
      <p class="font-bold text-lg">{{ job.role }}</p>
      <div class="py-2 text-dg-cyan space-x-2">
        <span>{{ job.postedAt }}</span>
        <span>&#8226;</span>
        <span>{{ job.contract }}</span>
        <span>&#8226;</span>
        <span>{{ job.location }}</span>
      </div>
    </div>
    <div class="flex flex-wrap lg:ml-auto">
      <Tag
        v-for="tech in job.techs"
        :key="tech"
        :text="tech"
        class="mr-4 mt-4"
        @select="selectTag"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from "@vue/runtime-core";
import Tag from "../components/Tag.vue";

const props = defineProps({
  job: Object,
  newest: Boolean,
  featured: Boolean,
});

const emits = defineEmits(["select-tag"]);

const selectTag = (val) => {
  emits("select-tag", val);
};
</script>
