import React from "react";

export type Post = {
  id: string;
  title: string;
  content: string;
  author: { name: string };
};

export function PostListItem({ post }: { post: Post }) {
  return (
    <div>
      <section>
        <h2>{post.title}</h2>
        <h6>{post.author.name}</h6>
      </section>
      <section>
        <p>{post.content}</p>
      </section>
    </div>
  );
}

export default PostListItem;
