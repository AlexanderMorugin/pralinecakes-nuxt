<template>
  <form @submit.prevent="submitOrderDelete" class="formOrderDelete">
    <TitleBlock title="Удаление заказа по ID" />

    <FormInput
      label="ID Order"
      type="number"
      name="idOrderField"
      placeholder=" "
      v-model:value="idOrderField"
      lastInput="true"
    />

    <FormSubmit title="Удалить" :isLoading="isLoading" />
  </form>
</template>

<script setup>
const orderStore = useOrderStore();
const toast = useToast();

const isLoading = ref(false);
const idOrderField = ref(null);

const submitOrderDelete = async () => {
  isLoading.value = true;

  try {
    const result = await orderStore.deleteOrder(idOrderField);

    if (result.status.value === "error") {
      toast.error({
        title: "Ошибка!",
        message: "Заказ удалить не удалось.",
      });
    }

    if (result.status.value === "success") {
      toast.success({
        title: "Успешно!",
        message: "Заказ удален.",
      });
    }

    idOrderField.value = null;
  } catch (error) {
    console.log(error);
  } finally {
    isLoading.value = false;
  }
};
</script>

<style lang="scss" scoped>
.formOrderDelete {
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  max-width: 200px;
}
</style>
