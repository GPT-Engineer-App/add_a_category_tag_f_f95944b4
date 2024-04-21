import { Box, Container, Heading, SimpleGrid, Text, Image, Stack, Tag, Divider, IconButton, useColorModeValue, Flex } from "@chakra-ui/react";
import { FaArrowRight, FaStar } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "AI Personal Assistant",
    description: "Organize your day with a smart assistant that learns your preferences.",
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1679958158521-133d541abf85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBSSUyMFBlcnNvbmFsJTIwQXNzaXN0YW50fGVufDB8fHx8MTcwNDcxMzQ1OXww&ixlib=rb-4.0.3&q=80&w=1080",
    category: "Productivity",
  },
  {
    id: 2,
    name: "AI Image Generator",
    description: "Create stunning images and designs with a state-of-the-art AI-powered tool.",
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBSSUyMEltYWdlJTIwR2VuZXJhdG9yfGVufDB8fHx8MTcwNDcxMzQ2MHww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    name: "AI Data Analysis",
    description: "Gain insights from your data with advanced AI analytics.",
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1488229297570-58520851e868?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBSSUyMERhdGElMjBBbmFseXNpc3xlbnwwfHx8fDE3MDQ3MTM0NjB8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 4,
    name: "AI Music Composer",
    description: "Compose beautiful music pieces with an AI that understands harmony and rhythm.",
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBSSUyME11c2ljJTIwQ29tcG9zZXJ8ZW58MHx8fHwxNzA0NzEzNDYwfDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("gray.800", "white");

  return (
    <Container maxW="container.xl" p={4}>
      <Heading as="h1" mb={6} textAlign="center">
        Daily Top-Rated AI Products
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
        {products.map((product) => (
          <Box key={product.id} p={4} bg={bg} boxShadow="lg" borderRadius="lg" transition="transform 0.3s ease-in-out" _hover={{ transform: "scale(1.05)" }}>
            <Image src={product.imageUrl} alt={product.name} borderRadius="lg" mb={4} />
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={1}>
              <Stack direction="row" alignItems="center">
                <Stack direction="row" alignItems="center">
                  <Heading as="h3" size="md">
                    {product.name}
                  </Heading>
                  <Tag size="sm" colorScheme="green" ml={2}>
                    {product.category}
                  </Tag>
                </Stack>
              </Stack>
              <Tag size="lg" colorScheme="yellow" borderRadius="full">
                {product.rating} <FaStar />
              </Tag>
            </Stack>
            <Text color={color} mb={4}>
              {product.description}
            </Text>
            <Divider mb={4} />
            <Flex justifyContent="space-between" alignItems="center">
              <Text>Learn more</Text>
              <IconButton icon={<FaArrowRight />} aria-label="Learn more" colorScheme="blue" variant="outline" isRound />
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Index;
