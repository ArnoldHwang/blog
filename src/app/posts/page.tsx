import FeaturedPosts from "@/components/FeaturedPosts";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Posts() {
  return (
    <div className="flex">
      <div></div>
      <div className="w-36">
        <button>All Posts</button>
      </div>
    </div>
  );
}
