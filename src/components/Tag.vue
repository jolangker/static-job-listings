<template>
  <div class="overflow-hidden flex">
    <button
      @click="handleSelect"
      class="tag-primary px-2 py-1"
      :class="{ 'pointer-events-none': removeable }"
    >
      {{ text }}
    </button>
    <button
      v-if="removeable"
      class="bg-primary p-2 duration-300 hover:bg-vdg-cyan"
      @click="handleRemove"
    >
      <img src="../assets/images/icon-remove.svg" alt="Icon Remove" />
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
