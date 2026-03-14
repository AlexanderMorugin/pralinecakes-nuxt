<template>
  <div class="user page-padding-x">
    <UserCard
      v-if="userStore.adminUser"
      :user="userStore.adminUser"
      place="admin"
    />
    <UserOrders v-if="userStore.adminUser" place="admin" />
    <UserComments
      v-if="userStore.adminUser"
      :user="userStore.adminUser"
      place="admin"
    />

    <!-- Кнопка удалить пользователя -->
    <ButtonWithText
      v-if="userStore.adminUser"
      color="red"
      text="удалить"
      @handleClick="isConfirmModalOpen = true"
    />
  </div>

  <!-- Модалка подтверждения -->
  <Teleport to="#teleports">
    <Transition name="top">
      <ModalConfirm
        v-if="isConfirmModalOpen"
        :isModalOpen="isConfirmModalOpen"
        title="Подтвердить удаление?"
        :isLoading="isLoading"
        @yesClick="deleteUser"
        @noClick="isConfirmModalOpen = false"
      />
    </Transition>
  </Teleport>
</template>

<script setup>
definePageMeta({
  middleware: ["admin"],
  layout: "admin",
});

const toast = useToast();
const route = useRoute();
const userStore = useUserStore();
await userStore.getAdminUser(route.params.id);

const isLoading = ref(false);
const isConfirmModalOpen = ref(false);

const deleteUser = async () => {
  try {
    isLoading.value = true;

    const result = await userStore.deleteAdminUser();

    if (result.status.value === "error") {
      toast.error({
        title: "Ошибка!",
        message: "Клиента удалить не удалось.",
      });
    }

    if (result.status.value === "success") {
      toast.success({
        title: "Успешно!",
        message: "Клиент удален.",
      });
    }
    return navigateTo("/admin/users");
  } catch (error) {
    console.log(error);
  } finally {
    isLoading.value = false;
  }
};
</script>

<style lang="scss" scoped>
.user {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
