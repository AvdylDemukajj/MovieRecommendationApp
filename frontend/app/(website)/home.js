"use client";

import Link from "next/link";
import Container from "@/components/container";
import MovieCard from "@/components/moviecard";
import React, { useEffect, useState } from "react";

export default function Post() {
  const [movieDetails, setMovieDetails] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [isLoading, setIsLoading] = useState(false);
