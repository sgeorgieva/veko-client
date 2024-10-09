import { useState } from "react";
import axios from "axios";
import { endpoints, linkUrl } from "@/utils/functions";

export const useApiPosts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pagesLength, setPagesLength] = useState(null);
  const [itemsPage, setItemsPage] = useState([]);
  const [posts, setPosts] = useState([]);

  const fetchPosts = async (page, setPage, lang) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `${linkUrl()}${endpoints.posts}?page=${page}&language_id=${lang}`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("jwt")}`, // Replace with your actual authorization token
          },
        }
      );
      if (response.status === 200) {
        setPosts((prevPosts) => [...prevPosts, ...response.data.posts.data]);
        setItemsPage((prevItems) => [
          ...prevItems,
          ...response?.data?.posts?.data,
        ]);
        setPagesLength(response.data?.posts?.last_page);
        setPage((prevPage) => prevPage + 1);
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { fetchPosts, isLoading, posts, pagesLength };
};
