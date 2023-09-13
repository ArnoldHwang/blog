"use client";
import { Post } from "@/apis/posts";
import { useState } from "react";
import PostsGrid from "./PostsGrid";

type Props = {
  posts: Post[];
  categories: string[];
};
const ALL_POST = "All Posts";
export default function FlilterablePosts({ posts, categories }: Props) {
  const [selected, setSelected] = useState(ALL_POST);
  const filtered =
    selected === ALL_POST
      ? posts
      : posts.filter((post) => post.category === selected);
  return (
    <div className="flex">
      <PostsGrid posts={filtered} />
      <ul className="p-5 flex flex-col gap-3">
        <li className=" p-2 text-lg font-bold border-b-4 border-green-100 mb-2">
          Category
        </li>
        <li
          className={`p-2 text-base bg-green-100 text-center rounded-xl text-black hover:rounded-3xl transition-all cursor-pointer ${
            ALL_POST === selected && "font-bold bg-green-300"
          }`}
          onClick={() => setSelected(ALL_POST)}
        >
          전체
        </li>
        {categories.map((items) => (
          <li
            key={items}
            className={`p-2 text-base bg-green-100 text-center rounded-xl text-black hover:rounded-3xl transition-all cursor-pointer ${
              items === selected && "font-bold bg-green-300 "
            }`}
            onClick={() => setSelected(items)}
          >
            {items}
          </li>
        ))}
      </ul>
    </div>
  );
}
