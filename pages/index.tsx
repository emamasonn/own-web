import Link from 'next/link';
import {
  Flex,
  Divider as CDivider,
  Box,
  Image,
  Heading,
  Text,
  Container,
} from '@chakra-ui/react';
import styled from '@emotion/styled';

const Divider = styled(CDivider)`
  background: #000;
`;

export default function Home() {
  return (
    <Flex flexDirection="column">
      <Flex
        h="4rem"
        justifyContent="space-between"
        alignItems="center"
        mb="2rem"
        p="1rem"
      >
        <Box w="3rem" h="3rem">
          <Image src="faro.png" />
        </Box>
        <Flex w="8rem" justifyContent="space-between" alignItems="center">
          <Link href="https://www.youtube.com/">Blog</Link>
          <Divider orientation="vertical" />
          <Link href="/projects">Projectos</Link>
        </Flex>
      </Flex>
      <Flex
        flexWrap="wrap-reverse"
        p="1rem"
        justifyContent="center"
        alignItems="center"
      >
        <Box w="22rem">
          <Image src="profile.png" borderRadius="0.5rem" />
        </Box>
        <Flex flexDirection="column" p={['0', '0', '1.5rem', '1.5rem']}>
          <Heading as="h1" fontSize="3.25rem" fontWeight="800">
            David Mason
          </Heading>
          <Text fontSize="lg">Desarrollador Web</Text>
          <Heading my="1.5rem">Bio</Heading>
          <Text maxW="40rem" mb="1rem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            nobis accusamus iusto blanditiis quidem nemo nihil numquam sint
            impedit quod. Temporibus cumque quos a nostrum vel numquam ipsam
            quisquam facilis.
          </Text>
          <Heading my="1rem" fontSize="1.5rem">
            Social Media
          </Heading>
          <Flex>
            <Image src="github.svg" mr="0.5rem" />
            <Image src="linkedin.svg" mr="0.5rem" />
            <Image src="twitter.svg" mr="0.5rem" />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
