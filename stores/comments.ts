import { defineStore } from "pinia";

export interface IComment {
  id?: number;
  product_id?: number;
  date?: string;
  user_name?: string;
  user_rating?: number;
  user_comment?: string;
  visibility?: boolean;

  createdAt?: any;
  updatedAt?: any;
}

export const useCommentsStore = defineStore("commentsStore", () => {
  // const cakes = ref<ICake[]>([
  //   {
  //     id: 1,
  //     type: "cakes",
  //     slug: "air-nut",

  //     image_800: [
  //       "/images/cakes/almond-prune/c-almond-prune-1-800.webp",
  //       "/images/cakes/almond-prune/c-almond-prune-2-800.webp",
  //       "/images/cakes/almond-prune/c-almond-prune-3-800.webp",
  //       "/images/cakes/almond-prune/c-almond-prune-4-800.webp",
  //       "/images/cakes/almond-prune/c-almond-prune-5-800.webp",
  //       "/images/cakes/almond-prune/c-almond-prune-6-800.webp",
  //     ],
  //     image_2800: [
  //       "/images/cakes/almond-prune/c-almond-prune-1-2800.webp",
  //       "/images/cakes/almond-prune/c-almond-prune-2-2800.webp",
  //       "/images/cakes/almond-prune/c-almond-prune-3-2800.webp",
  //       "/images/cakes/almond-prune/c-almond-prune-4-2800.webp",
  //       "/images/cakes/almond-prune/c-almond-prune-5-2800.webp",
  //       "/images/cakes/almond-prune/c-almond-prune-6-2800.webp",
  //     ],

  //     name: "Торт Воздушно ореховый",
  //     description_short:
  //       "Самый шоколадный и один из самых нежных десертов нашей кондитерской. Самый шоколадный и один из самых нежных десертов нашей кондитерской.",
  //     description_one:
  //       "Стоит обратить внимание на то, что насыщенный вкус и аромат мака прекрасно сочетается с шоколадными сливочными нотками, а маковых зёрнышек в данном продукте предостаточно! Пирожное состоит из нескольких в меру мягких коржей, между которыми расположены мак и крем.",
  //     description_two:
  //       "Данное пирожное крайне рекомендуется все владельцам кофеен и ресторанов! Ваши клиенты будут весьма благодарны за такой хороший десерт, который является не чем то особенным, а просто вкусным, повседневным дополнением к ароматному кофе или горячему чаю.",
  //     price: 1860,
  //     weigth: 1640,
  //     width: 30,
  //     height: 10,
  //     expirationDate: 72,
  //     storageTemperature: [4, 6],
  //     rating: 5,
  //     badgeStatus: "Хит",
  //     ingredients:
  //       "Пшеничная мука, сливки 33%, мак, сахар, куриные яйца, темный шоколад, сливочное масло, кондитерский гель",
  //     nutrition: [
  //       { name: "Калории", count: 259 },
  //       { name: "Белки", count: 5.7 },
  //       { name: "Жиры", count: 26.1 },
  //       { name: "Углеводы", count: 36.6 },
  //     ],
  //     comments: [],
  //     discount: 30,
  //     isFavorite: false,
  //   },
  //   {
  //     id: 2,
  //     type: "cakes",
  //     slug: "almond",

  //     image_800: [
  //       "/images/cakes/carrot/c-carrot-1-800.webp",
  //       "/images/cakes/carrot/c-carrot-2-800.webp",
  //       "/images/cakes/carrot/c-carrot-3-800.webp",
  //       "/images/cakes/carrot/c-carrot-4-800.webp",
  //       "/images/cakes/carrot/c-carrot-5-800.webp",
  //       "/images/cakes/carrot/c-carrot-6-800.webp",
  //     ],
  //     image_2800: [
  //       "/images/cakes/carrot/c-carrot-1-2800.webp",
  //       "/images/cakes/carrot/c-carrot-2-2800.webp",
  //       "/images/cakes/carrot/c-carrot-3-2800.webp",
  //       "/images/cakes/carrot/c-carrot-4-2800.webp",
  //       "/images/cakes/carrot/c-carrot-5-2800.webp",
  //       "/images/cakes/carrot/c-carrot-6-2800.webp",
  //     ],

  //     name: "Торт Миндальный",
  //     description_short:
  //       "Самый шоколадный и один из самых нежных десертов нашей кондитерской. Самый шоколадный и один из самых нежных десертов нашей кондитерской.",
  //     description_one:
  //       "Стоит обратить внимание на то, что насыщенный вкус и аромат мака прекрасно сочетается с шоколадными сливочными нотками, а маковых зёрнышек в данном продукте предостаточно! Пирожное состоит из нескольких в меру мягких коржей, между которыми расположены мак и крем.",
  //     description_two:
  //       "Данное пирожное крайне рекомендуется все владельцам кофеен и ресторанов! Ваши клиенты будут весьма благодарны за такой хороший десерт, который является не чем то особенным, а просто вкусным, повседневным дополнением к ароматному кофе или горячему чаю.",
  //     price: 1860,
  //     weigth: 1640,
  //     width: 30,
  //     height: 10,
  //     expirationDate: 72,
  //     storageTemperature: [4, 6],
  //     rating: 1,
  //     badgeStatus: null,
  //     ingredients:
  //       "Пшеничная мука, сливки 33%, мак, сахар, куриные яйца, темный шоколад, сливочное масло, кондитерский гель",
  //     nutrition: [
  //       { name: "Калории", count: 259 },
  //       { name: "Белки", count: 5.7 },
  //       { name: "Жиры", count: 26.1 },
  //       { name: "Углеводы", count: 36.6 },
  //     ],
  //     comments: [
  //       {
  //         id: 1,
  //         name: "Елена",
  //         rating: 3,
  //         date: "25.03.2025",
  //         comment: "Вкусно и точка!",
  //         productId: 2,
  //       },
  //       {
  //         id: 2,
  //         name: "Наталья",
  //         rating: 5,
  //         date: "08.03.2025",
  //         comment: "Божественно!",
  //         productId: 2,
  //       },
  //       {
  //         id: 3,
  //         name: "Наталья",
  //         rating: 1,
  //         date: "02.03.2025",
  //         comment: "Невероятно но факт!",
  //         productId: 2,
  //       },
  //     ],
  //     discount: 20,
  //     isFavorite: true,
  //   },
  //   {
  //     id: 3,
  //     type: "cakes",
  //     slug: "honey",

  //     image_800: [
  //       "/images/cakes/coconut/c-coconut-1-800.webp",
  //       "/images/cakes/coconut/c-coconut-2-800.webp",
  //       "/images/cakes/coconut/c-coconut-3-800.webp",
  //       "/images/cakes/coconut/c-coconut-4-800.webp",
  //       "/images/cakes/coconut/c-coconut-5-800.webp",
  //       "/images/cakes/coconut/c-coconut-6-800.webp",
  //     ],
  //     image_2800: [
  //       "/images/cakes/coconut/c-coconut-1-2800.webp",
  //       "/images/cakes/coconut/c-coconut-2-2800.webp",
  //       "/images/cakes/coconut/c-coconut-3-2800.webp",
  //       "/images/cakes/coconut/c-coconut-4-2800.webp",
  //       "/images/cakes/coconut/c-coconut-5-2800.webp",
  //       "/images/cakes/coconut/c-coconut-6-2800.webp",
  //     ],

  //     name: "Торт Медовик",
  //     description_short:
  //       "Самый шоколадный и один из самых нежных десертов нашей кондитерской. Самый шоколадный и один из самых нежных десертов нашей кондитерской.",
  //     description_one:
  //       "Стоит обратить внимание на то, что насыщенный вкус и аромат мака прекрасно сочетается с шоколадными сливочными нотками, а маковых зёрнышек в данном продукте предостаточно! Пирожное состоит из нескольких в меру мягких коржей, между которыми расположены мак и крем.",
  //     description_two:
  //       "Данное пирожное крайне рекомендуется все владельцам кофеен и ресторанов! Ваши клиенты будут весьма благодарны за такой хороший десерт, который является не чем то особенным, а просто вкусным, повседневным дополнением к ароматному кофе или горячему чаю.",
  //     price: 1860,
  //     weigth: 1640,
  //     width: 30,
  //     height: 10,
  //     expirationDate: 72,
  //     storageTemperature: [4, 6],
  //     rating: 2,
  //     badgeStatus: "Новинка",
  //     ingredients:
  //       "Пшеничная мука, сливки 33%, мак, сахар, куриные яйца, темный шоколад, сливочное масло, кондитерский гель",
  //     nutrition: [
  //       { name: "Калории", count: 259 },
  //       { name: "Белки", count: 5.7 },
  //       { name: "Жиры", count: 26.1 },
  //       { name: "Углеводы", count: 36.6 },
  //     ],
  //     comments: [
  //       {
  //         id: 1,
  //         name: "Пётр Алексеевич",
  //         rating: 3,
  //         date: "30.03.2025",
  //         comment: "Вкусно и точка!",
  //         productId: 3,
  //       },
  //       {
  //         id: 2,
  //         name: "Людмила",
  //         rating: 5,
  //         date: "28.03.2025",
  //         comment: "Божественно!",
  //         productId: 3,
  //       },
  //       {
  //         id: 3,
  //         name: "Феликс",
  //         rating: 2,
  //         date: "26.03.2025",
  //         comment: "Невероятно но факт!",
  //         productId: 3,
  //       },
  //       {
  //         id: 4,
  //         name: "Никита",
  //         rating: 5,
  //         date: "21.03.2025",
  //         comment: "Обожаю ваши торты!",
  //         productId: 3,
  //       },
  //       {
  //         id: 5,
  //         name: "Олег",
  //         rating: 1,
  //         date: "10.03.2025",
  //         comment: "Полная фигня.",
  //         productId: 3,
  //       },
  //       {
  //         id: 6,
  //         name: "Анна",
  //         rating: 2,
  //         date: "05.03.2025",
  //         comment: "Никогда не пробовала ничего подобного. Благодарю!",
  //         productId: 3,
  //       },
  //       {
  //         id: 7,
  //         name: "Наталья",
  //         rating: 4,
  //         date: "01.03.2025",
  //         comment: "Быстрая доставка. Внимательный персонал!",
  //         productId: 3,
  //       },
  //     ],
  //     discount: 0,
  //     isFavorite: true,
  //   },
  //   {
  //     id: 4,
  //     type: "cakes",
  //     slug: "currant-coconut",

  //     image_800: [
  //       "/images/cakes/esterhazy/c-esterhazy-1-800.webp",
  //       "/images/cakes/esterhazy/c-esterhazy-2-800.webp",
  //       "/images/cakes/esterhazy/c-esterhazy-3-800.webp",
  //       "/images/cakes/esterhazy/c-esterhazy-4-800.webp",
  //       "/images/cakes/esterhazy/c-esterhazy-5-800.webp",
  //       "/images/cakes/esterhazy/c-esterhazy-6-800.webp",
  //     ],
  //     image_2800: [
  //       "/images/cakes/esterhazy/c-esterhazy-1-2800.webp",
  //       "/images/cakes/esterhazy/c-esterhazy-2-2800.webp",
  //       "/images/cakes/esterhazy/c-esterhazy-3-2800.webp",
  //       "/images/cakes/esterhazy/c-esterhazy-4-2800.webp",
  //       "/images/cakes/esterhazy/c-esterhazy-5-2800.webp",
  //       "/images/cakes/esterhazy/c-esterhazy-6-2800.webp",
  //     ],

  //     name: "Торт Чёрная смородина и кокос",
  //     description_short:
  //       "Самый шоколадный и один из самых нежных десертов нашей кондитерской. Самый шоколадный и один из самых нежных десертов нашей кондитерской.",
  //     description_one:
  //       "Стоит обратить внимание на то, что насыщенный вкус и аромат мака прекрасно сочетается с шоколадными сливочными нотками, а маковых зёрнышек в данном продукте предостаточно! Пирожное состоит из нескольких в меру мягких коржей, между которыми расположены мак и крем.",
  //     description_two:
  //       "Данное пирожное крайне рекомендуется все владельцам кофеен и ресторанов! Ваши клиенты будут весьма благодарны за такой хороший десерт, который является не чем то особенным, а просто вкусным, повседневным дополнением к ароматному кофе или горячему чаю.",
  //     price: 1860,
  //     weigth: 1640,
  //     width: 30,
  //     height: 10,
  //     expirationDate: 72,
  //     storageTemperature: [4, 6],
  //     rating: 3,
  //     badgeStatus: null,
  //     ingredients:
  //       "Пшеничная мука, сливки 33%, мак, сахар, куриные яйца, темный шоколад, сливочное масло, кондитерский гель",
  //     nutrition: [
  //       { name: "Калории", count: 259 },
  //       { name: "Белки", count: 5.7 },
  //       { name: "Жиры", count: 26.1 },
  //       { name: "Углеводы", count: 36.6 },
  //     ],
  //     comments: [
  //       {
  //         id: 1,
  //         name: "Лев Давидович",
  //         rating: 2,
  //         date: "30.03.2025",
  //         comment: "Никогда не пробовала ничего подобного. Благодарю!",
  //         productId: 4,
  //       },
  //     ],
  //     discount: 10,
  //     isFavorite: false,
  //   },
  // ]);

  const comments = ref<IComment[] | any>([]);
  const comment = ref<IComment | any>(null);

  const loadComments = async () => {
    const result = await useFetch("/api/comments/load-comments", {
      method: "GET",
    });

    if (result.status.value === "success") {
      comments.value = result.data.value;
    }

    return result;
  };

  const createComment = async (formData: IComment) => {
    // console.log(formData);

    const result = await useFetch("/api/comments/create-comment", {
      method: "POST",
      body: {
        product_id: formData.product_id,
        date: formData.date,
        user_name: formData.user_name,
        user_rating: formData.user_rating,
        user_comment: formData.user_comment,
      },
    });

    return result;
  };

  return {
    comments,
    comment,
    loadComments,
    createComment,
  };
});
