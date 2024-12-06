"use client";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import BookmarkCard from "../components/BookmarkCard";

type Props = {
  id: string;
  title: string;
  url: string;
  description: string;
  image: string;
};
const fetchBookmark = async () => {
  const { data } = await axios.get("http://localhost:3000/api/create");
  console.log(data);
  return data;
};
const Savedpage = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["create-data"],
    queryFn: fetchBookmark,
  });

  if (isLoading) {
    return <h2>Loading....</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {data ? (
        data?.map((item: Props, index: number) => (
          <BookmarkCard
            title={item?.title}
            link={item?.url}
            description={item?.description}
            image="/pic1.jpg"
            key={item?.id || index}
          />
        ))
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};
export default Savedpage;
