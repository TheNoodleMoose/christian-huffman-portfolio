import { Text, Button, Box, Flex, Circle, Link } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import SectionContainer from "../components/SectionContainer";

const Index = () => (
  <Container height='100%'>
    <Navbar />
    <Box w='100%' display='flex' flexDirection='column' alignItems='center'>
      <Box w='100%' maxW='1366px'>
        <Hero />
        <Flex width='100%' alignItems='center' maxWidth='48rem' px='1rem'>
          <Text fontSize='1.3rem' fontWeight='bold'>
            Frontend engineer, deeper thinker, problem solver, and lover of all
            things JavaScript.
          </Text>
        </Flex>
        <SectionContainer>
          <Circle
            size='25vh'
            backgroundImage='/assets/profilepic.jpg'
            backgroundSize='cover'
            backgroundPosition='center'
            aria-label='profile picture of Christian Huffman'
          />
          <Text my='10' fontSize='1.2rem' textAlign='center'>
            Hi!{" "}
            <span aria-label='hand waving emoji' role='img'>
              👋
            </span>{" "}
            I'm a frontend engineer with a passion for solving problems and
            helping people! From concept to implementation, and all the way to
            product launch, I love being a part of the process involved to solve
            real-world problems with code. Just trying to make the world a
            better place, one line at a time! Checkout what I've been working on
            recently!
          </Text>
          <Button>
            <Link href='https://github.com/TheNoodleMoose' isExternal>
              <Text>
                My Portfolio <ChevronRightIcon />
              </Text>
            </Link>
          </Button>
        </SectionContainer>

        <SectionContainer>
          <Box>
            <Text
              fontWeight='semibold'
              fontSize='1.3rem'
              textDecoration='underline'
            >
              Bio
            </Text>
            <Text fontSize='1.2rem'>
              Currently residing in sunny Florida
              <span aria-label='sun emoji' role='img'>
                ☀️
              </span>
              <span aria-label='palm tree emoji' role='img'>
                🌴
              </span>
              . Besides coding, I love to read
              <span aria-label='pile of books emoji' role='img'>
                📚
              </span>
              , draw
              <span aria-label='pencil emoji' role='img'>
                ✏️
              </span>
              , and I'm currently trying to learn electric guitar
              <span aria-label='electric guitar emoji' role='img'>
                🎸
              </span>
              . I'm a strong believer in always trying to better my self, and
              I'm always trying to learn something new. That's why I love the
              field I'm in, there's always something new to learn!
            </Text>
          </Box>
        </SectionContainer>

        <SectionContainer>
          <Box>
            <Text
              fontWeight='semibold'
              fontSize='1.3rem'
              textDecoration='underline'
            >
              Skills
            </Text>
            <Text fontSize='1.2rem'>
              I have over three years of professional experience working with
              React, React Native, TypeScript, JavaScript, NextJS, Apollo,
              GraphQL, NodeJS, Jest, React Testing Library, and much more! I
              love keeping up with the latest developments in the frontend
              ecosystem and finding new and innovative ways to make apps better.
              I'm planning to expand to fullstack and learn some Python and
              Django! I also love to teach and mentor junior developers and have
              a proven track record of helping others progress their frontend
              development skills. Feel free to check out my GitHub and see what
              I'm working on!
            </Text>
          </Box>
          <Button my='10'>
            <Link href='https://github.com/TheNoodleMoose' isExternal>
              <Text>GitHub</Text>
            </Link>
          </Button>
        </SectionContainer>
      </Box>
    </Box>
    <Footer />
  </Container>
);

export default Index;
