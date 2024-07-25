'use client'

import { Flex, Spinner } from 'gestalt';

export default function Loader() {
  return (
    <Flex
      alignItems="center"
      height="100%"
      justifyContent="center"
      width="100%"
    >
      <Flex direction="column" gap={8} maxWidth={400}>
        <Spinner accessibilityLabel="Example spinner" show />
      </Flex>
    </Flex>
  );
}