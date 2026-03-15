<template>
  <div class="orderManager">
    <ButtonManager
      name="accept"
      :status="adminOrderStore.adminOrder[0].status_accept"
      :undoStatus="
        adminOrderStore.adminOrder[0].status_accept &&
        !adminOrderStore.adminOrder[0].status_delivery &&
        !adminOrderStore.adminOrder[0].status_complete
      "
      :isLoading="isAcceptLoading"
      @handleClick="acceptOrder"
      @handleUndo="undoAcceptOrder"
    />

    <div v-if="adminOrderStore.adminOrder[0].status_accept">
      <ButtonManager
        name="delivery"
        :status="adminOrderStore.adminOrder[0].status_delivery"
        :undoStatus="
          adminOrderStore.adminOrder[0].status_accept &&
          adminOrderStore.adminOrder[0].status_delivery &&
          !adminOrderStore.adminOrder[0].status_complete
        "
        :isLoading="isDeliveryLoading"
        @handleClick="deliveryOrder"
        @handleUndo="undoDeliveryOrder"
      />
    </div>

    <div v-if="adminOrderStore.adminOrder[0].status_delivery">
      <ButtonManager
        name="complete"
        :status="adminOrderStore.adminOrder[0].status_complete"
        :undoStatus="
          adminOrderStore.adminOrder[0].status_accept &&
          adminOrderStore.adminOrder[0].status_delivery &&
          adminOrderStore.adminOrder[0].status_complete
        "
        :isLoading="isCompleteLoading"
        @handleClick="completeOrder"
        @handleUndo="undoCompleteOrder"
      />
    </div>

    <ButtonManager name="delete" @handleClick="isConfirmModalOpen = true" />

    <!-- Модалка подтверждения -->
    <Teleport to="#teleports">
      <Transition name="top">
        <ModalConfirm
          v-if="isConfirmModalOpen"
          :isModalOpen="isMenuModalOpen"
          title="Подтвердить удаление"
          :isLoading="isDeleteLoading"
          @yesClick="deleteOrder"
          @noClick="isConfirmModalOpen = false"
        />
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
const toast = useToast();
const adminOrderStore = useAdminOrderStore();
const { date } = useDate();

const isAcceptLoading = ref(false);
const isDeliveryLoading = ref(false);
const isCompleteLoading = ref(false);
const isDeleteLoading = ref(false);

const isConfirmModalOpen = ref(false);

const acceptOrder = async () => {
  try {
    isAcceptLoading.value = true;

    const result = await adminOrderStore.updateAdminStatusAcceptOrder(date);

    if (result.status.value === "error") {
      toast.error({
        title: "Ошибка!",
        message: "Заказ принять не удалось.",
      });
    }

    if (result.status.value === "success") {
      toast.success({
        title: "Успешно!",
        message: "Заказ принят.",
      });
    }
  } catch (err) {
    console.log(err);
  } finally {
    isAcceptLoading.value = false;
  }
};

const undoAcceptOrder = async () => {
  try {
    isAcceptLoading.value = true;

    const result = await adminOrderStore.updateAdminStatusAcceptOrder(null);

    if (result.status.value === "error") {
      toast.error({
        title: "Ошибка!",
        message: "Отмену подтвердить не удалось.",
      });
    }

    if (result.status.value === "success") {
      toast.success({
        title: "Успешно!",
        message: "Отмена выполнена.",
      });
    }
  } catch (err) {
    console.log(err);
  } finally {
    isAcceptLoading.value = false;
  }
};

const deliveryOrder = async () => {
  try {
    isDeliveryLoading.value = true;

    const result = await adminOrderStore.updateAdminStatusDeliveryOrder(date);

    if (result.status.value === "error") {
      toast.error({
        title: "Ошибка!",
        message: "Доставку подтвердить не удалось.",
      });
    }

    if (result.status.value === "success") {
      toast.success({
        title: "Успешно!",
        message: "Доставка подтверждена.",
      });
    }
  } catch (err) {
    console.log(err);
  } finally {
    isDeliveryLoading.value = false;
  }
};

const undoDeliveryOrder = async () => {
  try {
    isDeliveryLoading.value = true;

    const result = await adminOrderStore.updateAdminStatusDeliveryOrder(null);

    if (result.status.value === "error") {
      toast.error({
        title: "Ошибка!",
        message: "Отмену подтвердить не удалось.",
      });
    }

    if (result.status.value === "success") {
      toast.success({
        title: "Успешно!",
        message: "Отмена выполнена.",
      });
    }
  } catch (err) {
    console.log(err);
  } finally {
    isDeliveryLoading.value = false;
  }
};

const completeOrder = async () => {
  try {
    isCompleteLoading.value = true;

    const result = await adminOrderStore.updateAdminStatusCompleteOrder(date);

    if (result.status.value === "error") {
      toast.error({
        title: "Ошибка!",
        message: "Завершение подтвердить не удалось.",
      });
    }

    if (result.status.value === "success") {
      toast.success({
        title: "Успешно!",
        message: "Заказ завершен.",
      });
    }
  } catch (err) {
    console.log(err);
  } finally {
    isCompleteLoading.value = false;
  }
};

const undoCompleteOrder = async () => {
  try {
    isCompleteLoading.value = true;

    const result = await adminOrderStore.updateAdminStatusCompleteOrder(null);

    if (result.status.value === "error") {
      toast.error({
        title: "Ошибка!",
        message: "Отмену подтвердить не удалось.",
      });
    }

    if (result.status.value === "success") {
      toast.success({
        title: "Успешно!",
        message: "Отмена выполнена.",
      });
    }
  } catch (err) {
    console.log(err);
  } finally {
    isCompleteLoading.value = false;
  }
};

const deleteOrder = async () => {
  try {
    isDeleteLoading.value = true;

    const result = await adminOrderStore.deleteAdminOrder();

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

      return navigateTo("/admin/orders");
    }
  } catch (err) {
    console.log(err);
  } finally {
    isConfirmModalOpen.value = false;
    isDeleteLoading.value = false;
  }
};
</script>

<style lang="scss" scoped>
.orderManager {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}
</style>
