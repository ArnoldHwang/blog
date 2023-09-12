import { getAllPost } from "@/apis/posts";

export default async function Posts() {
  const posts = await getAllPost();
  const categories = [...new Set(posts.map((post) => post.category))];
  console.log(categories);
  return <div></div>;
}
