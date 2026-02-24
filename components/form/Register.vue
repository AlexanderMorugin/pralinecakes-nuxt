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
      lastInput="true"
    />
    <div class="form-top-margin">
      <FormSubmit
        title="Регистрация"
        :isFromEmpty="isFromEmpty"
        :isValid="isValid.length"
        :isLoading="isLoading"
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
const nameField = ref(null);
const emailField = ref(null);

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
}));

const v$ = useVuelidate(rules, {
  nameField,
  emailField,
});

const isFromEmpty = computed(() => !nameField.value || !emailField.value);

const isValid = computed(() => v$.value.$errors);

const submitRegister = async () => {
  try {
    isLoading.value = true;

    const formData = {
      user_name: nameField.value.trim(),
      user_email: emailField.value.trim(),
    };

    console.log(formData);
  } catch (err) {
    console.log(err);
  } finally {
    isLoading.value = false;
  }
};
</script>
