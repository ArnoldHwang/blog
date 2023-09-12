import { Post } from "@/apis/posts";
import PostCard from "./PostCard";

type Props = { posts: Post[] };

export default function PostsGrid({ posts }: Props) {
  return (
    <div className="grid grid-cols-1 gap-5 pb-5 2xl:grid-cols-4 md:grid-cols-3 ">
      {posts.map((post, index) => {
        return (
          <div key={index}>
            <PostCard post={post} />
          </div>
        );
      })}
    </div>
  );
}
