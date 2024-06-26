import Link from "next/link";
import Image from "next/image";
import React from "react";
import MobileNav from "./MobileNav";
import { SignedIn, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="flex flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex item-center gap-1">
        <Image
          src="icons/logo.svg"
          width={32}
          height={32}
          alt="Zoom logo"
          className="max-sm:size-10"
        />
        <p className="tex-[26px] font-extrabold text-white max-sm:hidden">
          Zoom
        </p>
      </Link>

      {/* Check global css we have added @layer utilities so no flex classname is required */}
      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
