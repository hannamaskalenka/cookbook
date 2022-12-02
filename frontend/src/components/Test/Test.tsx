import { useState } from 'react';

const Test = () => {
  const [text, setText] = useState(false);

  const handleClick = () => {
    setText(!text);
  };

  return (
    <>
      <div>Hello React</div>
      {text ? <p>I am not changed</p> : <p>I got changed!</p>}
      <button type="button" onClick={handleClick}>
        Change Text above
      </button>
    </>
  );
};

export default Test;
