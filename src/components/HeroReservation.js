import { Container, Heading, Text, Image, Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { useUser } from './ContextApi';

export default function CallToAction() {
  const { data } = useUser();

  return (
    <Container as="main" minW="full"  bgGradient={['linear(to-l,brand.900,brand.900,brand.900,brand.900,brand.900, brand.800)','linear(to-l,brand.900,brand.900,brand.900, brand.800)']} mb={['20px', '120px']} pt={['20px', '45px']}>
      <Container as="section" maxW="858px" h={['auto', 'auto', '468px']} mx="auto" display={['flex', 'flex', 'flex']}>
        <Box w={['full', 'full', '330px']} h={['auto', 'auto', '378px']} mr={['0', '0', '145px']} mb={['40px', '40px', '0']}>
          <Heading as="h2" maxW="330px" maxH="55px" fontFamily="Roboto" fontWeight="medium" fontSize={['30px', '40px', '56px']} color="brand.800" mb="10px">
            {data.Dubai.Name}
          </Heading>
          <Heading as="h3" maxW="330px" maxH="50px" fontFamily="MarkaziText" fontWeight="normal" fontSize={['24px', '30px', '32px']} color="second.500" mb="30px">
            {data.Dubai.Subtitle}
          </Heading>
          <Text minW={['auto', 'auto', '381px']} maxH={['auto', 'auto', '105px']} fontFamily="Roboto" fontWeight="normal" fontSize={['16px', '18px', '20px']} color="second.500" mb="30px">
            {data.calltoaction.Description}
          </Text>
        </Box>
        <Flex w={['100px', 'full', '414px']} h={['100px', 'auto', '338px']} m={['110px 10px 15px 0']} alignItems={['center']}>
          <Image h={['100px', '250px', '500px']} w={['100px', 'full', '338px']} borderRadius={["4px","16px"]} src={require("../img/restaurant.jpg")} alt="food" border="1px solid #333333" />
        </Flex>
      </Container>
    </Container>
  );
}
