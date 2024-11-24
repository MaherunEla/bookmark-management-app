import BookmarkCard from "./components/BookmarkCard";

export default function Home() {
  return (
    <div className="flex justify-center ">
      <BookmarkCard
        title="Mongodb"
        link="https://www.youtube.com/"
        description=" I have to finish this tutorial"
        image="/pic1.jpg"
      />
    </div>
  );
}
