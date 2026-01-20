import { relations } from "drizzle-orm";
import {
  serial,
  pgTable,
  text,
  json,
  integer,
  timestamp,
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
