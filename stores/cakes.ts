import { defineStore } from "pinia";

export const useCakesStore = defineStore("cakesStore", () => {
  const cakes = ref([
    {
      id: 1,
      image: "/images/cakes/almond-prune-cake-1-600-400.webp",
      name: "Торт Воздушно ореховый",
      description:
        "Самый шоколадный и один из самых нежных десертов нашей кондитерской. Самый шоколадный и один из самых нежных десертов нашей кондитерской.",
      price: 1860,
      weigth: 1640,
      quantity: 0,
      rating: 5,
      badgeStatus: "Хит",
      comments: [],
      discount: 30,
      isFavorite: false,
    },
    {
      id: 2,
      image: "/images/cakes/carrot-cake-1-600-400.webp",
      name: "Торт Миндальный",
      description:
        "Самый шоколадный и один из самых нежных десертов нашей кондитерской. Самый шоколадный и один из самых нежных десертов нашей кондитерской.",
      price: 1860,
      weigth: 1640,
      quantity: 0,
      rating: 1,
      badgeStatus: null,
      comments: [
        { id: 1, comment: "Вкусно и точка!" },
        { id: 2, comment: "Божественно!" },
        { id: 3, comment: "Невероятно но факт!" },
      ],
      discount: 20,
      isFavorite: true,
    },
    {
      id: 3,
      image: "/images/cakes/coconut-cake-1-600-400.webp",
      name: "Торт Медовик",
      description:
        "Самый шоколадный и один из самых нежных десертов нашей кондитерской. Самый шоколадный и один из самых нежных десертов нашей кондитерской.",
      price: 1860,
      weigth: 1640,
      quantity: 0,
      rating: 2,
      badgeStatus: "Новинка",
      comments: [
        { id: 1, comment: "Вкусно и точка!" },
        { id: 2, comment: "Божественно!" },
        { id: 3, comment: "Невероятно но факт!" },
        { id: 4, comment: "Обожаю ваши торты!" },
        { id: 5, comment: "Полная фигня." },
        { id: 6, comment: "Никогда не пробовала ничего подобного. Благодарю!" },
        { id: 7, comment: "Быстрая доставка. Внимательный персонал!" },
      ],
      discount: 0,
      isFavorite: false,
    },
    {
      id: 4,
      image: "/images/cakes/esterhazy-cake-1-600-400.webp",
      name: "Торт Чёрная смородина и кокос",
      description:
        "Самый шоколадный и один из самых нежных десертов нашей кондитерской. Самый шоколадный и один из самых нежных десертов нашей кондитерской.",
      price: 1860,
      weigth: 1640,
      quantity: 0,
      rating: 3,
      badgeStatus: null,
      comments: [
        { id: 1, comment: "Никогда не пробовала ничего подобного. Благодарю!" },
      ],
      discount: 10,
      isFavorite: false,
    },
  ]);

  const increment = (id: Number) => {
    cakes.value = cakes.value.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
  };

  const decrement = (id: Number) => {
    cakes.value = cakes.value.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity - 1 } : item
    );
  };

  return { cakes, increment, decrement };
});
