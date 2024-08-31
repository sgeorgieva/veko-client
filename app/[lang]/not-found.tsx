"use client";

import { Button, Flex } from "gestalt";
import { useRouter } from "next/navigation";
import { Locale, i18n } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import HomeComponent from "./components/HomeComponent/page";

export default function NotFound({ translations }: { translations: any }) {
  const router = useRouter();
  console.log("translations", translations);

  return (
    <div className="py-5">
      <HomeComponent isHome={false} />
      <div className="d-flex align-items-center justify-content-center flex-column bg-light">
        <h1 className="pt-4">{translations.error_404}</h1>
        <h4 className="mt-2 mb-5">{translations.page_not_found}</h4>
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
          <Button
            onClick={() => router.push("/")}
            color="gray"
            fullWidth
            size="lg"
            text={translations.back_to_home}
          />
        </Flex>
      </div>
    </div>
  );
}
