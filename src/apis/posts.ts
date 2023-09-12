import { readFile } from "fs/promises";
import path from "path";
import { createClassifier } from "typescript";

export type Post = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
};

export async function getSearchPosts({
  category,
}: {
  category: string;
}): Promise<Post[]> {
  return getAllPost().then((posts) =>
    posts.filter((posts) => posts.category === category)
  );
}

export async function getfeaturedPosts(): Promise<Post[]> {
  return getAllPost().then((posts) =>
    posts.filter((posts) => posts.featured === false)
  );
}

export async function getAllPost(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  return readFile(filePath, "utf-8")
    .then<Post[]>((data) => JSON.parse(data))
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
}
