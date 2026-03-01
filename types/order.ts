export interface IOrder {
  id?: number;
  order_number?: string;
  order_date?: string;
  delivery_type?: string;
  total_cart_count?: number;
  total_cart_sum?: number;
  cart_samovyvoz_bonus?: number;
  total_order_sum?: number;
  delivery_sum?: number;

  user_bonus?: number;
  user_name?: string;
  user_phone?: string;
  user_city?: string;
  user_street?: string;
  user_building?: string;
  user_entrance?: string;
  user_flat?: string;
  user_floor?: string;
  user_comment?: string;

  cart_list?: any;

  status_accept?: string;
  status_delivery?: string;
  status_complete?: string;

  createdAt?: any;
  updatedAt?: any;
}
