<template>
  <div class="form-block">
    <FormTitle title="Благодарим за отзыв!" />
    <WrapperText
      >Только что мы получили ваш отзыв и после модерации он обязательно будет
      опубликован на сайте.</WrapperText
    >
    <p class="formCommentSuccess">
      * К публикации доступны отзывы, если они объективно касаются только наших
      продуктов и не содержат никакой ненормативной лексики. Так же запрещены
      ссылки на любые внешние ресурсы.
    </p>
    <FormSubmit title="Новый отзыв" @handleClick="$emit('handleClick')" />
  </div>
</template>

<script setup>
const emit = defineEmits(["handleClick"]);
</script>

<style lang="scss" scoped>
.formCommentSuccess {
  font-family: "Montserrat-Regular", sans-serif;
  font-size: 14px;
  line-height: 24px;
  color: var(--mask-white-primary);
}
</style>
