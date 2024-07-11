import Image from "next/image";
import Link from "next/link";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

const Header = () => {
  return (
    <div className="shadow-sm border-b sticky top-0 bg-white z-30 p-3">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* logo */}
        <Link href="/" className="hidden lg:inline-flex">
          <Image
            src="/written.svg"
            width={96}
            height={96}
            alt="picture"
            priority
          />
        </Link>

        <Link href="/" className="lg:hidden ">
          <Image
            src="/logo.avif"
            width={40}
            height={40}
            alt="picture"
            priority
          />
        </Link>

        {/* search input */}
        <div className="relative max-w-[300px] w-full">
          <input
            type="text"
            placeholder="search"
            className="bg-gray-50 border border-gray-200 rounded text-sm w-full py-2 pr-10 pl-4"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <MagnifyingGlassIcon
              className="h-5 w-5 text-gray-400 cursor-pointer"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* menu items */}
        <button className="text-sm font-semibold text-blue-500">Log in</button>
      </div>
    </div>
  );
};

export default Header;
