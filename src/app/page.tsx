import BookmarkCard from "./components/BookmarkCard";

export default function Home() {
  return (
    <div className="bg-purple-950 w-screen h-screen  flex justify-center pt-[100px]">
      <div className="w-full max-w-[600px] p-5 ">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-white font-bold text-xl p-5">
            Bookmark Management App
          </h1>
          <BookmarkCard
            title="Mongodb"
            link="https://www.youtube.com/"
            description=" I have to finish this tutorial"
            image="/pic1.jpg"
          />
        </div>
      </div>
    </div>
  );
}
