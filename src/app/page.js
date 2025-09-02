import Contents from "./_components/Contents";
import MotionBoxes from "./_components/MotionBoxes";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center relative overflow-hidden">
      <Contents />
      <MotionBoxes />
    </div>
  );
}
