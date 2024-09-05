import React from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { urlForImage } from "@/lib/sanity/image";
import Navbar from "@/components/navbar";
import NavbarAlt from "@/components/navbaralt";
import { cx } from "@/utils/all";
import Footer from "@/components/footer";

export default function Layout(props) {
  const { children } = props;
  const ogimage = urlForImage(props?.openGraphImage) ?? "";
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://cdn.sanity.io/" />
        <link rel="dns-prefetch" href="https://cdn.sanity.io//" />
      </Head>
