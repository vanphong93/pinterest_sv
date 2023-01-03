import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Login } from "../interface/user";
import { localServ } from "../services/localService";
import { userSer } from "../services/userService";

export default function LoginUser() {
  const navigate = useNavigate();
  const [emailInput, setEmailInput] = useState("");
  const [passInput, setPassInput] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let data: Login = {
      email: emailInput,
      pass_word: passInput,
    };
    userSer
      .logIn(data)
      .then((res) => {
        localServ.user.set(res.data.content);
        alert("đăng nhập thành công");
        navigate("/");
        window.location.reload();
      })
      .catch((err: Error) => {
        console.log("err: ", err);
      });
  };
  return (
    <form onSubmit={handleSubmit} className="w-50 mx-auto">
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          onChange={(e) => setEmailInput(e.target.value)}
          type="email"
          value={emailInput}
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          onChange={(e) => setPassInput(e.target.value)}
          value={passInput}
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
