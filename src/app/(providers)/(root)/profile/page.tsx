"use client";

import {
  ProfileState,
  updateAge,
  updateNickname,
} from "@/app/_store/reducers/profile.reducer";
import { AppDispatch, RootState } from "@/app/_store/store";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function ProfilePage() {
  // TODO: 빨간줄 뭐임 이거?
  const storedProfile: ProfileState = useSelector<RootState>(
    (state) => state.profile
  );

  const [nickname, setNickname] = useState<string>(storedProfile.nickname);
  const [age, setAge] = useState<number>(storedProfile.age);
  const dispatch = useDispatch<AppDispatch>();

  const handleClickUpdateNickname = () => {
    if (!nickname) {
      alert("닉네임을 입력해주세요");
      return;
    }
    dispatch(updateNickname(nickname));
  };

  const handleClickUpdateAge = () => {
    if (age === null || age === undefined) {
      alert("나이를 입력해주세요");
      return;
    }
    dispatch(updateAge(age));
  };

  return (
    <div className="bg-white text-black min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">마이페이지</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">계정 정보</h2>
          <p className="mb-2">
            <strong>ID:</strong> {storedProfile.account.id}
          </p>
          <p className="mb-2">
            <strong> PW:</strong> {storedProfile.account.pw}
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">닉네임 수정</h2>
          <div className="mb-4 flex gap-2">
            <input
              className="p-2 border rounded-md focus:outline-none focus:border-gray-500"
              type="text"
              placeholder="닉네임을 입력해 주세요"
              onChange={(e) => setNickname(e.target.value)}
              value={nickname}
            />

            <button
              className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none"
              onClick={handleClickUpdateNickname}
            >
              닉네임 바꾸기
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">나이 수정</h2>
          <div className="mb-4 flex gap-2">
            <input
              className="p-2 border rounded-md focus:outline-none focus:border-gray-500"
              type="number"
              placeholder="나이를 입력해 주세요"
              onChange={(e) => setAge(Number(e.target.value))}
              value={age}
            />

            <button
              className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none"
              onClick={handleClickUpdateAge}
            >
              나이 바꾸기(사실 나이는 마음대로 바꿀 수 있는게 아닙니다)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
