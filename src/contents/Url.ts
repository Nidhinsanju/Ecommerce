export const BACKEND_URL = "http://localhost:3000";
export const customerID =
  typeof window !== "undefined" ? localStorage.getItem("customerID") : null;
export const token =
  typeof window !== "undefined" ? localStorage.getItem("token") : null;
