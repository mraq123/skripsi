import User from "../models/UserModel.js";
import argon2 from "argon2";

export const Login = async (req, res) => {
  const user = await User.findOne({ where: { email: req.body.email } });
  if (!user) {
    return res.status(404).json({ message: "User Tidak Ditemukan" });
  }
  const matchPassword = await argon2.verify(user.password, req.body.password);
  if (!matchPassword) {
    return res.status(400).json({ message: "Password Tidak Sama" });
  }
  req.session.userId = user.id;
  const id = user.id;
  const username = user.username;
  const email = user.email;
  const role = user.role;
  return res.status(200).json({ id, username, email, role });
};

export const Me = async (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ message: "Mohon Login ke Akun Anda " });
  }
  const user = await User.findOne({
    attributes: ["id", "username", "email", "role"],
    where: { id: req.session.userId },
  });
  if (!user) {
    return res.status(404).json({ message: "User Tidak Ditemukan" });
  }
  res.status(200).json({ user });
};

export const Logout = async (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(400).json({ message: " Gagal Logout" });
    }
    return res.status(200).json({ message: " Berhasil Logout" });
  });
};
