import { getAllPost } from "@/apis/posts";
import PostsGrid from "./PostsGrid";

export default async function FeaturedPosts() {
  const posts = await getAllPost();
  console.log(posts, "123");
  return (
    <div>
      <h2>Featured Posts</h2>
      <PostsGrid />
    </div>
  );
}
