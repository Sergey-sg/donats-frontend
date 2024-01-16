import React, { useState } from 'react';
import { Image, Modal, Button, Row } from 'react-bootstrap';

const ImageList = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <Row>
      <div className="text-start fs-3">Album</div>
      {images?.map((image) => (
        <Image
          key={image.id}
          src={image.img}
          alt={image.img_alt}
          fluid
          className="m-2 cursor-pointer w-auto"
          style={{ height: '15vh' }}
          onClick={() => handleClick(image)}
        />
      ))}
      <Modal show={selectedImage !== null} onHide={handleClose} centered>
        <Modal.Body>
          <Image src={selectedImage?.img} alt={selectedImage?.img_alt} fluid/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Row>
  );
};

export default ImageList;