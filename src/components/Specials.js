import { Container, HStack, Heading, Button, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import SpecialCard from './SpecialCard'
import { useSpecials } from './ContextApi'

const SPACING = { base: '46px', md: '298px' }

export default function Specials() {
  const specials = useSpecials()

  return (
    <Container as='section' maxW={['100%', '100%', '858px']} px={['16px', '16px', '0']} py={['0', '40px', '40px']} mb={['20px', '0', '0']} >
      <HStack mb={['20px','40px','40px']} spacing={SPACING} pt='27px'>
        <Heading as='h1' maxW={['100%', '100%', '382px']} fontSize={['18px', '18px', '40px']} fontWeight='medium' color='second.300'>This week's specials!</Heading>
        <Button w={['90px', '180.56px', '180.56px']} h='50px' fontFamily='Roboto' fontWeight='normal' fontSize={['14px', '14px', '18px']} color='second.400' bg='brand.800' borderRadius={12}>Online Menu</Button>
      </HStack>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacingY='20px' alignItems='center'>
        {specials.map((special, index) => (
          <SpecialCard
            key={index}
            getImageSrc={special.getImageSrc()}
            Name={special.Name}
            Price={special.Price}
            Description={special.Description}
            button={special.Button}
          />
        ))}
      </SimpleGrid>
    </Container>
  )
}
