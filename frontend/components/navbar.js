"use client";

import { Fragment } from "react";
import { Menu, Transition, Disclosure } from "@headlessui/react";
import Container from "@/components/container";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/lib/sanity/image";
import cx from "clsx";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { myLoader } from "@/utils/all";

export default function Navbar(props) {
  const leftmenu = [
    {
      label: "About",
      href: "/about"
    }
  ];

  const rightmenu = [
    {
      label: "Source code",
      href: "https://web3templates.com/templates/stablo-minimal-blog-website-template",
      external: true
    }
  ];

  const mobilemenu = [...leftmenu, ...rightmenu];

  return (
    <Container>
      <nav>
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap justify-between md:flex-nowrap md:gap-10">
