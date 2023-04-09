import React from 'react';
import {
  Card,
  CardHeader,
  Flex,
  Avatar,
  Box,
  Heading,
  Text,
  CardBody,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faEarth } from '@fortawesome/free-solid-svg-icons';

export default function CustomerCard({ getImageSrc, Name, Date, Description }) {
  const FontAwesomeIconRate = ({ name }) => {
    const ratings = {
      'Obadah-101': 5,
      'Abd-102': 4,
      'Mohammed-103': 2,
      'Omar-104': 1,
    };
    const rating = ratings[name];
    if (!rating) return null;
    return (
      <>
        {Array(rating)
          .fill()
          .map((_, index) => (
            <FontAwesomeIcon
              key={index}
              icon={faStar}
              size="1x"
              color="#f4ce14"
            />
          ))}
      </>
    );
  };
  return (
    <Card
      w={['100%', '100%', '454.05px']}
      h={['auto', 'auto', '147.11px']}
    >
      <CardHeader p={['12px', '16px']}>
        <Flex
          flexDirection={['row', 'row', 'row']}
          alignItems={['center', 'center', 'flex-start']}
          justifyContent={['space-between', 'space-between', 'initial']}
          spacing="4"
        >
          <Flex gap="4" alignItems="center" flexWrap="wrap">
            <Avatar
              name={Name}
              src={getImageSrc}
              w={['28px', '47px']}
              h={['28px', '46px']}
              borderRadius={0}
            />
            <Box>
              <Heading
                fontFamily="Karla"
                fontWeight="bold"
                fontSize={['16px', '20px']}
              >
                {Name}
              </Heading>
              <Text
                fontFamily="Karla"
                fontWeight="normal"
                fontSize={['14px', '18px']}
              >
                {Date}{' '}
                <FontAwesomeIcon
                  icon={faEarth}
                  size="1x"
                  color="#4c5e57"
                />
              </Text>
            </Box>
          </Flex>
          <Box ml={['0', '0', 'auto']} mt={['4px', '4px', '0']}>
            <FontAwesomeIconRate name={Name} />
          </Box>
        </Flex>
      </CardHeader>
      <CardBody p={['12px 12px 0', '16px 16px 0']}>
        <Text
          fontFamily="Karla"
          fontWeight="normal"
          fontSize={['14px', '16px']}
          pl={['0', '0', '40px']}
          color="second.400"
        >
          {Description}
        </Text>
      </CardBody>
    </Card>
  );
}
