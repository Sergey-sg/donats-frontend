import React, { useState } from 'react';
import { Button } from "react-bootstrap";


const ButtonOnHover = ({defaultBg, hoverBg, children, className}) => {
  const [hover, setHover] = useState(false)

  return (
    <Button
      className={`${defaultBg} ${hover ? "" : hoverBg} ${className}`}
      onMouseOver={(e) => setHover(true)}
      onMouseOut={(e) => setHover(false)}
    >
      {children}
    </Button>
  );
};

export default ButtonOnHover;