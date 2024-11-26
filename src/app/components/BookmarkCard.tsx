import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiChatDeleteFill } from "react-icons/ri";
import { TbBookmarkEdit } from "react-icons/tb";

type Props = {
  title: string;
  url: string;
  description: string;
  image: string;
};
const BookmarkCard = ({ title, url, description, image }: Props) => {
  return (
    <div className="card-container">
      <div className="relative w-[70px] h-full ">
        <Image src={image} className="rounded-l-md" alt={title} fill />
      </div>
      <div className="w-[400px] py-2 flex  justify-between">
        <div className="flex flex-col justify-between">
          <h3 className="text-lg font-semibold">{title}</h3>
          <a href={url} className="text-blue-600 text-sm font-normal">
            {url}
          </a>
          <p className="card-text">{description}</p>
        </div>
        <div className="flex flex-col items-center justify-between">
          <Link href="/update">
            <TbBookmarkEdit className="text-gray-950" size={23} />
          </Link>

          <RiChatDeleteFill className="text-red-700" size={23} />
        </div>
      </div>
    </div>
  );
};
export default BookmarkCard;
