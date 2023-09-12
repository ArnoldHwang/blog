import Link from "next/link";

export default function Header() {
  return (
    <header className=" p-5 bg-black text-white  ">
      <div className="flex flex-col items-center gap-3 md:flex-row md:justify-between">
        <Link href="/" className="">
          <h1 className="font-bold text-3xl ">Geonang Blog</h1>
        </Link>
        <nav className="flex gap-4 ">
          <Link href="/"> HOME</Link>
          <Link href="/about">ABOUT</Link>
          <Link href="/post">POSTS</Link>
          <Link href="/contact">CONTACT</Link>
        </nav>
      </div>
    </header>
  );
}
