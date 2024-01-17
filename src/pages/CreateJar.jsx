import React from "react";
import { Container } from "react-bootstrap";
import JarForm from "../components/jarComponents/JarForm";

const CreateJar = () => {
  const initialValues = {
    monobank_url: "",
    title: "",
    description: "",
    tags: [],
    title_img: "",
    img_alt: "",
    album: [],
  }
  
  return (
    <Container className="mb-auto py-4">
      <JarForm initialValues={initialValues} />
    </Container>
  );
};

export default CreateJar;
