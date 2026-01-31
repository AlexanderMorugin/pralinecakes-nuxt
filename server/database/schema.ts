// import { relations } from "drizzle-orm";
import {
  serial,
  pgTable,
  text,
  json,
  integer,
  timestamp,
  boolean,
} from "drizzle-orm/pg-core";

export const orders = pgTable("orders", {
  id: serial("order_id").primaryKey(),
  order_number: text("order_number"),
  order_date: text("order_date"),
  delivery_type: text("delivery_type"),
  total_cart_count: integer("total_cart_count"),
  total_cart_sum: integer("total_cart_sum"),
  cart_samovyvoz_bonus: integer("cart_samovyvoz_bonus"),
  total_order_sum: integer("total_order_sum"),
  delivery_sum: integer("delivery_sum"),

  user_bonus: integer("user_bonus"),
  user_name: text("user_name"),
  user_phone: text("user_phone"),
  user_city: text("user_city"),
  user_street: text("user_street"),
  user_building: text("user_building"),
  user_entrance: text("user_entrance"),
  user_flat: text("user_flat"),
  user_floor: text("user_floor"),
  user_comment: text("user_comment"),

  cart_list: json("cart_list"),

  status_accept: text("status_accept"),
  status_delivery: text("status_delivery"),
  status_complete: text("status_complete"),

  createdAt: timestamp("created_at", { mode: "string" }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { mode: "string" }).notNull().defaultNow(),
});

export const cakes = pgTable("cakes", {
  id: serial("id").primaryKey(),
  slug: text("slug"),
  title: text("title"),
  description_short: text("description_short"),
  description_one: text("description_one"),
  description_two: text("description_two"),
  description_three: text("description_three"),

  image_1_small: text("image_1_small"),
  image_1_big: text("image_1_big"),
  image_2_small: text("image_2_small"),
  image_2_big: text("image_2_big"),
  image_3_small: text("image_3_small"),
  image_3_big: text("image_3_big"),
  image_4_small: text("image_4_small"),
  image_4_big: text("image_4_big"),
  image_5_small: text("image_5_small"),
  image_5_big: text("image_5_big"),
  image_6_small: text("image_6_small"),
  image_6_big: text("image_6_big"),

  meta_title: text("meta_title"),
  meta_description: text("meta_description"),
  meta_сanonical_url: text("meta_сanonical_url"),

  weight: integer("weight"),
  width: integer("width"),
  height: integer("height"),

  price: integer("price"),
  discount: integer("discount"),
  discount_price: integer("discount_price"),

  ingredients: text("ingredients"),

  calories: text("calories"),
  protein: text("protein"),
  fat: text("fat"),
  carbohydrates: text("carbohydrates"),

  badge: text("badge"),
  rating: integer("rating"),

  visibility: boolean("visibility").notNull().default(true),

  createdAt: timestamp("created_at", { mode: "string" }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { mode: "string" }).notNull().defaultNow(),
});

// export const cart_list = pgTable("cart_list", {
//   id: integer("id").notNull(),
//   type: text("type"),
//   slug: text("slug"),
//   image_list_card: text("image_list_card"),
//   name: text("name"),
//   price: integer("price"),
//   discount: integer("discount"),
//   discount_price: integer("discount_price"),
//   weigth: integer("weigth"),
//   count: integer("count"),
//   total_product_price: integer("total_product_price"),

//   order_id: integer("order_id")
//     .notNull()
//     .references(() => orders.id),

//   createdAt: timestamp("created_at", { mode: "string" }).notNull().defaultNow(),
//   updatedAt: timestamp("updated_at", { mode: "string" }).notNull().defaultNow(),
// });

// export const ordersRelations = relations(orders, ({ many }) => ({
//   cart_list: many(cart_list),
// }));

// export const cartListRelations = relations(cart_list, ({ one }) => ({
//   order: one(orders, {
//     fields: [cart_list.order_id],
//     references: [orders.id],
//   }),
// }));
