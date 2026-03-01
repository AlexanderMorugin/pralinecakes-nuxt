<template>
  <div class="modalConfirm">
    <div class="modalConfirm__container">
      <span class="modalConfirm__title">{{ title }}</span>
      <div class="modalConfirm__buttons">
        <button
          class="modalConfirm__button modalConfirm__button_yes"
          @click="emit('yesClick')"
        >
          <LoaderButton v-if="isLoading" />
          <span v-else>Да</span>
        </button>
        <button
          class="modalConfirm__button modalConfirm__button_no"
          @click="emit('noClick')"
        >
          Нет
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const { title, isLoading } = defineProps(["title", "isLoading"]);
const emit = defineEmits(["yesClick", "noClick"]);
</script>

<style lang="scss" scoped>
.modalConfirm {
  position: fixed;
  bottom: 2%;
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  z-index: 1;

  &__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100%;
    max-width: 300px;
    background: var(--deep-blue-fourthly);
    border-radius: var(--border-radius-xxl);
    box-shadow: var(--shadow-primary);
    padding: 20px;
  }

  &__title {
    // font-family: "Montserrat-Regular", sans-serif;
    // font-size: 16px;
    letter-spacing: 1px;
    color: var(--white-primary);
  }

  &__buttons {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    width: 100%;
  }

  &__button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 36px;
    border-radius: var(--border-radius-xs);
    color: var(--white-primary);
    letter-spacing: 1px;
    transition: 0.2s ease;

    &_yes {
      background: var(--mask-blue-fourthly);

      &:hover {
        background: var(--green-fourthly);
      }
    }

    &_no {
      background: var(--red-primary);

      &:hover {
        background: var(--red-secondary);
      }
    }
  }
}
</style>
