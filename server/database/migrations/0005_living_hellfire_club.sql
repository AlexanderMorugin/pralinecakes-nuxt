ALTER TABLE "settings" RENAME COLUMN "settings_id" TO "id";--> statement-breakpoint
ALTER TABLE "settings" ADD COLUMN "min_order_sum" integer;--> statement-breakpoint
ALTER TABLE "settings" ADD COLUMN "delivery_sum" integer;--> statement-breakpoint
ALTER TABLE "settings" ADD COLUMN "samovyvoz_bonus" integer;