'use client'

import { useLoading } from '../../../app/context/LoadingContext';
import { Box, Layer, Spinner } from 'gestalt';

export default function Loader() {
  const { loading } = useLoading();

  console.log('loading', loading);
  
  if (!loading) return null;

  return (
    <Layer>
      <Box
        position="fixed"
        top
        bottom
        left
        right
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="lightGray"
        opacity={0.5}
      >
        <Spinner show />
      </Box>
    </Layer>
  );
}