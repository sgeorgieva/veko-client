"use client";

import { Flex, Spinner } from "gestalt"; // You can use any loader component or customize your own

import "./loader.scss";
export default function Loader() {
  return (
    <div className="loader-overlay">
      <Flex
        alignItems="center"
        height="100%"
        justifyContent="center"
        width="100%"
      >
        <Flex direction="column" gap={8} maxWidth={400}>
          <Spinner accessibilityLabel="Example spinner" show color="default" />
        </Flex>
      </Flex>
    </div>
  );
}
