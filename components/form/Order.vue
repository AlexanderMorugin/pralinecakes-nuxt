<template>
  <form @submit.prevent="submitComment">
    <TitleBlock title="Ваши данные" class="formOrder__title" />

    <div class="formOrder">
      <div class="formOrder__left">
        <div class="formOrder">
          <FormInput
            label="Имя * "
            type="text"
            name="nameField"
            placeholder="Ваше имя"
            v-model:value="v$.nameField.$model"
            :error="v$.nameField.$errors"
            @clearInput="nameField = null"
            @click="clearErrorMessage"
            firstInput="true"
          />
          <FormInput
            label="Телефон * "
            type="text"
            name="phoneField"
            placeholder="+7 (___) ___-__-__"
            v-model:value="v$.phoneField.$model"
            :error="v$.phoneField.$errors"
            @clearInput="phoneField = null"
            @click="clearErrorMessage"
            firstInput="true"
          />
          <FormInput
            label="Город * "
            type="text"
            name="cityField"
            placeholder="Москва"
            v-model:value="v$.cityField.$model"
            :error="v$.cityField.$errors"
            @clearInput="cityField = null"
            @click="clearErrorMessage"
            firstInput="true"
          />
          <FormInput
            label="Улица * "
            type="text"
            name="streetField"
            placeholder="Улица, проспект и т.п."
            v-model:value="v$.streetField.$model"
            :error="v$.streetField.$errors"
            @clearInput="streetField = null"
            @click="clearErrorMessage"
            firstInput="true"
          />
        </div>

        <div class="formOrder__numbers">
          <FormInput
            label="Дом * "
            type="text"
            name="buildingField"
            placeholder=" "
            v-model:value="v$.buildingField.$model"
            :error="v$.buildingField.$errors"
            @clearInput="buildingField = null"
            @click="clearErrorMessage"
            firstInput="true"
          />
          <FormInput
            label="Подъезд"
            type="text"
            name="entranceField"
            placeholder=" "
            v-model:value="v$.entranceField.$model"
            :error="v$.entranceField.$errors"
            @clearInput="entranceField = null"
            @click="clearErrorMessage"
            firstInput="true"
          />
          <FormInput
            label="Квартира"
            type="text"
            name="flatField"
            placeholder=" "
            v-model:value="v$.flatField.$model"
            :error="v$.flatField.$errors"
            @clearInput="flatField = null"
            @click="clearErrorMessage"
            firstInput="true"
          />
          <FormInput
            label="Этаж"
            type="text"
            name="floorField"
            placeholder=" "
            v-model:value="v$.floorField.$model"
            :error="v$.floorField.$errors"
            @clearInput="floorField = null"
            @click="clearErrorMessage"
            firstInput="true"
          />
        </div>
      </div>
      <div class="formOrder__right">
        <FormTextarea
          label="Комментарий к заказу"
          placeholder="Ваши пожелания"
          v-model:value="v$.commentField.$model"
          :error="v$.commentField.$errors"
          @clearInput="commentField = null"
        />
        <div class="formOrder__submit">
          <FormSubmit
            title="Заказать"
            :isFromEmpty="isFromEmpty"
            :isValid="isValid.length"
            :isLoading="isLoading"
            class="formOrder__submitButton"
          />
        </div>
      </div>
    </div>

    <div class="formOrder__orderMark mark">
      * - обязательные для заполнения поля
    </div>
  </form>
</template>

<script setup>
import { useVuelidate } from "@vuelidate/core";
import { helpers, required, minLength, numeric } from "@vuelidate/validators";

// const { product } = defineProps(["product"]);

// const isCommentSend = ref(false);
const isLoading = ref(false);
const nameField = ref(null);
const phoneField = ref(null);
const cityField = ref("Москва");
const streetField = ref(null);
const buildingField = ref(null);
const entranceField = ref(null);
const flatField = ref(null);
const floorField = ref(null);
const commentField = ref(null);

// Валидация
const rules = computed(() => ({
  nameField: {
    required: helpers.withMessage("Ваше имя", required),
    minLength: helpers.withMessage("Не менее 2 символов", minLength(2)),
  },
  phoneField: {
    required: helpers.withMessage("Укажите номер", required),
    numeric: helpers.withMessage("Введите цифры", numeric),
  },
  cityField: {
    required: helpers.withMessage("Укажите город", required),
    minLength: helpers.withMessage("Не менее 2 символов", minLength(2)),
  },
  streetField: {
    required: helpers.withMessage("Укажите улицу", required),
    minLength: helpers.withMessage("Не менее 2 символов", minLength(2)),
  },
  buildingField: {
    required: helpers.withMessage("", required),
  },
  entranceField: {
    numeric: helpers.withMessage("", numeric),
  },
  flatField: {
    numeric: helpers.withMessage("", numeric),
  },
  floorField: {
    numeric: helpers.withMessage("", numeric),
  },
  commentField: {
    minLength: helpers.withMessage("", minLength(2)),
  },
}));

const v$ = useVuelidate(rules, {
  nameField,
  phoneField,
  cityField,
  streetField,
  buildingField,
  entranceField,
  flatField,
  floorField,
  commentField,
});

const isFromEmpty = computed(
  () =>
    !nameField.value ||
    !phoneField.value ||
    !cityField.value ||
    !streetField.value ||
    !buildingField.value
);

const isValid = computed(() => v$.value.$errors);

const submitComment = async () => {
  // try {
  //   isLoading.value = true;
  //   if (!isFromEmpty.value && !isValid.value.length) {
  //     const commentData = {
  //       name: userName.value.trim(),
  //       rating: productRating.value,
  //       comment: userComment.value.trim(),
  //       productId: product.id,
  //     };
  //     console.log(commentData);
  //     isCommentSend.value = true;
  //     userName.value = null;
  //     productRating.value = null;
  //     userComment.value = null;
  //   }
  // } catch (error) {
  //   console.log(error);
  // } finally {
  //   isLoading.value = false;
  // }
};
</script>

<style lang="scss" scoped>
.formOrder {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }

  &__left {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__right {
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: space-between;
  }

  &__title {
    padding-bottom: 40px;
  }

  &__orderMark {
    padding-top: 40px;
  }

  &__numbers {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    width: 100%;

    @media (max-width: 767px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &__submit {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }

  &__submitButton {
    width: 100%;
    max-width: 350px;
  }
}
</style>
