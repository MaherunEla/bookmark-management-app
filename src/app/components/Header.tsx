import Link from "next/link";
import { BsBookmarksFill } from "react-icons/bs";
import { MdBookmarkAdd } from "react-icons/md";

const Header = () => {
  return (
    <div className=" flex justify-center pt-[100px]">
      <div className="w-full max-w-[600px] p-5 ">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-white font-bold text-xl p-5">
            Bookmark Management App
          </h1>
          <div className="relative w-full flex items-center justify-between px-10 py-5">
            <Link
              href="/create"
              className="px-4 py-2 border border-pink-800 rounded-lg bg-pink-800 text-white flex items-center justify-center gap-2 hover:bg-pink-700 focus:ring-2 focus:ring-pink-400 focus:outline-none transition-colors duration-200"
              aria-label="Create new item"
            >
              <MdBookmarkAdd size={23} className="text-white" />
              <span className="text-lg font-semibold">Create</span>
            </Link>
            <Link
              href="/saved"
              className="px-4 py-2 border border-teal-800 rounded-lg bg-teal-900 text-white flex items-center justify-center gap-2 hover:bg-teal-700 focus:ring-2 focus:ring-teal-400 focus:outline-none transition-colors duration-200"
              aria-label="Read Bookmark List"
            >
              <BsBookmarksFill size={20} className="text-white" />
              <span className="text-lg font-semibold">Saved</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
