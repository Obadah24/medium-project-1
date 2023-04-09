import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Container,
  Flex,
  Heading,
  Stack,
  SimpleGrid,
  Box,
} from '@chakra-ui/react';
import {
  AiFillHome,
  AiOutlineUser,
  AiOutlineMenu,
  AiOutlineCalendar,
  AiOutlineShoppingCart,
  AiOutlineLogin,
} from 'react-icons/ai';
import { FiPhone, FiMail } from 'react-icons/fi';

const links = [
  { to: '/', label: 'Home', icon: AiFillHome },
  { to: '/about', label: 'About', icon: AiOutlineUser },
  { to: '/menu', label: 'Menu', icon: AiOutlineMenu },
  { to: '/reservation', label: 'Reservation', icon: AiOutlineCalendar },
  { to: '/orderonline', label: 'Order Online', icon: AiOutlineShoppingCart },
  { to: '/login', label: 'Login', icon: AiOutlineLogin },
];

function FooterLink({
  to,
  label,
  icon: Icon,
  isActive,
  onMouseEnter,
  onMouseLeave,
}) {
  const color = isActive ? 'red' : 'inherit';

  return (
    <Link style={{width:'100px', color: '#edefee' }}  to={to} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <Stack direction={['row']} mb='16px'>
      <Icon  color={color} style={{fontSize:'32px'}}/>
      <Box>
      {label}
      </Box>
      </Stack>
    </Link>
  );
}

export default function Footer() {
  const location = useLocation();

  return (
    <Flex as="footer" w="100%" bg='brand.900' justify="center">
      <Container maxW="830px">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} py={8} justifyContent="center">
          <Stack spacing={8}>
            <Heading as="h2" fontFamily='Karla' fontWeight='medium' fontSize='40px' mb={4} color="brand.800">
              Doormat Navigation
            </Heading>
            <Box as="nav">
              {links.map(({ to, label, icon: Icon }) => (
                <FooterLink
                  key={to}
                  to={to}
                  label={label}
                  icon={Icon}
                  isActive={location.pathname === to}
                />
              ))}
            </Box>
          </Stack>
          <Stack spacing={8}>
            <Heading as="h2" fontFamily='Karla' fontWeight='medium' fontSize='40px' mb={4} color="brand.800">
              Contact Us
            </Heading>
            <Stack direction={['row']}>
            <FiPhone  style={{fontSize:'32px'}}/>
            </Stack>
            <Link href="tel:555-555-5555" style={{color:'#edefee', marginTop:'0px'}}>155-5875-56955</Link>
            <Stack direction={['row']}>
              <FiMail style={{fontSize:'32px'}} />
            </Stack>
              <Link href="mailto:obadah.alm@google.com" style={{color:'#edefee',marginTop:'-2px'}}>obadah.@google.com</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Flex>
  );
}

