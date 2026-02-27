<template>
  <form @submit.prevent="submitLogin" class="form-block">
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
      placeholder="******"
      v-model:value="v$.passwordField.$model"
      :error="v$.passwordField.$errors"
      @clearInput="passwordField = null"
      @click="clearErrorMessage"
      lastInput="true"
    />
    <div class="form-top-margin">
      <FormSubmit
        title="Войти"
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
import { helpers, required, minLength, email } from "@vuelidate/validators";

const toast = useToast();

const isLoading = ref(false);
const emailField = ref(null);
const passwordField = ref(null);

// Валидация
const rules = computed(() => ({
  emailField: {
    required: helpers.withMessage("Укажите почту", required),
    email: helpers.withMessage("Не корректно", email),
  },
  passwordField: {
    required: helpers.withMessage("Укажите пароль", required),
    minLength: helpers.withMessage("Не менее 6 символов", minLength(6)),
  },
}));

const v$ = useVuelidate(rules, {
  emailField,
  passwordField,
});

const isFromEmpty = computed(() => !emailField.value || !passwordField.value);

const isValid = computed(() => v$.value.$errors);

const submitLogin = async () => {
  try {
    isLoading.value = true;

    const formData = {
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
