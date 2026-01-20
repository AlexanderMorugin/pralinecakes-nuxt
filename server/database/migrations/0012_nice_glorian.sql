CREATE TABLE "cart_list" (
	"id" integer NOT NULL,
	"type" text,
	"slug" text,
	"image_list_card" text,
	"name" text,
	"price" integer,
	"discount" integer,
	"discount_price" integer,
	"weigth" integer,
	"count" integer,
	"total_product_price" integer,
	"order_id" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "cart_list" ADD CONSTRAINT "cart_list_order_id_orders_order_id_fk" FOREIGN KEY ("order_id") REFERENCES "public"."orders"("order_id") ON DELETE no action ON UPDATE no action;