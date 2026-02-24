<template>
  <form @submit.prevent="submitRegister" class="form-block">
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
        title="Войти"
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
const emailField = ref(null);

// Валидация
const rules = computed(() => ({
  emailField: {
    required: helpers.withMessage("Укажите почту", required),
    email: helpers.withMessage("Не корректно", email),
  },
}));

const v$ = useVuelidate(rules, {
  emailField,
});

const isFromEmpty = computed(() => !emailField.value);

const isValid = computed(() => v$.value.$errors);

const submitRegister = async () => {
  try {
    isLoading.value = true;

    console.log(emailField.value.trim());
  } catch (err) {
    console.log(err);
  } finally {
    isLoading.value = false;
  }
};
</script>
