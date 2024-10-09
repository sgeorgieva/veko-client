"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import { endpoints, linkUrl } from "../../utils/functions";

// Create a context for posts
const PostsContext = createContext({});

// Posts Provider
export function PostsProvider({ children }: { children: React.ReactNode }) {
  const [posts, setPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [pagesLength, setPagesLength] = useState<number | null>(null);
  const initialized = useRef(false);

  // Fetch posts data
  const fetchPostsData = async (lang: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `${linkUrl()}${endpoints.posts}?page=${page}&language_id=${lang}`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("jwt")}`, // Token from localStorage
          },
        }
      );

      if (response.status === 200) {
        setPosts((prevPosts) => [...prevPosts, ...response.data.posts.data]);
        setPagesLength(response.data.posts.last_page);
        setPage((prevPage) => prevPage + 1);
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!initialized.current && posts.length === 0) {
      initialized.current = true;
      fetchPostsData("en"); // Replace 'en' with your default language or a dynamic value
    }
  }, []);

  return (
    <PostsContext.Provider
      value={{
        posts,
        setPosts,
        fetchPostsData,
        isLoading,
        error,
        page,
        pagesLength,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
}

// Custom hook to use the posts context
export function usePosts() {
  return useContext(PostsContext);
}
