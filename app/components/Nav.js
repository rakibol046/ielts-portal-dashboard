"use client";
import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import logo from "@/public/images/logo.svg";
import home from '@/public/images/icons/home.svg';
import listening from "@/public/images/icons/listening.svg";
import reading from "@/public/images/icons/reading.svg";
import writing from "@/public/images/icons/writing.svg";
import speaking from "@/public/images/icons/speaking.svg";
import mock from "@/public/images/icons/mock.svg";
import blog from "@/public/images/icons/blog.svg";

const menuItem = [
  {
    name: "Dashboard",
    icon: home,
    url: "/",
    child: [],
  },
  {
    name: "IELTS Listening",
    icon: listening,
    url: "/listening",
    child: [],
  },
  {
    name: "IELTS Reading",
    icon: reading,
    url: "/reading",
    child: [],
  },
  {
    name: "IELTS Writing",
    icon: writing,
    url: "/writing",
    child: [],
  },
  {
    name: "IELTS Speaking",
    icon: speaking,
    url: "/speaking",
    child: [],
  },
  {
    name: "Mock Test",
    icon: mock,
    url: "/mock",
    child: [],
  },
  {
    name: "IELTS Tips",
    icon: blog,
    url: "/tips",
    child: [
      {
        name: "Listening",
        url: "/tips/listening",
        child: [],
      },
      {
        name: "Reading",
        url: "/tips/reading",
        child: [],
      },
      {
        name: "Writing",
        url: "/tips/writing",
        child: [],
      },
      {
        name: "Speaking",
        url: "/tips/speaking",
        child: [],
      },
    ],
  },
];
export default function SideNavigationSeparator() {
    const [isSideNavOpen, setIsSideNavOpen] = useState(false);
     const currentPath = usePathname();

  return (
    <>
      {/*  <!-- Component: Side navigation menu with content separator --> */}
      {/*  <!-- Mobile trigger --> */}
      <button
        title="Side navigation"
        type="button"
        className={`visible fixed left-6 top-6 z-40 order-10 block h-10 w-10 self-center rounded bg-white opacity-100 lg:hidden ${
          isSideNavOpen
            ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
            : ""
        }`}
        aria-haspopup="menu"
        aria-label="Side navigation"
        aria-expanded={isSideNavOpen ? " true" : "false"}
        aria-controls="nav-menu-2"
        onClick={() => setIsSideNavOpen(!isSideNavOpen)}
      >
        <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
          <span
            aria-hidden="true"
            className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-700 transition-all duration-300"
          ></span>
          <span
            aria-hidden="true"
            className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
          ></span>
          <span
            aria-hidden="true"
            className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
          ></span>
        </div>
      </button>

      {/*  <!-- Side Navigation --> */}
      <aside
        id="nav-menu-2"
        aria-label="Side navigation"
        className={`fixed top-0 bottom-0 left-0 z-40 flex w-72 flex-col border-r border-r-slate-200 bg-white transition-transform lg:translate-x-0 ${
          isSideNavOpen ? "translate-x-0" : " -translate-x-full"
        }`}
      >
        <Link
          aria-label="WindUI logo"
          className="flex items-center gap-2 whitespace-nowrap p-6 text-xl font-medium focus:outline-none"
          href="javascript:void(0)"
        >
          <Image src={logo} />
        </Link>
        <nav
          aria-label="side navigation"
          className="flex-1 divide-y divide-slate-100 overflow-auto"
        >
          <div>
            <ul className="flex flex-1 flex-col gap-1 py-3">
              {menuItem.map((item, index) => (
                <li key={index} className="px-3">
                  <Link
                    href={item.url}
                    className={` ${
                      currentPath === item.url
                        ? "text-emerald-500 bg-emerald-50"
                        : "text-slate-700"
                    } flex items-center gap-3 rounded p-3  transition-colors hover:bg-emerald-50 hover:text-emerald-500 `}
                  >
                    <div className="flex items-center self-center">
                      <Image src={item.icon} className="h-6 w-6" />
                    </div>
                    <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                      {item.name}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul className="flex flex-1 flex-col gap-1 py-3">
              <li className="px-3">
                <Link
                  href="/users"
                  className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50 aria-[current=page]:bg-emerald-50 aria-[current=page]:text-emerald-500 "
                >
                  <div className="flex items-center self-center ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                      aria-label="Dashboard icon"
                      role="graphics-symbol"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                      />
                    </svg>
                  </div>
                  <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                    User Management
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <footer className="border-t border-slate-200 p-3">
          <a
            href="#"
            className="flex items-center gap-3 rounded p-3 text-slate-900 transition-colors hover:text-emerald-500 "
          >
            <div className="flex items-center self-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
                aria-label="Dashboard icon"
                role="graphics-symbol"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm font-medium">
              Logout
            </div>
          </a>
        </footer>
      </aside>

      {/*  <!-- Backdrop --> */}
      <div
        className={`fixed top-0 bottom-0 left-0 right-0 z-30 bg-slate-900/20 transition-colors sm:hidden ${
          isSideNavOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsSideNavOpen(false)}
      ></div>
      {/*  <!-- End Side navigation menu with content separator --> */}
    </>
  );
}
