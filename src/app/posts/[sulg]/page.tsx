type Props = {
  params: {
    sulg: string;
  };
};
export default function Postspage({ params: { sulg } }: Props) {
  return (
    <div className="flex flex-col items-center justify-center text-2xl mt-auto h-screen">
      <p className=" ">{sulg} 상세페이지요 귀찮 구현 안해요</p>
      <span className="text-9xl mt-2">😒</span>
      <p className="m-3 text-red-500">뒤로가기 눌러요 버튼 구현도 귀찮😊</p>
    </div>
  );
}
