import { Post } from "@/app/(providers)/(root)/til/_components/PostListItem/PostListItem";
import { ProfileState } from "@/app/_store/reducers/profile.reducer";
import { RootState } from "@reduxjs/toolkit/query";
import { nanoid } from "nanoid";
import { NextRequest, NextResponse } from "next/server";
import { useSelector } from "react-redux";

export async function POST(request: NextRequest) {
  const data = await request.json();
  const { title, content } = data;

  const response = await fetch(
    "https://port-0-ballang-server-qrd2als49b8m4.sel5.cloudtype.app/til",
    {
      method: "POST",
      body: JSON.stringify({
        id: nanoid(),
        title,
        content,
        author: {
          name: "유지형",
        },
      }),
    }
  );
  const til = await response.json();

  return NextResponse.json(til);
}
