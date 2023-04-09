import React from 'react'
import { Container, Heading, Text, Image, Box } from '@chakra-ui/react'
import { useUser } from './ContextApi'

export default function Dubai() {
  const { data } = useUser()

  return (
    <Container as='main' minW='full' minHeight={['60vh', '100vh']} mb='53px' pt='45px' display='flex' justifyContent='center' alignItems='center'>
      <Container as='section' maxW={['full', 'full', 'full', '869px']} mx={['1rem', '1rem', '1rem', 'auto']} h='auto' display='flex' flexDir={['column', 'column', 'column', 'row']}>
        <Box w={['full', 'full', 'full', '373px']} maxH='469px' mb={['1rem', '1rem', '1rem', 0]} mr={['0', '0', '0', '47px']}>
          <Heading as='h2' maxW='330px' maxH='55px' fontFamily='Roboto' fontWeight='medium' fontSize={['36px', '36px', '56px', '56px']} color='second.300'>
            {data.Dubai.Name}
          </Heading>
          <Heading as='h3' maxW='330px' maxH='50px' fontFamily='MarkaziText' fontWeight='normal' fontSize={['24px', '24px', '32px', '32px']} color='second.400'>
            {data.Dubai.Subtitle}
          </Heading>
          <Text minW={['full', 'full', '381px', '381px']} maxH='105px' fontFamily='Roboto' fontWeight='normal' fontSize={['16px', '16px', '20px', '20px']} mt='34px' mb={['80px ','51px']} color='second.400'>
            {data.Dubai.Description}
          </Text>
        </Box>
        <Box minW='fit-content' h={['auto', 'auto', 'auto', '469px']} display='flex' position='relative' justifyContent={['center']}>
          <Image h={['250px', '250px','338px']} w={['180px', '200px', '276px']} src={require('../img/man1.png')} alt='logo1' mt={['1rem', '1rem', '117px', '117px']} />
          <Image h={['250px', '250px','338px']} w={['180px', '200px', '276px']} src={require('../img/man2.png')} alt='logo2' ml={['-70px', '-70px', '-97px', '-97px']} />
        </Box>
      </Container>
    </Container>
  )
}
