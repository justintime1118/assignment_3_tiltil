"use client";

import { useAuth } from "@/app/(providers)/_contexts/auth.context";
import { FormEventHandler, useEffect, useState } from "react";

function SignInForm() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const auth = useAuth();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const url = `${window.location.origin}/api/auth/sign-in`;
    const options = { method: "POST", body: JSON.stringify({ id, pw }) };
    const response = await fetch(url, options);
    const data = await response.json();

    if (data === "OK" && response.status === 200) {
      auth.signIn();
    } else {
      alert("로그인 실패~");
    }
  };

  //TODO: 리덕스 셋팅 후 아이디 및 비밀번호 기본설정 해주기
  // useEffect(() => {
  //   setId();
  // }, []);

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="border border-black"
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <input
        className="border border-black"
        type="password"
        value={pw}
        onChange={(e) => setPw(e.target.value)}
      />
      <button className="border border-black" type="submit">
        로그인
      </button>
    </form>
  );
}

export default SignInForm;
