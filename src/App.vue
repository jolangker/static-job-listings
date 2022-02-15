<template>
  <div class="bg-primary">Home</div>
</template>

<script setup>
import json from "./data/data.json";
import { computed } from "vue";

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
