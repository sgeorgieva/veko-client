"use client";

import { Button, Flex } from "gestalt";
import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import HomeComponent from "./components/HomeComponent/page";
import { useEffect } from "react";

export default function NotFound() {
  const params = useParams<{ translations: any }>();
  const router = useRouter();
  const pathname = usePathname();

  // if (typeof window !== "undefined") {
  //   if (params.lang === "en") {
  //     window.history.pushState(null, "", "/en/not-found");
  //   } else {
  //     window.history.pushState(null, "", "/not-found");
  //   }
  // }

  useEffect(() => {
    if (params.lang === "en") {
      router.replace("/en/not-found");
    } else {
      router.replace("/not-found");
    }
  }, [router]);

  return (
    <>
      <HomeComponent isHomePage={false} />
      <div className="pb-5">
        <div className="d-flex align-items-center justify-content-center flex-column bg-light">
          <h1 className="pt-4">
            {params.lang === "bg" ? "Грешка 404!" : "Error 404!"}
          </h1>
          <h4 className="mt-2 mb-5">
            {params.lang === "bg"
              ? "Страницата не е намерена"
              : "Page not found"}
          </h4>
        </div>
        <div className="mt-4">
          <Flex
            alignContent="stretch"
            alignItems="center"
            direction="column"
            gap={{ column: 2, row: 0 }}
            height="100%"
            justifyContent="center"
            width="100%"
          >
            <Link href="/">
              <Button
                color="gray"
                fullWidth
                size="lg"
                text={
                  params.lang === "bg"
                    ? "Върни се в началото"
                    : "Go back to home"
                }
              />
            </Link>
          </Flex>
        </div>
      </div>
    </>
  );
}
