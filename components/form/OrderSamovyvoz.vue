<template>
  <form @submit.prevent="submitOrder" class="form-block">
    <TitleBlock title="Ваши данные" />
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
      placeholder="8**********"
      v-model:value="v$.phoneField.$model"
      :error="v$.phoneField.$errors"
      @clearInput="phoneField = null"
      @click="clearErrorMessage"
      firstInput="true"
    />

    <FormTextarea
      label="Комментарий к заказу"
      placeholder="Ваши пожелания"
      v-model:value="v$.commentField.$model"
      :error="v$.commentField.$errors"
      @clearInput="commentField = null"
    />

    <FormSubmit
      title="Заказать"
      :isFromEmpty="isFromEmpty"
      :isValid="isValid.length"
      :isLoading="isLoading"
    />

    <div class="mark">* - обязательные для заполнения поля</div>
  </form>
</template>

<script setup>
import { useVuelidate } from "@vuelidate/core";
import { helpers, required, minLength, numeric } from "@vuelidate/validators";

const cartStore = useCartStore();
const orderStore = useOrderStore();

const isLoading = ref(false);
const nameField = ref(null);
const phoneField = ref(null);
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
  commentField: {
    minLength: helpers.withMessage("", minLength(2)),
  },
}));

const v$ = useVuelidate(rules, {
  nameField,
  phoneField,
  commentField,
});

const isFromEmpty = computed(() => !nameField.value || !phoneField.value);

const isValid = computed(() => v$.value.$errors);

const submitOrder = async () => {
  try {
    const orderData = {
      delivery_type: cartStore.deliveryType,
      total_cart_count: cartStore.totalCartCount,
      total_cart_sum: cartStore.totalCartSum,
      cart_samovyvoz_bonus: cartStore.cartSamovyvozBonus,
      total_order_sum: cartStore.totalOrderSum,
      cart_list: cartStore.cart,
      user_bonus: cartStore.cartBonus,
      user_name: nameField.value.trim(),
      user_phone: phoneField.value.trim(),
      user_comment: commentField.value?.trim(),
    };

    orderStore.addOrder(orderData);

    return navigateTo("/order");
  } catch (error) {
    console.log(error);
  } finally {
  }
};
</script>

<style lang="scss" scoped>
.formOrder {
  display: grid;
  grid-template-columns: 1fr 35%;
  gap: 40px;
  width: 100%;

  @media (max-width: 1600px) {
    gap: 20px;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }

  &__animation {
    animation: slide-to-top 0.8s ease;
  }

  &__user {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    width: 100%;

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }
  }

  &__left {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__right {
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-self: flex-end;
    width: 100%;
    max-width: 480px;
    padding-left: 20px;
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
}
</style>
