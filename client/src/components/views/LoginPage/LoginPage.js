import React, { useState } from "react";

const LoginPage = () => {
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
      <form action="" style={{ display: "flex", flexDirection: "column" }}>
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

export default LoginPage;
