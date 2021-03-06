import { Flex, Image, Button, Text } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import Link from 'next/link';

interface ICard {
  mode: 'project' | 'post';
}

export const Card = ({ mode }) => {
  return (
    <Flex
      flexDirection="column"
      maxW="18rem"
      maxH="30rem"
      w="full"
      m="0.6rem"
      borderRadius="0.5rem"
      border="1px solid #CBD5E0"
      justifyContent="center"
    >
      <Image
        src="/imagepost.jpg"
        maxW="20rem"
        maxH="15rem"
        w="full"
        borderRadius="0.4rem 0.4rem 0rem 0rem"
      />
      <Flex flexDirection="column" p="0.8rem">
        <Text fontWeight="bold" fontSize="1.2rem" maxW="16rem" isTruncated>
          Titulo del Post
        </Text>
        <Text fontSize="0.8rem">20/20/2020</Text>
        <Text my="1rem" lineHeight="1.3rem" fontSize="0.9rem">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
          inventore quaerat dignissimos possimus eius beatae iste assumenda quos
          sunt.
        </Text>
        <Flex justifyContent="flex-end">
          {mode === 'post' ? (
            <Button
              fontSize="0.8rem"
              p="0.5rem"
              rightIcon={<ArrowForwardIcon />}
            >
              Leer Mas
            </Button>
          ) : (
            <Flex>
              <Link href="/">
                <Image
                  src="/github.svg"
                  w="1.5rem"
                  h="1.5rem"
                  mr="0.8rem"
                  cursor="pointer"
                />
              </Link>
              <Link href="/">
                <Image src="/web.svg" w="1.5rem" h="1.5rem" cursor="pointer" />
              </Link>
            </Flex>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};
