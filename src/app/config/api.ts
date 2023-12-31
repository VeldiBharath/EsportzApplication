import { environment } from "src/environments/environment";
export const baseUrl = environment.production ? "https/api.shoppingcart.com" : "http://localhost:3000";
export const productsUrl = baseUrl +"/products";
export const carturl = baseUrl + "/cart";
export const wishListurl = baseUrl + "/wishList"; 