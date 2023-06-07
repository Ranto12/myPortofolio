import Image from "next/image";
import React, { Fragment, useState } from "react";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";

const Navbar = () => {
  let [isOpen, setIsOpen] = useState(true);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  console.log(isOpen , "isopen");
  
  return (
    <>
      <section className="h-24 z-40  justify-between items-center px-5 lg:px-36 fixed w-full bg-black  flex">
        <nav className="hidden sm:block">
          <ul className="text-white flex space-x-2 lg:space-x-5">
            <li className="border-b-2 border-transparent transition hover:duration-300 ease-linear hover:border-white cursor-pointer">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="border-b-2 border-transparent transition hover:duration-300 ease-linear hover:border-white cursor-pointer">
              <Link href={"/About"}>About</Link>
            </li>
            <li className="border-b-2 border-transparent transition hover:duration-300 ease-linear hover:border-white cursor-pointer">
              <Link href={"/Project"}>Project</Link>
            </li>
            <li className="border-b-2 border-transparent transition hover:duration-300 ease-linear hover:border-white cursor-pointer">
              <Link href={"/Articles"}>Articles</Link>
            </li>
          </ul>
        </nav>
        <div>
          <p className="font-bold bg-white w-10 h-10 flex justify-center items-center rounded-full">
            RK
          </p>
        </div>
        <div className="text-white  space-x-5 hidden md:flex">
          <ul>
            <Link
              href="https://www.linkedin.com/in/ranto-6266101a3/"
              target="_blank"
            >
              <Image
                src={"/linkedin.svg"}
                alt="linkedin"
                className="w-6 duration-500 hover:-translate-y-1 cursor-pointer"
                width={500}
                height={500}
              />
            </Link>
          </ul>
          <ul>
            <Link
              href="https://www.facebook.com/ranto.koplak.121519/"
              target="_blank"
            >
              <Image
                src={"/facebook.svg"}
                alt="facebook"
                className="w-6 duration-500 hover:-translate-y-1 cursor-pointer"
                width={500}
                height={500}
              />
            </Link>
          </ul>
          <ul>
            <Image
              src={"/twitter.svg"}
              alt="twiter"
              className="w-6 duration-500 hover:-translate-y-1 cursor-pointer"
              width={500}
              height={500}
            />
          </ul>
          <ul>
            <Link href="https://github.com/Ranto12" target="_blank">
              <Image
                src={"/github.svg"}
                alt="github"
                className="w-6 duration-500 hover:-translate-y-1 cursor-pointer"
                width={500}
                height={500}
              />
            </Link>
          </ul>
          <ul>
            <Link href="https://www.instagram.com/ranto.21/" target="_blank">
              <Image
                src={"instagram.svg"}
                alt="instagram"
                className="w-6 duration-500 hover:-translate-y-1 cursor-pointer"
                width={500}
                height={500}
              />
            </Link>
          </ul>
        </div>
        <div className="sm:hidden" onClick={openModal}>
          <Image
            alt="humberger"
            src={"/assets/images/hamburger.svg"}
            width={30}
            height={30}
            className="text-white"
            onClick={openModal}
          />
        </div>
      </section>
      <section className={`min-h-screen fixed justify-start z-50 bg-black bg-opacity-75 min-w-full sm:hidden ${isOpen ? 'flex' : 'hidden'}`}>
        <ul className="text-white min-w-[200px] font-semibold bg-slate-400 bg-opacity-90  min-h-screen p-5 space-y-5 ">
          <li className="flex items-center justify-between">
            <p className="font-bold text-black bg-slate-100 w-10 h-10 flex justify-center items-center rounded-full">
              RK
            </p>
            <Image onClick={closeModal} alt="close" src='/assets/icons/close.svg' width={30} height={30}/>
          </li>
          <li className="border-b-2 border-transparent transition hover:duration-300 ease-linear hover:border-white cursor-pointer">
            <Link href={"/"} className="flex space-x-2">
              <Image
                alt="home"
                src="/assets/icons/home.svg"
                width={10}
                height={10}
              />
              <p>Home</p>
            </Link>
          </li>
          <li className="border-b-2 border-transparent transition hover:duration-300 ease-linear hover:border-white cursor-pointer">
            <Link href={"/About"} className="flex space-x-2">
              <Image
                alt="home"
                src="/assets/icons/about.svg"
                width={10}
                height={10}
              />
              <p>About</p>
            </Link>
          </li>
          <li className="border-b-2 border-transparent transition hover:duration-300 ease-linear hover:border-white cursor-pointer">
            <Link href={"/Project"} className="flex space-x-2">
              <Image
                alt="home"
                src="/assets/icons/project.svg"
                width={10}
                height={10}
              />
              <p>project</p>
            </Link>
          </li>
          <li className="border-b-2 border-transparent transition hover:duration-300 ease-linear hover:border-white cursor-pointer">
            <Link href={"/Articles"} className="flex space-x-2">
              <Image
                alt="home"
                src="/assets/icons/article.svg"
                width={10}
                height={10}
              />
              <p>Articles</p>
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Navbar;
