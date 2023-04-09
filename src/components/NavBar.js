import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'
import {
  Box,
  Container,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useMediaQuery,
} from '@chakra-ui/react'

export default function NavBar() {
  const [isSmallerThan1024] = useMediaQuery("(max-width: 1024px)")

  return (
    <Box
      as="nav"
      minH="110px"
      py="2"
      px={{ base: '4', md: '10', lg: '20' }}
      bg="white"
      boxShadow="base"
    >
      <Container maxW={{ base: 'unset', sm: '2xl', md: '4xl', lg: '4xl' }}>
        <Flex justifyContent="space-between" alignItems="center">
          <Image maxH="74px" src={require("../img/mark.jpg")} alt="logo" />
          {isSmallerThan1024 ? (
            <Menu>
              <MenuButton
                color="black"
                _hover={{ color: 'gray.500', bg: 'transparent' }}
                _active={{ bg: 'transparent' }}
                _focus={{ boxShadow: 'none' }}
              >
                <FontAwesomeIcon icon={faList} size="2x"  color='#4c5e57'/>
              </MenuButton>
              <MenuList
                bg="brand.900"
                boxShadow="base"
                color="black"
                border="none"
                zIndex={10}
              >
                <MenuItem
                  _hover={{ bg: 'transparent', color: 'second.500' }}
                  _focus={{ bg: 'transparent', boxShadow: 'none' }}
                >
                  <Link to="/">Home</Link>
                </MenuItem>
                <MenuItem
                  _hover={{ bg: 'transparent', color: 'second.500' }}
                  _focus={{ bg: 'transparent', boxShadow: 'none' }}
                >
                  <Link to="/about">About</Link>
                </MenuItem>
                <MenuItem
                  _hover={{ bg: 'transparent', color: 'second.500' }}
                  _focus={{ bg: 'transparent', boxShadow: 'none' }}
                >
                  <Link to="/menu">Menu</Link>
                </MenuItem>
                <MenuItem
                  _hover={{ bg: 'transparent', color: 'second.500' }}
                  _focus={{ bg: 'transparent', boxShadow: 'none' }}
                >
                  <Link to="/reservation">Reservation</Link>
                </MenuItem>
                <MenuItem
                  _hover={{ bg: 'transparent', color: 'second.500' }}
                  _focus={{ bg: 'transparent', boxShadow: 'none' }}
                >
                  <Link to="/orderonline">Order Online</Link>
                </MenuItem>
                <MenuItem
                  _hover={{ bg: 'transparent', color: 'second.500' }}
                  _focus={{ bg: 'transparent', boxShadow: 'none' }}
                >
                  <Link to="/login">Login</Link>
                </MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <Flex as="ul" listStyleType="none" ml="6" alignItems="center">
              <NavLink path="/" label="Home" />
              <NavLink path="/about" label="About" />
              <NavLink path="/menu" label="Menu" />
              <NavLink path="/reservation" label="Reservation" />
              <NavLink path="/orderonline" label="Order Online" />
              <NavLink path='/login' label='Login' />
            </Flex>
          )}
        </Flex>
      </Container>
    </Box>
  )
}

function NavLink({ path, label }) {
  return (
    <Box as='li' ml='8'>
      <Link
        style={{ color: '#333333', minWidth: '20px', height: '37px', marginTop: '43px' }}
        to={path}
      >
        {label}
      </Link>
    </Box>
  )
}



