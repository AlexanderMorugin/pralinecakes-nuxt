<template>
  <div class="buttonCounter">
    <button
      class="buttonCounter__button buttonCounter__button_left"
      @click="$emit('decrement')"
    >
      <IconMinus class="buttonCounter__icon" />
    </button>
    <div class="buttonCounter__numberBox">
      <span class="buttonCounter__number">{{ count }}</span>
    </div>
    <button
      class="buttonCounter__button buttonCounter__button_right"
      @click="$emit('increment')"
    >
      <IconPlus class="buttonCounter__icon" />
    </button>
  </div>
</template>

<script setup>
const { count } = defineProps(["count"]);
const emit = defineEmits(["increment", "decrement"]);

// const cartStore = useCartStore();

// const count = computed(
//   () => cartStore.cart.filter((item) => item.id === product.id).length
// );
</script>

<style lang="scss" scoped>
.buttonCounter {
  display: grid;
  grid-template-columns: 25% 1fr 25%;
  height: 100%;
  background: var(--white-primary);
  border-radius: var(--border-radius-xs);
  padding: 10px 5px;

  &__button {
    display: flex;
    justify-content: center;
    align-items: center;

    &_left {
      border-right: 1px solid var(--mask-black-primary);
    }

    &_right {
      border-left: 1px solid var(--mask-black-primary);
    }
  }

  &__icon {
    width: 20px;
    height: 20px;
    fill: var(--gradient-button-blue-primary);
    transform: scale(1);
  }

  &__numberBox {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__number {
    font-family: "Roboto-Regular", sans-serif;
    font-size: 18px;
    color: var(--black-primary);
  }
}

.buttonCounter__button_left:hover .buttonCounter__icon {
  transform: scale(1.2);
}

.buttonCounter__button_right:hover .buttonCounter__icon {
  transform: scale(1.2);
}
</style>
