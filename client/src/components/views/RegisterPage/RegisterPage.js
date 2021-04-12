import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { registerUser } from "../../../_actions/user_action"



const RegisterPage = (props) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
  });

  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };
  const { email, name, password, confirmPassword } = form;

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return alert("비밀번호를 다시 확인해 주세요");
    }

    let body = {
      email,
      password,
      name,
    };

    dispatch(registerUser(body)).then((response) => {
      if( response.payload.success ){
          props.history.push("/login")
      } else{
          alert("회원가입 실패")
      }
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <form
        action=""
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={onSubmit}
      >
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={onChange}
        />

        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={name}
          onChange={onChange}
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={onChange}
        />
        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="confirmPassword"
          value={confirmPassword}
          onChange={onChange}
        />

        <button type="submit">회원가입</button>
      </form>
    </div>
  );
};

export default withRouter(RegisterPage);
