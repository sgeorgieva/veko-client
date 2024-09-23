"use client";

import { Box, Layer, Spinner } from "gestalt";
import { useLoading } from "../../../context/LoadingContext";

export default function Loader() {
  const { loading } = useLoading();

  if (!loading) return null;

  return (
    // <Layer>
    //   <Box
    //     position='fixed'
    //     top
    //     bottom
    //     left
    //     right
    //     display='flex'
    //     alignItems='center'
    //     justifyContent='center'
    //     color='lightGray'
    //     opacity={0.5}
    //   >
    <Spinner show color="default" />
    // </Box>
    // </Layer>
  );
}
