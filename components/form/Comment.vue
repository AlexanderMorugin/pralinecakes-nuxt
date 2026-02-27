<template>
  <FormCommentSuccess
    v-if="isCommentSend"
    @handleClick="isCommentSend = false"
  />

  <form v-else @submit.prevent="submitComment" class="form-block">
    <TitleBlock title="Оставьте отзыв" />
    <FormInput
      label="Имя * "
      type="name"
      name="nameField"
      placeholder="Ваше имя"
      v-model:value="v$.userName.$model"
      :error="v$.userName.$errors"
      @clearInput="userName = null"
      @click="clearErrorMessage"
      lastInput="true"
    />

    <FormTextarea
      label="Отзыв * "
      placeholder="Ваш отзыв"
      v-model:value="v$.userComment.$model"
      :error="v$.userComment.$errors"
      @clearInput="userComment = null"
    />

    <FormRating
      label="Оценка *"
      v-model:value="productRating"
      :maxStars="5"
      @updateRating="updateRating"
    />

    <FormSubmit
      title="Отправить"
      :isFromEmpty="isFromEmpty"
      :isValid="isValid.length"
      :isLoading="isLoading"
      place="client"
    />

    <span class="mark">* - обязательные для заполнения поля</span>
  </form>
</template>

<script setup>
import { useVuelidate } from "@vuelidate/core";
import { helpers, required, minLength } from "@vuelidate/validators";

const { product } = defineProps(["product"]);

// console.log(product.id, product.title, product.image_1_small);

const toast = useToast();
const { date } = useDate();
const commentsStore = useCommentsStore();

const isCommentSend = ref(false);
const isLoading = ref(false);
const userName = ref(null);
const productRating = ref(null);
const userComment = ref(null);

const updateRating = async (newRating) => {
  productRating.value = newRating;
};

// Валидация
const rules = computed(() => ({
  userName: {
    required: helpers.withMessage("Ваше имя", required),
    minLength: helpers.withMessage("Не менее 2 символов", minLength(2)),
  },
  productRating: {
    required: helpers.withMessage("Поставьте оценку", required),
  },
  userComment: {
    required: helpers.withMessage("Ваш отзыв", required),
    minLength: helpers.withMessage("Хотя бы пару слов", minLength(2)),
  },
}));

const v$ = useVuelidate(rules, {
  userName,
  userComment,
});

const isFromEmpty = computed(
  () => !userName.value || !userComment.value || !productRating.value,
);

const isValid = computed(() => v$.value.$errors);

const submitComment = async () => {
  try {
    isLoading.value = true;

    if (!isFromEmpty.value && !isValid.value.length) {
      const formData = {
        date: date,
        user_name: userName.value.trim(),
        user_rating: productRating.value,
        user_comment: userComment.value.trim(),
        product_id: product.id,
        product_image: product.image_1_small,
        product_title: product.title,
      };

      const result = await commentsStore.createComment(formData);

      if (result.status.value === "error") {
        toast.error({
          title: "Ошибка!",
          message: "Отзыв отправить не удалось.",
        });
      }

      if (result.status.value === "success") {
        toast.success({
          title: "Успешно!",
          message: "Отзыв отправлен.",
        });

        isCommentSend.value = true;
        userName.value = null;
        productRating.value = null;
        userComment.value = null;
      }
    }
  } catch (error) {
    console.log(error);
  } finally {
    isLoading.value = false;
  }
};
</script>
