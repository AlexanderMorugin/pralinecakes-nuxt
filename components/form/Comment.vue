<template>
  <form @submit.prevent="submitComment" class="formComment">
    <h3 class="formComment__title">Оставьте отзыв</h3>
    <FormInput
      label="Имя"
      type="name"
      name="nameField"
      placeholder="Ваше имя"
      v-model:value="v$.nameField.$model"
      :error="v$.nameField.$errors"
      @clearInput="nameField = null"
      @click="clearErrorMessage"
      lastInput="true"
    />

    <ProductListCardRating :rating="ratingField" />

    <FormSubmit
      title="Отправить"
      :isFromEmpty="isFromEmpty"
      :isValid="isValid.length"
      :isLoading="isLoading"
    />
  </form>
</template>

<script setup>
import { useVuelidate } from "@vuelidate/core";
import { helpers, required, minLength, email } from "@vuelidate/validators";

const { product } = defineProps(["product"]);

const nameField = ref(null);
const ratingField = ref(3);

// Валидация
const rules = computed(() => ({
  nameField: {
    required: helpers.withMessage("Ваше имя", required),
    minLength: helpers.withMessage("Не менее 2 символов", minLength(2)),
  },
}));

const v$ = useVuelidate(rules, {
  nameField,
});

const isFromEmpty = computed(() => !nameField.value);

const isValid = computed(() => v$.value.$errors);

const submitComment = async () => {
  try {
    const commentData = {
      name: nameField.value.trim(),
    };

    console.log(commentData);
  } catch (error) {
    console.log(error);
  } finally {
  }
};
</script>

<style lang="scss" scoped>
.formComment {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  // border: 1px solid red;

  &__title {
    font-family: "Montserrat-Regular", sans-serif;
    font-size: 20px;
    line-height: 28px;
    color: var(--orange-primary);
    letter-spacing: 1px;

    @media (max-width: 767px) {
      font-size: 16px;
      line-height: 26px;
    }
  }
}
</style>
