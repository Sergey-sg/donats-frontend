import React, { useState } from 'react';
import { Button } from "react-bootstrap";


const ButtonOnHover = ({defaultBg, hoverBg, children, className, ...otherProps}) => {
  const [hover, setHover] = useState(false)

  return (
    <Button
      className={`${hover ? hoverBg : defaultBg} ${className}`}
      onMouseOver={(e) => setHover(true)}
      onMouseOut={(e) => setHover(false)}
      {...otherProps}
    >
      {children}
    </Button>
  );
};

export default ButtonOnHover;