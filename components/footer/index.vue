<template>
  <footer class="footer page-padding-x">
    <div class="footer__container">
      <div class="footer__logo"><Logo place="footer" /></div>
      <div class="footer__content">
        <FooterBlock subtitle="Навигация" name="menu" />
        <div class="footer__contentBlock">
          <FooterBlock subtitle="Телефоны" name="phone" />
          <FooterBlock subtitle="Мессенджеры" name="chat" />
        </div>
        <div class="footer__contentBlock">
          <FooterBlock subtitle="Адрес" name="address" />
          <FooterBlock subtitle="Время работы" name="time" />
        </div>
      </div>
    </div>

    <div class="footer__bottom">
      <span class="footer__bottomCompany">ООО «Пралинэ» {{ fullYear }}</span>
      <div class="footer__bottomLinks">
        Политика конфиденциальности. Политика Cookies. Данные о продавце.
      </div>
    </div>
  </footer>
</template>

<script setup>
const { fullYear } = useDate();
</script>

<style lang="scss" scoped>
.footer {
  // background: var(--black-primary);
  // border-top: 1px solid var(--border-primary);
  padding-bottom: 40px;
  z-index: 1;

  // @media (max-width: 767px) {
  //   padding-bottom: 40px;
  // }

  &__container {
    border-top: 1px solid var(--border-primary);
    padding-top: 40px;
  }

  &__logo {
    display: flex;
    justify-content: center;
  }

  &__content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px;
    row-gap: 40px;
    margin-top: 40px;

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }
  }

  &__contentBlock {
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media (max-width: 767px) {
      gap: 40px;
    }
  }

  &__bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    // height: 100px;
    border-top: 1px solid var(--border-primary);
    padding-top: 20px;
    // padding-bottom: 40px;
    margin-top: 40px;

    @media (max-width: 767px) {
      flex-direction: column;
    }
  }

  &__bottomCompany {
    line-height: 24px;
  }

  &__bottomLinks {
    text-align: right;
    line-height: 24px;
  }
}
</style>
