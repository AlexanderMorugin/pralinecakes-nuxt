<template>
  <header class="header">
    <WrapperPadding>
      <div class="header__container">
        <div class="header__left">
          <ButtonWithIcon
            name="menu"
            class="header__iconMenu"
            @click="isMenuModalOpen = true"
          />
          <ButtonWithIcon
            name="search"
            class="header__iconSearch"
            @click="isSearchModalOpen = true"
          />
        </div>

        <div class="header__right">
          <div class="header__block">
            <ButtonWithIcon name="phone" class="header__iconPhone" />
            <ButtonWithIcon name="chat" class="header__iconChat" />
          </div>

          <div class="header__block">
            <ButtonWithIcon name="account" class="header__iconAccount" />
            <ButtonWithIcon
              name="cart"
              class="header__iconCart"
              @click="isCartModalOpen = true"
            />
          </div>
        </div>
      </div>
    </WrapperPadding>
  </header>

  <ClientOnly>
    <!-- Модалка меню -->
    <Teleport to="#teleports">
      <Transition name="left">
        <ModalHeader
          v-if="isMenuModalOpen"
          :isModalOpen="isMenuModalOpen"
          place="left"
          title="Меню"
          @closeModal="isMenuModalOpen = false"
        />
      </Transition>
    </Teleport>

    <!-- Модалка поиска -->
    <Teleport to="#teleports">
      <Transition name="left">
        <ModalHeader
          v-if="isSearchModalOpen"
          :isModalOpen="isSearchModalOpen"
          place="left"
          title="Поиск"
          @closeModal="isSearchModalOpen = false"
        />
      </Transition>
    </Teleport>

    <!-- Модалка корзины -->
    <Teleport to="#teleports">
      <Transition name="right">
        <ModalHeader
          v-if="isCartModalOpen"
          :isModalOpen="isCartModalOpen"
          place="right"
          title="Корзина"
          @closeModal="isCartModalOpen = false"
        />
      </Transition>
    </Teleport>
  </ClientOnly>
</template>

<script setup>
const isMenuModalOpen = ref(false);
const isSearchModalOpen = ref(false);
const isCartModalOpen = ref(false);
</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  animation: filter 3s ease;
  backdrop-filter: blur(15px) grayscale(50%);
  z-index: 3;

  @media (max-width: 768px) {
    height: 60px;
  }

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  &__left {
    display: flex;
    align-items: center;
    width: fit-content;
  }

  &__right {
    display: flex;
    align-items: center;
    gap: 50px;
    width: fit-content;

    @media (max-width: 768px) {
      gap: 30px;
    }
  }

  &__block {
    display: flex;
    align-items: center;
    width: fit-content;
  }

  &__iconMenu {
    animation: iconMenu 1s ease;
  }

  &__iconSearch {
    animation: iconSearch 1s ease;
  }

  &__iconCart {
    animation: iconCart 1s ease;
  }

  &__iconAccount {
    animation: iconAccount 1s ease;
  }

  &__iconPhone {
    animation: iconPhone 1s ease;
  }

  &__iconChat {
    animation: iconChat 1s ease;
  }
}

@keyframes iconChat {
  0% {
    opacity: 0;
    transform: translateY(200%);
  }
  65% {
    opacity: 0;
    transform: translateY(200%);
  }
  80% {
    opacity: 1;
    transform: translateY(0);
  }
  90% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes iconPhone {
  0% {
    opacity: 0;
    transform: translateY(-150%);
  }
  65% {
    opacity: 0;
    transform: translateY(-150%);
  }
  80% {
    opacity: 1;
    transform: translateY(0);
  }
  90% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes iconAccount {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  57% {
    opacity: 0;
    transform: translateY(100%);
  }
  75% {
    opacity: 1;
    transform: translateY(0);
  }
  90% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes iconCart {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  70% {
    opacity: 0;
    transform: translateX(100%);
  }
  75% {
    opacity: 1;
    transform: translateX(0);
  }
  90% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes iconSearch {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  70% {
    opacity: 0;
    transform: translateY(-100%);
  }
  80% {
    opacity: 1;
    transform: translateY(0);
  }
  90% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes iconMenu {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  65% {
    opacity: 0;
    transform: translateX(-100%);
  }
  70% {
    opacity: 1;
    transform: translateX(0);
  }
  90% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes filter {
  0% {
    backdrop-filter: blur(0) grayscale(0%);
  }
  50% {
    backdrop-filter: blur(0) grayscale(0%);
  }
  100% {
    backdrop-filter: blur(15px) grayscale(50%);
  }
}
</style>
