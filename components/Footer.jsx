import React from 'react';
import { Box } from '@chakra-ui/react';
export default function Footer() {
  return (
    <Box
      textAlign={'center'}
      p="5"
      color={'gray.600'}
      borderTop="1px"
      borderColor={'gray.400'}
      fontWeight="bold"
    >
      {new Date().getFullYear()} Realtor, INC.
    </Box>
  );
}
