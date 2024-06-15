import useThemeSwitcher from "@/hooks/useThemeSwitcher";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { MoonIcon, SunIcon } from "./Icons";

const CostomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`
          h-[1px] inline-block bg-dark 
          absolute left-0 -bottom-0.5 
          group-hover:w-full translate-[width] ease duration-300
          ${router.asPath === href ? "w-full" : "w-0"}
          dark:bg-light `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light z-10">
      <div className="w-full flex justify-between items-center">
        <nav className="mx-auto flex items-center justify-center">
          <CostomLink href="/" title="HOME" className="mr-4" />
          <CostomLink href="/about" title="ABOUT" className="ml-4" />
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-3 flex items-center justify-center rounded-full p-1
              ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
              `}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
