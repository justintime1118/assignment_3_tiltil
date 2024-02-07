import React from "react";
import { Post, PostListItem } from "../PostListItem/PostListItem";

export type PostListProps = {
  listTitle: string;
  posts: Post[];
};

function PostList({ listTitle, posts }: PostListProps) {
  return (
    <section>
      <h2>{listTitle}</h2>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <PostListItem post={post} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default PostList;
