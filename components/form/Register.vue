<template>
  <form @submit.prevent="submitRegister" class="form-block">
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
      label="Email * "
      type="email"
      name="emailField"
      placeholder="email@mail.ru"
      v-model:value="v$.emailField.$model"
      :error="v$.emailField.$errors"
      @clearInput="emailField = null"
      @click="clearErrorMessage"
      firstInput="true"
    />
    <FormInput
      label="Пароль * "
      type="password"
      name="passwordField"
      placeholder="Не менее 6 символов"
      v-model:value="v$.passwordField.$model"
      :error="v$.passwordField.$errors"
      @clearInput="passwordField = null"
      @click="clearErrorMessage"
      firstInput="true"
    />
    <FormInput
      label="Подтвердите пароль * "
      type="password"
      name="confirmPasswordField"
      placeholder="Повторите пароль"
      v-model:value="v$.confirmPasswordField.$model"
      :error="v$.confirmPasswordField.$errors"
      @clearInput="confirmPasswordField = null"
      @click="clearErrorMessage"
      lastInput="true"
    />

    <div class="form-top-margin">
      <FormSubmit
        title="Регистрация"
        :isFromEmpty="isFromEmpty"
        :isValid="isValid.length"
        :isLoading="isLoading"
        place="client"
      />
    </div>

    <div class="formOrder__orderMark mark">
      * - обязательные для заполнения поля
    </div>
  </form>
</template>

<script setup>
import { useVuelidate } from "@vuelidate/core";
import {
  helpers,
  required,
  minLength,
  email,
  sameAs,
} from "@vuelidate/validators";

const toast = useToast();

const isLoading = ref(false);
const nameField = ref(null);
const emailField = ref(null);
const passwordField = ref(null);
const confirmPasswordField = ref(null);

// Валидация
const rules = computed(() => ({
  nameField: {
    required: helpers.withMessage("Ваше имя", required),
    minLength: helpers.withMessage("Не менее 2 символов", minLength(2)),
  },
  emailField: {
    required: helpers.withMessage("Укажите почту", required),
    email: helpers.withMessage("Не корректно", email),
  },
  passwordField: {
    required: helpers.withMessage("Укажите пароль", required),
    minLength: helpers.withMessage("Не менее 6 символов", minLength(6)),
  },
  confirmPasswordField: {
    required: helpers.withMessage("", required),
    sameAsPassword: helpers.withMessage("Не совпадает", sameAs(passwordField)),
  },
}));

const v$ = useVuelidate(rules, {
  nameField,
  emailField,
  passwordField,
  confirmPasswordField,
});

const isFromEmpty = computed(
  () =>
    !nameField.value ||
    !emailField.value ||
    !passwordField.value ||
    !confirmPasswordField.value,
);

const isValid = computed(() => v$.value.$errors);

const submitRegister = async () => {
  try {
    isLoading.value = true;

    const formData = {
      user_name: nameField.value.trim(),
      user_email: emailField.value.trim(),
      user_password: passwordField.value.trim(),
    };

    console.log(formData);
  } catch (err) {
    console.log(err);
  } finally {
    isLoading.value = false;
  }
};
</script>
