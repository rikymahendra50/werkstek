export enum Role {
  ADMIN = "ADMIN",
  USER = "USER",
  AGEN = "AGEN",
}
export enum Provider {
  GOOGLE = "GOOGLE",
  FACEBOOK = "FACEBOOK",
  LOCAL = "LOCAL",
}
export interface AuthUser {
  id: number;
  uuid?: string;
  first_name: string;
  last_name: string;
  profile_picture: string | null;
  email: string;
  is_active: 0 | 1;
  phone: string | null;
  username: string | null;
  country?: string | null;
  city?: string | null;
  is_able_without_payment?: 0 | 1;
}

export interface AuthLogin {
  email: string | undefined;
  password: string | undefined;
  remember_me?: boolean | number;
}

export interface AuthRegister {
  first_name: string;
  last_name: string;
  email: string;
  phoner: string;
  password: string;
  comfirm_password: string;
}

export interface AuthCredential {
  token: AuthToken;
  provider: AuthProvider;
  role: AuthRole;
}

export interface ErrorObject {
  [key: string]: string[];
}

export interface ResponseErrorObject {
  message: string;
  errors?: ErrorObject;
}

/**
 * @see https://vee-validate.logaretm.com/v4/tutorials/dynamic-form-generator/
 */
interface FormDynamicItem {
  label?: string;
  name: string;
  as: string;
  rules?: any;
  class?: string;
}
export interface FormDynamic {
  fields: FormDynamicItem[];
}

export type AuthToken = string;
export type AuthRole = Role;
export type AuthProvider = Provider;
export type IsLogin = boolean;

export interface Variant {
  id?: number | string;
  product_id?: string | number;
  name: string;
  description?: string;
  duration?: string;
  price: string;
  usd_price: string;
  nett_price: string;
  /**
   * used for agent only
   */
  special_price?: string;
  quantity?: number;
  max_order?: number;
  min_order?: number;
  category: "single" | "tandem";
  person_qty?: number;
  person?: Person[];
  activity_title?: string | undefined;
}

export interface PriceList {
  uuid: string;
  package_name: string;
  name: string;
  description: string;
  price_list: Variant[];
}

export interface Addons {
  id: string | number;
  name: string;
  description: string;
  usd_price: number | string | undefined;
  price?: number | string | undefined;
  nett_price?: string;
  quantity?: number;
  product_id?: string | number;
}

export interface AdditionalAddons {
  id: number | string;
  name: string;
  slug: string;
  description: string;
  price: number | string | undefined;
  usd_price: number | string | undefined;
  is_saleable: 0 | 1;
  deleted_at?: string;
  created_at?: string;
  updated_at?: string;
}
export interface AddonsAPI {
  id: number | string;
  product_id: number | string;
  variant_id: string | null;
  additional_id: number | string;
  created_at?: string;
  updated_at?: string;
  quantity?: number;
  additional: AdditionalAddons;
}

export interface ATV_FORM {
  product_id: number | undefined;
  name: string | undefined;
  variant_name?: string | undefined;
  variant: Variant[];
  addOns: Addons[];
  total_dollar?: string | number | undefined;
  total_rupiah?: string | number | undefined;
}

export interface DirtyFormOrder {
  product_id: number | undefined;
  name: string | undefined;
  variant_name?: string | undefined;
  variant: Variant[];
  addOns: Addons[];
  total_dollar?: string | number | undefined;
  total_rupiah?: string | number | undefined;
  activity_date: string;
  arrival_time: string;
}

export interface Person {
  product_id: number | string | undefined;
  variant_id: number | string | undefined;
  id?: number | string | undefined;
  is_pic: boolean;
  name: string | undefined;
  age: string | undefined;
  email?: string | undefined;
  phone?: string | undefined;
  is_completed: boolean;
}

export interface bookingProperty {
  activity_date: string | undefined;
  arrival_time: string | undefined;
}

export interface ImageCategory {
  id: number;
  position: number;
  image: string;
}

export interface CategoryProduct {
  id: number;
  slug: string;
  name: string;
  images: ImageCategory[];
  full_description?: string;
  short_description: string;
  created_at: string;
  updated_at: string;
  products?: Product[];
}

export interface GeneralResponse<T> {
  message: string;
  data: T;
}

export interface AddOnsDetail {
  id: number;
  product_id: number;
  variant_id: number;
  additional: AdditionalAddons;
}

