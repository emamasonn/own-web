import Link from 'next/link';
import {
  Flex,
  Divider as CDivider,
  Box,
  Image,
  Heading,
  Text,
  Button,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import { Card } from '../components/Card';

const Divider = styled(CDivider)`
  background: #000;
`;

export default function Home() {
  return (
    <Flex flexDirection="column" px="2rem">
      <Flex
        h="4rem"
        justifyContent="space-between"
        alignItems="center"
        mb="2rem"
        p="1rem"
      >
        <Box w="3rem" h="3rem">
          <Link href="/">
            <Image src="faro.png" />
          </Link>
        </Box>
        <Flex w="8rem" justifyContent="space-between" alignItems="center">
          <Link href="/">Blog</Link>
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
            <Link href="https://github.com/emamasonn">
              <Image src="github.svg" mr="0.5rem" />
            </Link>
            <Link href="https://www.linkedin.com/in/demamason">
              <Image src="linkedin.svg" mr="0.5rem" />
            </Link>
            <Link href="https://twitter.com/D_E_Mason">
              <Image src="twitter.svg" mr="0.5rem" />
            </Link>
          </Flex>
        </Flex>
      </Flex>
      <Flex flexDirection="column">
        <Heading my="1.5rem">Posts</Heading>
        <Flex justifyContent="center">
          <Flex w="full" maxW="60rem" flexWrap="wrap" justifyContent="center">
            <Card />
            <Card />
            <Card />
          </Flex>
        </Flex>
        <Flex w="full" justifyContent="center" my="2rem">
          <Button>Ver mas</Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
