"use client";

import Link from "next/link";
import Container from "@/components/container";
import MovieCard from "@/components/moviecard";
import React, { useEffect, useState } from "react";

export default function Post() {
  const [movieDetails, setMovieDetails] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [isLoading, setIsLoading] = useState(false);

    // Function to fetch recommendations and then fetch movie details from OMDB
    const fetchSearchResults = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:5000/recommend",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ movie_name: searchVal })
          }
        );
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        setIsLoading(true);
        const movieDetailsPromises = data.recommendations.map(movie =>
          fetch(
            `http://www.omdbapi.com/?t=${encodeURIComponent(
              movie
            )}&apikey=57408735`
          ).then(res => {
            if (!res.ok) throw new Error("Failed to fetch from OMDB");
            return res.json();
          })
        );
  
        const moviesDetails = await Promise.all(movieDetailsPromises);
        setMovieDetails(moviesDetails);
        setIsLoading(false);
      } catch (error) {
        console.error("Error:", error);
      }
    };

      // Effect to fetch movie details when the Enter key is pressed and searchVal changes
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === "Enter") {
        fetchSearchResults();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Cleanup the event listener
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [searchVal]);

  