export interface Product {
  id?: number;
  name: string;
  slug: string;
  package_name: string;
  description: string;
  price: number | string | undefined;
  usd_price: number | string | undefined;
  nett_price: number | string;
  max_order: number | string | undefined;
  min_order: 1;
  is_saleable: 0 | 1;
  category_id: number;
  person_qty: number;
  is_varied: 0 | 1;
  average_rating: number;
  created_at?: string;
  updated_at?: string;
  variants?: Variant[];
  additionals?: AddOnsDetail[];
  images?: ImageCategory[];
}

export interface ItemProductOrder {
  id: number | string;
  variant_id: number | string;
  quantity: number;
}

export interface ItemAdditionalOrder {
  /**
   * helper to know who load the additional
   */
  product_id: number | string | undefined;
  id: string | number;
  quantity: string | number;
}

export interface ItemFormOrder {
  product_id: string | number;
  variant_id: string | number;
  name: string | undefined;
  age: number | undefined;
  email: string | undefined;
  phone: string | undefined;
  is_pic: 0 | 1;
}

export interface OrderProduct {
  products: ItemProductOrder[];
  additionals: ItemAdditionalOrder[];
  forms: ItemFormOrder[];
  activity_date: string | undefined;
  arrival_time: string | undefined;
}

export interface ProductThumbnail {
  id: number;
  name: string;
  image: string;
  created_at: string;
}

export interface Purchase {
  id: number;
  uuid: string;
  grand_total_purchased: string;
  grand_total_usd_purchased: string;
  status: string;
  other_products: number;
  product_thumbnail: ProductThumbnail;
  activity_date?: string;
  arrival_time?: string;
  created_at: string;
  updated_at: string;
}

interface LinksAPI {
  first: string;
  last: string;
  prev: string | null;
  next: string | null;
}

export interface Link {
  url?: string;
  label: string;
  active: boolean;
}

interface MetaAPI {
  current_page: number;
  from: number;
  last_page: number;
  links: Link[];
  path: string;
  per_page: number;
  to: number;
  total: number;
}

export interface ResponseData<T> {
  data: T;
  links: LinksAPI;
  meta: MetaAPI;
}

export interface ProductDetails {
  id: number;
  name: string;
  cart_id: number;
  package_name: string;
  product_id: number;
  product_slug: string;
  variant_id: number;
  description: string;
  quantity: string;
  price: string;
  nett_price: string;
  usd_price: string;
  total_price: string;
  total_usd_price: string;
  image: string;
  created_at: string;
}

export interface AdditionalDetails {
  id: number;
  product_id: number;
  variant_id: number;
  additional_id: number;
  product_additional_id: number;
  card_id: number;
  package_name: string;
  name: string;
  description: string | null;
  quantity: string;
  price: string;
  usd_price: string;
  total_price: string;
  total_usd_price: string;
  created_at: string;
}

export interface FormDetails {
  id: number;
  order_id: number;
  product_id: number;
  variant_id: number;
  cart_id: number;
  name: string;
  age: number;
  email: string;
  phone: string;
  is_pic: number;
  activity_date: string | null;
  created_at: string;
  updated_at: string;
  is_completed?: boolean;
}

export interface DetailOrders {
  id: number;
  uuid: string;
  address: string | null;
  total_purchased: string;
  total_usd_purchased: string;
  total_additional_purchased: string;
  total_usd_additional_purchased: string;
  promo_amount: string;
  grand_total_purchased: string;
  grand_total_usd_purchased: string;
  payment_url: string;
  payment_status: string;
  refund_status: string | null;
  status: string;
  details: ProductDetails[];
  additionals: AdditionalDetails[];
  forms: FormDetails[];
  activity_date?: string;
  arrival_time?: string;
  created_at: string;
  updated_at: string;
  user?: AuthUser;
  user_role?: "user" | "agent";
}
export interface Payment {
  payment_url: string;
}

export interface Contact {
  id?: number | string;
  first_name: string | undefined;
  last_name: string | undefined;
  email: string | undefined;
  phone: string | undefined;
  message: string | undefined;
  is_replied?: 0 | 1;
  created_at?: string;
}

export interface EditPerson extends ProductDetails {
  forms: FormDetails[];
}

export interface TimeNotAvailable {
  product_id: number | string;
  variant_id: number | string;
  times: string[];
}

export interface AdditionalProduct {
  id?: number;
  slug?: string | undefined;
  name: string | undefined;
  price: number | undefined;
  description: string | undefined;
  usd_price: number | undefined;
  is_saleable: 0 | 1;
  created_at?: string;
  updated_at?: string;
}

export interface ImageResponse {
  id: number;
  image: string;
  position: number;
}
