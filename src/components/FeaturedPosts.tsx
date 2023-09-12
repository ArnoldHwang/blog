import { getfeaturedPosts } from "@/apis/posts";
import PostsGrid from "./PostsGrid";

export default async function FeaturedPosts() {
  const posts = await getfeaturedPosts();

  return (
    <div>
      <h2 className="text-2xl font-bold text-center  bg-black text-white md:bg-white md:text-black md:border-y-2">
        Featured Posts
      </h2>
      <PostsGrid posts={posts} />
    </div>
  );
}
