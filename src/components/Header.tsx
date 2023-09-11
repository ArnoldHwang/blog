import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between m-2 p-2">
      <Link href="/">
        <h1 className="font-bold text-3xl">Geon`s Blog</h1>
      </Link>
      <nav className="flex gap-4">
        <Link href="/"> HOME</Link>
        <Link href="/about">ABOUT</Link>
        <Link href="/post">POSTS</Link>
        <Link href="/contact">CONTACT</Link>
      </nav>
    </header>
  );
}
