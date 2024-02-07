"use client";

import React, { useEffect, useState } from "react";
import { Post } from "../_components/PostListItem/PostListItem";
import axios, { AxiosResponse } from "axios";
import PostList from "../_components/PostList";

function TrendingPage() {
  const [posts, setPosts] = useState<Post[]>([]);

  const getAllPosts = async () => {
    // const response: AxiosResponse<Post[]> = await axios.get(process.env.API_KEY);
    const response: AxiosResponse<Post[]> = await axios.get(
      "https://port-0-ballang-server-qrd2als49b8m4.sel5.cloudtype.app/til"
    );
    const posts = response.data;
    return posts;
  };
  console.log(posts);

  useEffect(() => {
    getAllPosts().then((posts) => setPosts(posts));
  }, []);

  return (
    <div>
      <section>
        <h1>TrendingPage</h1>
        <PostList listTitle="TILs" posts={posts} />
      </section>
    </div>
  );
}

export default TrendingPage;
