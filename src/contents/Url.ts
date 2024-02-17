import Cookies from "js-cookie";

export const BACKEND_URL = "http://localhost:3000";
export const customerID = Cookies.get("customerID");
export const token = Cookies.get("token");
