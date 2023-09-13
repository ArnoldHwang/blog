import { getAllPost } from "@/apis/posts";
import FlilterablePosts from "@/components/FlilterablePosts";

export default async function page() {
  const posts = await getAllPost();
  const categories = [...new Set(posts.map((post) => post.category))];
  return (
    <div>
      <FlilterablePosts posts={posts} categories={categories} />;
    </div>
  );
}
