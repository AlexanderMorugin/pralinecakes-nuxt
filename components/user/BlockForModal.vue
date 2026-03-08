<template>
  <div class="userBlockForModal">
    <span class="userBlockForModal__title"
      >Добро пожаловать {{ user.user_name }}!</span
    >
    <div class="userBlockForModal__buttons">
      <ButtonToProfile
        text="В кабинет"
        :user="user"
        @closeModal="$emit('closeModal')"
      />
      <ButtonLogout text="Выйти" @closeModal="$emit('closeModal')" />
    </div>
  </div>
</template>

<script setup>
const { user } = defineProps(["user"]);
const emit = defineEmits(["closeModal"]);
</script>

<style lang="scss" scoped>
.userBlockForModal {
  display: flex;
  flex-direction: column;
  gap: 40px;

  &__title {
    font-size: 24px;
    line-height: 32px;
  }

  &__buttons {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
}
</style>
