import ContentBox from "./_components/ContentBox";
import PicturesBox from "./_components/PicturesBox";

export default function Home() {

  return (
    <div className="w-full h-screen flex md:flex-row flex-col-reverse items-center relative overflow-hidden">
      <ContentBox />
      <PicturesBox />
    </div>
  );
}