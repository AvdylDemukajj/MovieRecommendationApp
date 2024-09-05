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
                  <div
          className={cx(
            "overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105 dark:bg-gray-800"
          )}>
          <Link
            className={cx(
              "relative block",
              aspect === "landscape"
                ? "aspect-video"
                : aspect === "custom"
                ? "aspect-[5/4]"
                : "aspect-square"
            )}
            href={``}>
            <Image
              src={movie?.Poster}
              alt={movie?.Poster}
              className="object-cover transition-all"
              fill
              sizes="(max-width: 768px) 30vw, 33vw"
            />
          </Link>
        </div>

