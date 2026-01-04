import { defineStore } from "pinia";

export type TComment = {
  id: number;
  comment: string;
};

export interface ICake {
  id: number;
  slug: string;
  image_list_card: string;
  image_800: string[];
  image_2800: string[];
  image_meta: string;
  name: string;
  description: string;
  price: number;
  weigth: number;
  width: number;
  height: number;
  expirationDate: number;
  storageTemperature: number[];
  rating: number;
  badgeStatus?: string | null;
  comments: TComment[];
  discount: number;
  isFavorite: Boolean;
}

export const useCakesStore = defineStore("cakesStore", () => {
  const cakes = ref<ICake[]>([
    {
      id: 1,
      slug: "air-nut",

      image_list_card:
        "/images/cakes/almond-prune/almond-prune-cake-1-600-400.webp",
      image_800: [
        "/images/cakes/almond-prune/almond-prune-cake-1-800-533.webp",
        "/images/cakes/almond-prune/almond-prune-cake-2-800-533.webp",
        "/images/cakes/almond-prune/almond-prune-cake-3-800-533.webp",
        "/images/cakes/almond-prune/almond-prune-cake-4-800-533.webp",
        "/images/cakes/almond-prune/almond-prune-cake-5-800-533.webp",
        "/images/cakes/almond-prune/almond-prune-cake-6-800-533.webp",
      ],
      image_2800: [
        "/images/cakes/almond-prune/almond-prune-cake-1-2800-1866.webp",
        "/images/cakes/almond-prune/almond-prune-cake-2-2800-1866.webp",
        "/images/cakes/almond-prune/almond-prune-cake-3-2800-1866.webp",
        "/images/cakes/almond-prune/almond-prune-cake-4-2800-1866.webp",
        "/images/cakes/almond-prune/almond-prune-cake-5-2800-1866.webp",
        "/images/cakes/almond-prune/almond-prune-cake-6-2800-1866.webp",
      ],
      image_meta: "/images/cakes/almond-prune/almond-prune-cake-1-800-533.webp",

      name: "Торт Воздушно ореховый",
      description:
        "Самый шоколадный и один из самых нежных десертов нашей кондитерской. Самый шоколадный и один из самых нежных десертов нашей кондитерской.",
      price: 1860,
      weigth: 1640,
      width: 30,
      height: 10,
      expirationDate: 72,
      storageTemperature: [4, 6],
      rating: 5,
      badgeStatus: "Хит",
      comments: [],
      discount: 30,
      isFavorite: false,
    },
    {
      id: 2,
      slug: "almond",

      image_list_card: "/images/cakes/carrot/carrot-cake-1-600-400.webp",
      image_800: [
        "/images/cakes/carrot/carrot-cake-1-800-533.webp",
        "/images/cakes/carrot/carrot-cake-2-800-533.webp",
        "/images/cakes/carrot/carrot-cake-3-800-533.webp",
        "/images/cakes/carrot/carrot-cake-4-800-533.webp",
        "/images/cakes/carrot/carrot-cake-5-800-533.webp",
        "/images/cakes/carrot/carrot-cake-6-800-533.webp",
      ],
      image_2800: [
        "/images/cakes/carrot/carrot-cake-1-2800-1866.webp",
        "/images/cakes/carrot/carrot-cake-2-2800-1866.webp",
        "/images/cakes/carrot/carrot-cake-3-2800-1866.webp",
        "/images/cakes/carrot/carrot-cake-4-2800-1866.webp",
        "/images/cakes/carrot/carrot-cake-5-2800-1866.webp",
        "/images/cakes/carrot/carrot-cake-6-2800-1866.webp",
      ],
      image_meta: "/images/cakes/carrot/carrot-cake-1-800-533.webp",

      name: "Торт Миндальный",
      description:
        "Самый шоколадный и один из самых нежных десертов нашей кондитерской. Самый шоколадный и один из самых нежных десертов нашей кондитерской.",
      price: 1860,
      weigth: 1640,
      width: 30,
      height: 10,
      expirationDate: 72,
      storageTemperature: [4, 6],
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
      slug: "honey",

      image_list_card: "/images/cakes/coconut/coconut-cake-1-600-400.webp",
      image_800: [
        "/images/cakes/coconut/coconut-cake-1-800-533.webp",
        "/images/cakes/coconut/coconut-cake-2-800-533.webp",
        "/images/cakes/coconut/coconut-cake-3-800-533.webp",
        "/images/cakes/coconut/coconut-cake-4-800-533.webp",
        "/images/cakes/coconut/coconut-cake-5-800-533.webp",
        "/images/cakes/coconut/coconut-cake-6-800-533.webp",
      ],
      image_2800: [
        "/images/cakes/coconut/coconut-cake-1-2800-1866.webp",
        "/images/cakes/coconut/coconut-cake-2-2800-1866.webp",
        "/images/cakes/coconut/coconut-cake-3-2800-1866.webp",
        "/images/cakes/coconut/coconut-cake-4-2800-1866.webp",
        "/images/cakes/coconut/coconut-cake-5-2800-1866.webp",
        "/images/cakes/coconut/coconut-cake-6-2800-1866.webp",
      ],
      image_meta: "/images/cakes/coconut/coconut-cake-1-800-533.webp",

      name: "Торт Медовик",
      description:
        "Самый шоколадный и один из самых нежных десертов нашей кондитерской. Самый шоколадный и один из самых нежных десертов нашей кондитерской.",
      price: 1860,
      weigth: 1640,
      width: 30,
      height: 10,
      expirationDate: 72,
      storageTemperature: [4, 6],
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
      isFavorite: true,
    },
    {
      id: 4,
      slug: "currant-coconut",

      image_list_card: "/images/cakes/esterhazy/esterhazy-cake-1-600-400.webp",
      image_800: [
        "/images/cakes/esterhazy/esterhazy-cake-1-800-533.webp",
        "/images/cakes/esterhazy/esterhazy-cake-2-800-533.webp",
        "/images/cakes/esterhazy/esterhazy-cake-3-800-533.webp",
        "/images/cakes/esterhazy/esterhazy-cake-4-800-533.webp",
        "/images/cakes/esterhazy/esterhazy-cake-5-800-533.webp",
        "/images/cakes/esterhazy/esterhazy-cake-6-800-533.webp",
      ],
      image_2800: [
        "/images/cakes/esterhazy/esterhazy-cake-1-2800-1866.webp",
        "/images/cakes/esterhazy/esterhazy-cake-2-2800-1866.webp",
        "/images/cakes/esterhazy/esterhazy-cake-3-2800-1866.webp",
        "/images/cakes/esterhazy/esterhazy-cake-4-2800-1866.webp",
        "/images/cakes/esterhazy/esterhazy-cake-5-2800-1866.webp",
        "/images/cakes/esterhazy/esterhazy-cake-6-2800-1866.webp",
      ],
      image_meta: "/images/cakes/esterhazy/esterhazy-cake-1-800-533.webp",

      name: "Торт Чёрная смородина и кокос",
      description:
        "Самый шоколадный и один из самых нежных десертов нашей кондитерской. Самый шоколадный и один из самых нежных десертов нашей кондитерской.",
      price: 1860,
      weigth: 1640,
      width: 30,
      height: 10,
      expirationDate: 72,
      storageTemperature: [4, 6],
      rating: 3,
      badgeStatus: null,
      comments: [
        { id: 1, comment: "Никогда не пробовала ничего подобного. Благодарю!" },
      ],
      discount: 10,
      isFavorite: false,
    },
  ]);

  const cake = ref<any>(null);

  const getCake = async (slug: string) => {
    cake.value = cakes.value.find((item) => item.slug === slug);
  };

  return {
    cakes,
    cake,
    getCake,
  };
});
