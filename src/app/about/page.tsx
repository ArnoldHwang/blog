import stamptour from "../../../public/imgs/stamptour.png";
import buybee from "../../../public/imgs/butbee.png";
import buybeeadmin from "../../../public/imgs/buybeeadmin.png";
import Image from "next/image";

export default function AboutPage() {
  const text = [
    `
      buybee. (나로수) 역할 : 프론트엔드 개발 서브 기술 스택 : Next.js,
      TypeScript, CRUD, Tailwind CSS, 내용 : 상품 판매 플랫폼 개발 및 ,쿠팡
      자동 주문 기능 구현(puppetter.js )`,
    `stamptour (댓츠잇) 역할 : 프론트엔드 개발
      및 퍼블리싱 기술 스택 : HTML, CSS, JavaScript 내용 : 지역 이동 및 스탬프
      획득 어플의 기업형 소개 페이지 개발 지지커머스 낚시용품 판매 역할 : 모바일
      페이지 퍼블리싱 기술 스택 : HTML, CSS, JavaScript, PHP (협업)`,
    `지지커머스 낚시용품 판매
      역할 : 모바일 페이지 퍼블리싱
      기술 스택 : HTML, CSS, JavaScript, PHP (협업)
      내용 : 낚시 용품을 판매하는 모바일 쇼핑몰 퍼블리싱 담당`,
    `제가 마주한 문제들을 해결하기 위해 적극적으로 검색하고 노력하는 편입니다.
      기술적인 난관에 부딪힐 때마다 온라인 자료와 커뮤니티를 활용하여 문제를
      해결하며, 이를 통해 끊임없이 배우고 성장하고 있습니다. 향후 목표
      프론트엔드 개발 뿐만 아니라 백엔드 개발 분야에도 흥미가 있으며, 앞으로는
      백엔드 개발자로서의 역량도 키워 나가고 싶습니다. 저의 개발 실력을 높여서
      최고 수준의 개발자가 되어 회사와 팀에 큰 기여를 하고 싶습니다.`,
  ];
  console.log(text.length);
  return (
    <div className="p-5">
      <h3 className="text-slate-400">(SSR) </h3>
      <h1 className="font-bold text-xl">
        Front-end developer 이건황 입니다 안녕하세요. 개발자 이건황 입니다.
      </h1>
      <h2 className="font-bold text-lg pt-5">
        {" "}
        제 개발 경력은 약 2년 정도로, 프론트엔드 개발 분야에서 다양한 프로젝트를
        진행하며 다양한 기술을 익혔습니다. 아래는 제가 사용 가능한 기술
        스택입니다. Front-end : HTML, CSS, JavaScript, TypeScript, React.js,
        Next.js(app Router), Tailwind CSS, useSWR(캐쉬관리) Back-end :
        Express(기초 수준), MongoDB (기초 수준)프로젝트 경험 개발 경력 동안
        다음과 같은 프로젝트에 참여하였습니다.
      </h2>
      {text.map((item) => {
        return (
          <p key={item} className="p-5">
            {item}
          </p>
        );
      })}
      <div className="grid grid-cols-3 gap-10 py-12">
        <div>
          <h2 className="font-bold text-xl">바이비 어드민</h2>
          <Image
            src={buybeeadmin}
            alt="바이미 어드민"
            width={500}
            height={500}
          />
        </div>
        <div>
          <h2 className="font-bold text-xl"> 바이비 유저페이지</h2>
          <Image src={buybee} alt="바이미 어드민" width={500} height={500} />
        </div>
        <div>
          <h2 className="font-bold text-xl"> 스탬프투어</h2>
          <Image src={stamptour} alt="바이미 어드민" width={500} height={500} />
        </div>
      </div>
    </div>
  );
}
