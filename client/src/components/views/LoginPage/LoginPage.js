import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { loginUser } from "../../../_actions/user_action";

const LoginPage = (props) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };
  const { email, password } = form;

  const onSubmit = (e) => {
    e.preventDefault();

    let body = {
      email,
      password,
    };

    dispatch(loginUser(body))
    .then(response => {
        if (response.payload.loginSuccess) {
            props.history.push('/')
        } else {
            alert('Error˝')
        }
    })
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
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={onChange}
        />

        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default withRouter(LoginPage)
