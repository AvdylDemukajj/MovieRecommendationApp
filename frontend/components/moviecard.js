import Image from "next/image";
import Link from "next/link";
import { cx } from "@/utils/all";
import { StarIcon } from "@sanity/icons";
import { IconInnerShadowTopRight, IconThumbUp } from "@tabler/icons-react";

export default function MovieCard({
  movie,
  aspect,
  minimal,
  fontSize,
  fontWeight
}) {
  console.log(movie);
  return (
    <>
      <div
        className={cx(
          "group cursor-pointer",
          minimal && "grid gap-10 md:grid-cols-2"
        )}>
