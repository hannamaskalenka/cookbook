import { Button } from '@mui/material';
import React, { useState } from 'react';

const Test: React.FC = () => {
  const [text, setText] = useState(false);

  const handleClick = () => {
    setText(!text);
  };

  return (
    <>
      <div>Hello React</div>
      {text ? <p>I am not changed</p> : <p>I got changed!</p>}
      <Button type="button" onClick={handleClick}>
        Change Text above
      </Button>
    </>
  );
};

export default Test;
