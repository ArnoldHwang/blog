import { getAllPost } from "@/apis/posts";
import PostCard from "./PostCard";
import MultiCarousel from "./MultiCarousel";

export default async function CarousePosts() {
  const posts = await getAllPost();
  return (
    <>
      <h2 className="text-center my-3 font-bold text-2xl">You May Like</h2>
      <MultiCarousel>
        {posts.map((post) => {
          return <PostCard post={post} key={post.path} />;
        })}
      </MultiCarousel>
    </>
  );
}
