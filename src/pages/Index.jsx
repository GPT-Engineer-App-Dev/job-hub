import { Box, Container, Flex, Heading, Text, VStack, HStack, Link, SimpleGrid, Input, Select, Button } from "@chakra-ui/react";
import { useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Index = () => {
  const [jobListings, setJobListings] = useState([
    {
      title: "Software Engineer",
      company: "Tech Corp",
      location: "San Francisco, CA",
      description: "Develop and maintain web applications."
    },
    {
      title: "Product Manager",
      company: "Business Inc.",
      location: "New York, NY",
      description: "Oversee product development from ideation to launch."
    },
    {
      title: "UX Designer",
      company: "Design Studio",
      location: "Remote",
      description: "Create user-friendly interfaces and experiences."
    }
  ]);

  const addJobListing = (job) => {
    setJobListings([...jobListings, job]);
  };
  return (
    <Container maxW="container.xl">
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.700" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="md">Job Listing</Heading>
        <HStack spacing={8}>
          <Link href="/">Home</Link>
          <Link href="/jobs">Jobs</Link>
          <Link href="/post-job">Post a Job</Link>
          <Link href="/contact">Contact</Link>
        </HStack>
      </Flex>

      {/* Main Content */}
      <Flex mt={8}>
        {/* Sidebar for Filters */}
        <Box w="25%" p={4} borderRight="1px" borderColor="gray.200">
          <Heading size="md" mb={4}>Filter Jobs</Heading>
          <VStack spacing={4} align="stretch">
            <Box>
              <Text mb={2}>Category</Text>
              <Select placeholder="Select category">
                <option>Engineering</option>
                <option>Design</option>
                <option>Marketing</option>
              </Select>
            </Box>
            <Box>
              <Text mb={2}>Location</Text>
              <Input placeholder="Enter location" />
            </Box>
            <Box>
              <Text mb={2}>Job Type</Text>
              <Select placeholder="Select job type">
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Contract</option>
              </Select>
            </Box>
            <Button colorScheme="blue">Apply Filters</Button>
          </VStack>
        </Box>

        {/* Job Listings */}
        <Box w="75%" p={4}>
          <Heading size="md" mb={4}>Job Listings</Heading>
          <SimpleGrid columns={1} spacing={4}>
            {jobListings.map((job, index) => (
              <Box key={index} p={4} borderWidth="1px" borderRadius="md">
                <Heading size="sm">{job.title}</Heading>
                <Text fontWeight="bold">{job.company}</Text>
                <Text>{job.location}</Text>
                <Text mt={2}>{job.description}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Flex>

      {/* Footer */}
      <Box as="footer" bg="gray.700" color="white" p={4} mt={8}>
        <Flex justifyContent="space-between" alignItems="center">
          <Text>&copy; 2023 Job Listing. All rights reserved.</Text>
          <HStack spacing={4}>
            <Link href="#"><FaFacebook /></Link>
            <Link href="#"><FaTwitter /></Link>
            <Link href="#"><FaLinkedin /></Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;