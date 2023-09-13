type Props = {
  params: {
    sulg: string;
  };
};
export default function Postspage({ params: { sulg } }: Props) {
  console.log(sulg);
  return (
    <div className="flex flex-col items-center justify-center text-2xl mt-auto h-screen">
      <p className=" ">{sulg} 상세페이지요 귀찬아서 구현은 안할게요</p>
      <span className="text-9xl mt-2">😒</span>
    </div>
  );
}
