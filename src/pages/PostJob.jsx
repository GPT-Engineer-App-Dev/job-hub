import { useState } from "react";
import { Box, Container, Flex, Heading, VStack, Input, Select, Textarea, Button, FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const PostJob = ({ addJobListing }) => {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    jobType: "",
    category: "",
    description: ""
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.title) tempErrors.title = "Job title is required";
    if (!formData.company) tempErrors.company = "Company name is required";
    if (!formData.location) tempErrors.location = "Location is required";
    if (!formData.jobType) tempErrors.jobType = "Job type is required";
    if (!formData.category) tempErrors.category = "Category is required";
    if (!formData.description) tempErrors.description = "Description is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      addJobListing(formData);
      navigate("/");
    }
  };

  return (
    <Container maxW="container.md" mt={8}>
      <Heading mb={6}>Post a Job</Heading>
      <Box as="form" onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <FormControl isInvalid={errors.title}>
            <FormLabel>Job Title</FormLabel>
            <Input name="title" value={formData.title} onChange={handleChange} />
            <FormErrorMessage>{errors.title}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.company}>
            <FormLabel>Company Name</FormLabel>
            <Input name="company" value={formData.company} onChange={handleChange} />
            <FormErrorMessage>{errors.company}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.location}>
            <FormLabel>Location</FormLabel>
            <Input name="location" value={formData.location} onChange={handleChange} />
            <FormErrorMessage>{errors.location}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.jobType}>
            <FormLabel>Job Type</FormLabel>
            <Select name="jobType" value={formData.jobType} onChange={handleChange}>
              <option value="">Select job type</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
            </Select>
            <FormErrorMessage>{errors.jobType}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.category}>
            <FormLabel>Category</FormLabel>
            <Select name="category" value={formData.category} onChange={handleChange}>
              <option value="">Select category</option>
              <option value="Engineering">Engineering</option>
              <option value="Design">Design</option>
              <option value="Marketing">Marketing</option>
            </Select>
            <FormErrorMessage>{errors.category}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.description}>
            <FormLabel>Description</FormLabel>
            <Textarea name="description" value={formData.description} onChange={handleChange} />
            <FormErrorMessage>{errors.description}</FormErrorMessage>
          </FormControl>
          <Button colorScheme="blue" type="submit">Post Job</Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default PostJob;