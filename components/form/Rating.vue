<template>
  <div class="form-field">
    <span class="form-label">{{ label }}</span>
    <ul class="formRating">
      <li v-for="i in maxStars" :key="i" @click="setRating(i)">
        <IconStar
          :class="[
            'formRating__star',
            i <= rating ? 'formRating__star_active' : '',
          ]"
        />
      </li>
    </ul>
  </div>
</template>

<script setup>
const { value, maxStars, label } = defineProps(["value", "maxStars", "label"]);
const emit = defineEmits(["update:value"]);

const rating = ref(value);

const setRating = (newRating) => {
  rating.value = newRating;
  emit("updateRating", newRating);
};
</script>

<style lang="scss" scoped>
.formRating {
  display: flex;
  align-items: center;
  gap: 5px;

  &__star {
    width: 32px;
    height: 32px;
    color: var(--mask-white-primary);
    cursor: pointer;

    &_active {
      color: var(--orange-primary);
      fill: var(--orange-primary);
    }
  }
}
</style>
