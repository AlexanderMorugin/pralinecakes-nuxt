<template>
  <div
    :class="['buttonCounter', { buttonCounter_cartList: place === 'cartList' }]"
  >
    <button
      class="buttonCounter__button"
      :class="
        place === 'cartList'
          ? 'buttonCounter__button_cartList'
          : 'buttonCounter__button_left'
      "
      @click="$emit('decrement')"
    >
      <IconMinus
        :class="[
          'buttonCounter__icon',
          { buttonCounter__icon_cartList: place === 'cartList' },
        ]"
      />
    </button>
    <div class="buttonCounter__numberBox">
      <span
        :class="[
          'buttonCounter__number',
          { buttonCounter__number_cartList: place === 'cartList' },
        ]"
        >{{ count }}</span
      >
    </div>
    <button
      class="buttonCounter__button"
      :class="
        place === 'cartList'
          ? 'buttonCounter__button_cartList'
          : 'buttonCounter__button_right'
      "
      @click="$emit('increment')"
    >
      <IconPlus
        :class="[
          'buttonCounter__icon',
          { buttonCounter__icon_cartList: place === 'cartList' },
        ]"
      />
    </button>
  </div>
</template>

<script setup>
const { count, place } = defineProps(["count", "place"]);
const emit = defineEmits(["increment", "decrement"]);
</script>

<style lang="scss" scoped>
.buttonCounter {
  display: grid;
  grid-template-columns: 25% 1fr 25%;
  height: 100%;
  background: var(--white-primary);
  border-radius: var(--border-radius-xs);
  padding: 10px 5px;

  // border: 1px solid red;

  &_cartList {
    grid-area: counter;
    grid-template-columns: auto 1fr auto;
    height: fit-content;
    width: 100%;
    max-width: 120px;
    background: transparent;
    padding: 5px 0;
    margin: 0 auto;
  }

  &__button {
    display: flex;
    justify-content: center;
    align-items: center;

    &_cartList {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: 1px solid var(--border-primary);
      background: var(--mask-white-thirdly);
    }

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

    &_cartList {
      fill: var(--white-primary);
    }
  }

  &__numberBox {
    display: flex;
    justify-content: center;
    align-items: center;
    // width: 100%;
    // border: 1px solid red;
  }

  &__number {
    font-family: "Roboto-Regular", sans-serif;
    font-size: 18px;
    color: var(--black-primary);

    &_cartList {
      color: var(--white-primary);
      text-align: center;
    }
  }
}

.buttonCounter__button_cartList:hover .buttonCounter__icon {
  transform: scale(1.2);
}

.buttonCounter__button_left:hover .buttonCounter__icon {
  transform: scale(1.2);
}

.buttonCounter__button_right:hover .buttonCounter__icon {
  transform: scale(1.2);
}
</style>
