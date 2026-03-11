<template>
  <div
    class="userOrderStatus"
    :class="
      order.status_accept && !order.status_delivery
        ? 'userOrderStatus_accept'
        : order.status_accept && order.status_delivery && !order.status_complete
          ? 'userOrderStatus_delivery'
          : order.status_accept &&
              order.status_delivery &&
              order.status_complete
            ? 'userOrderStatus_complete'
            : ''
    "
  >
    {{
      order.status_accept && !order.status_delivery && !order.status_complete
        ? "Принят"
        : order.status_accept && order.status_delivery && !order.status_complete
          ? "Доставляется"
          : order.status_accept &&
              order.status_delivery &&
              order.status_complete
            ? "Выполнен"
            : "В обработке..."
    }}
  </div>
</template>

<script setup>
const { order } = defineProps(["order"]);
</script>

<style lang="scss" scoped>
.userOrderStatus {
  font-family: "Roboto-Regular", sans-serif;
  font-size: 14px;
  color: var(--mask-white-primary);
  text-align: left;
  letter-spacing: 1px;

  &_accept {
    color: var(--red-secondary);
  }

  &_delivery {
    color: var(--green-primary);
  }

  &_complete {
    color: var(--red-fourthly);
  }
}
</style>
