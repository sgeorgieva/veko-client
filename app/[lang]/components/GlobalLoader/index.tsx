"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Loader from "../Loader";

export default function GlobalLoader({ children }: any) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Start loading when children change
    setLoading(true);

    // Stop loading after a short delay to simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // Adjust the delay as needed

    // Cleanup the timer on unmount or when children change again
    return () => clearTimeout(timer);
  }, [children]);

  return (
    <>
      {loading && <Loader />}
      {children}
    </>
  );
}
