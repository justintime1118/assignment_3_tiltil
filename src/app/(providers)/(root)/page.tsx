"use client";

import { useEffect, useState } from "react";
import PostList from "./til/_components/PostList";
import PostListItem from "./til/_components/PostListItem";
import axios, { AxiosResponse } from "axios";
import { Post } from "./til/_components/PostListItem/PostListItem";

function HomePage() {
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
        <h1>Homepage</h1>
        <PostList listTitle="TILs" posts={posts} />
      </section>
    </div>
  );
}

export default HomePage;
