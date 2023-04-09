import { Box, Container, Flex, Heading, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import CustomerCard from './CustomerCard'
import { useCUstomer } from './ContextApi'

export default function CustomersSay() {
  const customer = useCUstomer()

  return (
    <Container as='main' minW='full' h={{ base: '680px', md: '587px' }} bg='brand.900' pt={{ base: '15px', md: '45px' }}>
      <Flex minW='full' mb={{ base: '28px', md: '52px' }} justifyContent='center'>
        <Heading
          as='h1'
          maxW='fit-content'
          h={{ base: '34px', md: '49.27px' }}
          fontFamily='Karla'
          fontWeight='medium'
          fontSize={{ base: '28px', md: '40px' }}
          color='second.500'
        >
          Testimonials
        </Heading>
      </Flex>
      <Box as='section' maxW='937px' maxH='314.11px' m='0 auto'>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 2 }}
          spacingY={{ base: '20px', md: '52px' }}
          spacingX={{ base: '20px', md: '40px' }}
          alignItems='center'
        >
          {customer.map((customer, index) => (
            <CustomerCard
              key={index}
              getImageSrc={customer.getImageSrc()}
              Name={customer.Name}
              Date={customer.Date}
              Description={customer.Description}
            />
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  )
}
