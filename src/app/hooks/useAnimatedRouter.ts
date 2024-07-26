"use client";

import { useRouter } from "next/navigation";

export default function useAnimatedRouter() {
  const router = useRouter();
  
  // Navigate to the new route
  const animatedRoute = (url: string) => {
    const extendedDocument = document as ExtendedDocument;
    
    if (!extendedDocument.startViewTransition) {
      return router.push(url);
    } else {
      extendedDocument.startViewTransition(() => {
        router.push(url);
      });
    }
  };
  return { animatedRoute };
}