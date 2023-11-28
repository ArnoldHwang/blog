import myphoto from "../../public/imgs/me.jpg";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col align-middle items-center my-3 p-2 ">
      <Image
        src={myphoto}
        alt="myprofile"
        width={250}
        className=" rounded-t-full"
        priority
      />
      <h1 className="font-bold text-3xl m-1">Hi, i{"'"}m Geonang</h1>
      <h3 className="font-bold text-2xl m-1">Front-end developer</h3>
      <p className="font-bold">Next.js 13 App Router </p>
      <p className="font-bold">TypeScript</p>
      <p className="font-bold">React.js</p>
      <p className="font-bold">tailwindcss</p>
      <p className="font-bold text-gray-300">express (수행중..)</p>
      <p className="font-bold text-gray-300">MongoDB (수행중..)</p>

      <div className="felx flex-col p-3">
        <p className="">
          1. https://www.stamptour.app{" "}
          <span className="bg-[#bfffa1] pl-1">
            해당 페이지 퍼블리싱 2020년도...지금 보면 아우야..
          </span>
        </p>
        <p>
          2. 쿠팡 상품 주문기
          <span className="bg-[#bfffa1] pl-1">
            puppetter.js로 작성 주문 들어오면(백앤드가 해줌) 주문 수행하는
            로직만 작성 !
          </span>
        </p>
        <p>
          3. https://app.buybee.shop
          <span className="bg-[#bfffa1] pl-1">
            해당 페이지 작업 부사수로 next 12 기반..
          </span>
          )
        </p>
      </div>
    </div>
  );
}
