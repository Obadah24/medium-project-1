import React from 'react';
import {
  VStack,
  Image,
  Heading,
  Text,
  HStack,
  Button,
} from '@chakra-ui/react';

export default function SpecialCard({
  getImageSrc,
  Name,
  Price,
  Description,
  button,
}) {
  return (
    <VStack
      borderRadius={["16px"]}
      w={['full', '270px']}
      h={['auto', '498px']}
    >
      <Image
        src={getImageSrc}
        alt={'title'}
        h={['150px', '217.75px']}
        w={['250px', '270px']}
      />
      <VStack
        p={4}
        alignItems={['center', 'flex-start']}
        bg="#EDEFEE"
        borderEndRadius={['16px', '0']}
        borderLeftRadius={['16px', '0']}
        borderTopRadius={['0', '0']}
        w={['250px', '270px']}
        style={{ marginTop: '0' }}
      >
        <HStack
          w={['200px', '240px']}
          justifyContent="space-between"
          alignItems="center"
        >
          <Heading
            as="h3"
            maxW={['190px', '163.59px']}
            maxH={['25px', '25.46px']}
            fontFamily="MarkaziText"
            fontWeight="medium"
            fontSize={['20px', '24px']}
            color="second.400"
          >
            {Name}
          </Heading>
          <Heading
            as="h3"
            maxW={['85px', '59.39px']}
            maxH={['15px', '16.68px']}
            fontFamily="Karla"
            fontWeight="extrabold"
            fontSize={['14px', '16px']}
            color="second.700"
          >
            {Price}
          </Heading>
        </HStack>
        <Text
          maxW={['200px', '217.01px']}
          maxH={['80px', '141.38px']}
          fontFamily="Karla"
          fontWeight="normal"
          fontSize={['14px', '16px']}
          color="second.400"
          mt={['10px', '20px']}
          style={{ margin: '16px 0' }}
        >
          {Description}
        </Text>
        <Button
          w={['200px', '180.56px']}
          h={['40px', '50px']}
          fontFamily="Roboto"
          fontWeight="normal"
          fontSize={['14px', '18px']}
          bg="brand.800"
          color="second.400"
          borderRadius={12}
          mt={['10px', '20px']}
        >
          {button}
        </Button>
      </VStack>
    </VStack>
  );
}

