DROP TABLE "cart_list" CASCADE;--> statement-breakpoint
ALTER TABLE "orders" ADD COLUMN "cart_list" varchar;