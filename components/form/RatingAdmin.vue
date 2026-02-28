<template>
  <div>
    <div v-if="isFormEdit" class="form-field">
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
    <div v-else class="form-field">
      <span class="form-label">Сейчас рейтинг</span>
      <ul class="formRating">
        <li v-for="i in maxStars" :key="i" class="formRating__starBox">
          <IconStar
            :class="[
              'formRating__starSubmited',
              i <= rating ? 'formRating__star_active' : '',
            ]"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const { value, maxStars, label, isFormEdit } = defineProps([
  "value",
  "maxStars",
  "label",
  "isFormEdit",
]);
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
  padding-top: 10px;

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

  &__starBox {
    width: 20px;
    height: 34px;
  }

  &__starSubmited {
    width: 20px;
    height: 20px;
    color: var(--mask-white-primary);
  }
}
</style>
