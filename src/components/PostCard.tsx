import { Post } from "@/apis/posts";
import Image from "next/image";
import Link from "next/link";

type Props = { post: Post };

export default function PostCard({
  post: { title, description, date, category, path },
}: Props) {
  return (
    <Link href={`/posts/${path}`}>
      <div className="flex flex-col rounded-md overflow-hidden shadow-lg">
        <div className="flex justify-center pt-3 ">
          <Image
            src={`/imgs/posts/${path}.png`}
            alt={title}
            width={300}
            height={300}
            layout="full"
          />
        </div>
        <div className="flex flex-col gap-2 items-center p-4">
          <time className="self-end">{date.toString()}</time>
          <h3 className=" text-lg font-bold">{title}</h3>
          <p className="w-full truncate text-center">{description}</p>
          <span className="text-sm rounded-lg bg-green-100 p-2 my-2 font-bold ">
            {category}
          </span>
        </div>
      </div>
    </Link>
  );
}
