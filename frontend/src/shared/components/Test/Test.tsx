import { Button } from '@mui/material';
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)`
  color: red;
`;

const Test: React.FC = () => {
  const [text, setText] = useState(false);

  const handleClick = () => {
    setText(!text);
  };

  return (
    <>
      <div>Hello React</div>
      {text ? <p>I am not changed</p> : <p>I got changed!</p>}
      <StyledButton type="button" onClick={handleClick}>
        Change Text above
      </StyledButton>
    </>
  );
};

export default Test;
