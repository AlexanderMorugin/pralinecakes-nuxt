<template>
  <div class="commentCard page-padding-x">
    <div class="commentCard__top">
      <div class="commentCard__product">
        <CommentImage
          :src="comment.product_image"
          :alt="comment.product_title"
        />
        <span class="commentCard__productTitle">{{
          comment.product_title
        }}</span>
      </div>

      <div class="commentCard__visibilityBlock">
        <div class="commentCard__iconBox">
          <span class="commentCard__date">сейчас</span>
          <IconVisibility v-if="comment.visibility" class="commentCard__icon" />
          <IconVisibilityOff v-else class="commentCard__icon" />
        </div>

        <ButtonWithText
          :text="comment.visibility ? 'скрыть' : 'активировать'"
          @handleClick="updateVisibility"
        />
      </div>
    </div>

    <div class="commentCard__product">
      <span class="commentCard__user">{{ comment.user_name }}</span>
      <span class="commentCard__date">{{ comment.date }}</span>
    </div>

    <ProductRating :rating="comment.user_rating" :maxStars="5" />

    <div>
      <span class="commentCard__title">Отзыв:</span>
      <div class="commentCard__text">
        {{ comment.user_comment }}
      </div>
    </div>

    <div class="commentCard__deleteBlock">
      <ButtonWithText
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
          @yesClick="deleteComment"
          @noClick="isConfirmModalOpen = false"
        />
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
const { comment } = defineProps(["comment"]);

const toast = useToast();
const commentsStore = useCommentsStore();

const isLoading = ref(false);
const isConfirmModalOpen = ref(false);

const updateVisibility = async () => {
  try {
    isLoading.value = true;

    const result = await commentsStore.updateVisibility();

    if (result.status.value === "error") {
      toast.error({
        title: "Ошибка!",
        message: "Изменения выполнить не удалось.",
      });
    }

    if (result.status.value === "success") {
      toast.success({
        title: "Успешно!",
        message: "Отзыв виден на клиентском сайте.",
      });
    }
  } catch (err) {
    console.log(err);
  } finally {
    isLoading.value = false;
  }
};

const deleteComment = async () => {
  try {
    isLoading.value = true;

    const result = await commentsStore.deleteComment();

    if (result.status.value === "error") {
      toast.error({
        title: "Ошибка!",
        message: "Отзыв удалить не удалось.",
      });
    }

    if (result.status.value === "success") {
      toast.success({
        title: "Успешно!",
        message: "Отзыв удален.",
      });
      return navigateTo("/admin/comments");
    }
  } catch (err) {
    console.log(err);
  } finally {
    isLoading.value = false;
  }
};
</script>

<style lang="scss" scoped>
.commentCard {
  display: flex;
  flex-direction: column;
  gap: 20px;

  &__top {
    display: flex;
    justify-content: space-between;
    gap: 20px;

    @media (max-width: 767px) {
      flex-direction: column;
    }
  }

  &__product {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  &__productTitle {
    // font-family: "Montserrat-Regular", sans-serif;
    font-size: 14px;
    line-height: 22px;
    color: var(--mask-black-thirdly);
  }

  &__user {
    // font-family: "Montserrat-Regular", sans-serif;
    font-size: 20px;
    line-height: 28px;
    color: var(--black-primary);
  }

  &__date {
    // font-family: "Montserrat-Regular", sans-serif;
    font-size: 12px;
    color: var(--mask-black-thirdly);
  }

  &__title {
    // font-family: "Montserrat-Regular", sans-serif;
    font-size: 14px;
    color: var(--mask-black-thirdly);
  }

  &__text {
    // font-family: "Montserrat-Regular", sans-serif;
    font-size: 20px;
    line-height: 28px;
    color: var(--black-primary);
    word-break: break-all;
    padding-top: 10px;
  }

  &__visibilityBlock {
    display: flex;
    align-items: center;
    gap: 20px;

    @media (max-width: 767px) {
      justify-content: flex-end;
    }
  }

  &__deleteBlock {
    display: flex;
    justify-content: flex-end;
  }

  &__iconBox {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  &__icon {
    width: 28px;
    height: 28px;
    fill: var(--black-primary);

    @media (max-width: 767px) {
      width: 20px;
      height: 20px;
    }
  }
}
</style>
