<template>
  <div class="tag-primary overflow-hidden flex">
    <button
      @click="handleSelect"
      class="font-bold py-1 px-2"
      :class="{ 'pointer-events-none': removeable }"
    >
      {{ text }}
    </button>
    <button v-if="removeable" class="bg-primary p-2" @click="handleRemove">
      <img src="../assets/images/icon-remove.svg" />
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  text: String,
  removeable: Boolean,
});

const emits = defineEmits(["select", "remove"]);

const handleSelect = () => {
  emits("select", props.text);
};

const handleRemove = () => {
  emits("remove", props.text);
};
</script>

<style>
.fade-in-enter-active-class {
  animation: fade-in 1ms;
}
</style>
