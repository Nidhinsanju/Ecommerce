import { sign } from "jsonwebtoken";

export default async function generateToken(username: String) {
  const SERCRET = process.env.BACKEND_SECRET || "hias";
  try {
    const user = {
      Username: username,
      number: 123,
    };
    const token = sign(
      { username: user.Username, number: user.number },
      SERCRET,
      { expiresIn: "1h" }
    );
    return token;
  } catch (error) {
    console.log(error, "internal middleware error");
    return null;
  }
}
