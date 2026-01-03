import { defineStore } from "pinia";

export type TComment = {
  id: number;
  comment: string;
};

export interface ICake {
  id: number;
  slug: string;
  image_list_card: string;

  image_100: string[];
  image_800: string[];
  // image_1400: string[];
  // image_2800: string[];

  image_meta: string;
  name: string;
  description: string;
  price: number;
  weigth: number;
  rating: number;
  badgeStatus?: string | null;
  comments: TComment[];
  discount: number;
  isFavorite: Boolean;
}

export const useCakesStore = defineStore("cakesStore", () => {
  const cakes = ref<ICake[]>([
    // {
    //   id: 1,
    //   slug: "air-nut",
    //   imageListCard:
    //     "/images/cakes/almond-prune/almond-prune-cake-1-600-400.webp",
    //   imageCardOne:
    //     "/images/cakes/almond-prune/almond-prune-cake-1-800-533.webp",
    //   name: "Торт Воздушно ореховый",
    //   description:
    //     "Самый шоколадный и один из самых нежных десертов нашей кондитерской. Самый шоколадный и один из самых нежных десертов нашей кондитерской.",
    //   price: 1860,
    //   weigth: 1640,
    //   rating: 5,
    //   badgeStatus: "Хит",
    //   comments: [],
    //   discount: 30,
    //   isFavorite: false,
    // },
    // {
    //   id: 2,
    //   slug: "almond",
    //   imageListCard: "/images/cakes/carrot/carrot-cake-1-600-400.webp",
    //   imageCardOne: "/images/cakes/carrot/carrot-cake-1-800-533.webp",
    //   name: "Торт Миндальный",
    //   description:
    //     "Самый шоколадный и один из самых нежных десертов нашей кондитерской. Самый шоколадный и один из самых нежных десертов нашей кондитерской.",
    //   price: 1860,
    //   weigth: 1640,
    //   rating: 1,
    //   badgeStatus: null,
    //   comments: [
    //     { id: 1, comment: "Вкусно и точка!" },
    //     { id: 2, comment: "Божественно!" },
    //     { id: 3, comment: "Невероятно но факт!" },
    //   ],
    //   discount: 20,
    //   isFavorite: true,
    // },
    // {
    //   id: 3,
    //   slug: "honey",
    //   imageListCard: "/images/cakes/coconut/coconut-cake-1-600-400.webp",
    //   imageCardOne: "/images/cakes/coconut/coconut-cake-1-800-533.webp",
    //   name: "Торт Медовик",
    //   description:
    //     "Самый шоколадный и один из самых нежных десертов нашей кондитерской. Самый шоколадный и один из самых нежных десертов нашей кондитерской.",
    //   price: 1860,
    //   weigth: 1640,
    //   rating: 2,
    //   badgeStatus: "Новинка",
    //   comments: [
    //     { id: 1, comment: "Вкусно и точка!" },
    //     { id: 2, comment: "Божественно!" },
    //     { id: 3, comment: "Невероятно но факт!" },
    //     { id: 4, comment: "Обожаю ваши торты!" },
    //     { id: 5, comment: "Полная фигня." },
    //     { id: 6, comment: "Никогда не пробовала ничего подобного. Благодарю!" },
    //     { id: 7, comment: "Быстрая доставка. Внимательный персонал!" },
    //   ],
    //   discount: 0,
    //   isFavorite: true,
    // },
    {
      id: 4,
      slug: "currant-coconut",
      image_list_card: "/images/cakes/esterhazy/esterhazy-cake-1-600-400.webp",

      image_100: [
        "/images/cakes/esterhazy/esterhazy-cake-1-100-100.webp",
        "/images/cakes/esterhazy/esterhazy-cake-2-100-100.webp",
        "/images/cakes/esterhazy/esterhazy-cake-3-100-100.webp",
        "/images/cakes/esterhazy/esterhazy-cake-4-100-100.webp",
        "/images/cakes/esterhazy/esterhazy-cake-5-100-100.webp",
        "/images/cakes/esterhazy/esterhazy-cake-6-100-100.webp",
      ],
      image_800: [
        "/images/cakes/esterhazy/esterhazy-cake-1-800-533.webp",
        "/images/cakes/esterhazy/esterhazy-cake-2-800-533.webp",
        "/images/cakes/esterhazy/esterhazy-cake-3-800-533.webp",
        "/images/cakes/esterhazy/esterhazy-cake-4-800-533.webp",
        "/images/cakes/esterhazy/esterhazy-cake-5-800-533.webp",
        "/images/cakes/esterhazy/esterhazy-cake-6-800-533.webp",
      ],

      // image_modal_one:
      // "/images/cakes/esterhazy/esterhazy-cake-1-2800-1866.webp",
      // image_large_one: "/images/cakes/esterhazy/esterhazy-cake-1-1400-933.webp",
      // image_normal_one: "/images/cakes/esterhazy/esterhazy-cake-1-800-533.webp",
      // image_thumb_one: "/images/cakes/esterhazy/esterhazy-cake-1-100-100.webp",

      image_meta: "/images/cakes/esterhazy/esterhazy-cake-1-800-533.webp",

      name: "Торт Чёрная смородина и кокос",
      description:
        "Самый шоколадный и один из самых нежных десертов нашей кондитерской. Самый шоколадный и один из самых нежных десертов нашей кондитерской.",
      price: 1860,
      weigth: 1640,
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
