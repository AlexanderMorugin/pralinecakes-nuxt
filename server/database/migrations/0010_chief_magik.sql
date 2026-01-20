CREATE TABLE "product" (
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
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
