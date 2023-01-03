import { AxiosResponse } from "axios";
import React, { useState } from "react";
import { User } from "../interface/user";
import { userSer } from "../services/userService";

export default function SignIn() {
  const [emailInput, setEmailInput] = useState("");
  const [passInput, setPassInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [ageInput, setAgeInput] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let data: User = {
      email: emailInput,
      pass_word: passInput,
      full_name: nameInput,
      age: parseInt(ageInput),
    };
    console.log("data: ", data);
    userSer
      .signIn(data)
      .then((res: AxiosResponse) => {
        alert("đăng kí thành công");
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
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Full name
        </label>
        <input
          onChange={(e) => setNameInput(e.target.value)}
          value={nameInput}
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Age
        </label>
        <input
          onChange={(e) => setAgeInput(e.target.value)}
          value={ageInput}
          type={"number"}
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
