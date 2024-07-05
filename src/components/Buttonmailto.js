import React from "react";
import { Button } from 'react95'; 

const ButtonMailto = ({ label, mailto }) => {
    const handleClick = (e) => {
      window.location.href = `mailto:${mailto}`;
      e.preventDefault();
    };
  
    return <Button onClick={handleClick}>{label}</Button>;
  };

export default ButtonMailto;