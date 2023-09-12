import myphoto from "../../public/imgs/me.jpg";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col align-middle items-center my-3 ">
      <Image
        src={myphoto}
        alt="myprofile"
        width={250}
        className=" rounded-t-full"
        priority
      />
      <h1 className="font-bold text-3xl m-1">Hi, i{"'"}m Geonang</h1>
      <h3 className="font-bold text-2xl m-1">Front-end developer</h3>
      <p className="font-bold text-base">Next.js 13.4.19</p>
      <p className="font-bold text-base">TypeScript</p>
      <p className="font-bold text-base">React.js</p>
    </div>
  );
}
