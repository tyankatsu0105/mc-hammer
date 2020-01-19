import React, { FunctionComponent, useState, useEffect } from 'react';
import { Box } from 'ink';
import Gradient from 'ink-gradient';
import BigText from 'ink-big-text';

const yellow = '#ffff00';

const hammer = `
            ^^^ 
          (     )
           |   |
           |   |
      ______________
      / / |     | \\ \\
     / /  |     |  \\ \\
    / /   |     |   \\ \\
    \\ \\   |     |   / /
     \\ \\  |     |  / /
      ( ) |     | ( )
         _________
       |           |
       | _________ |
       | |       | |
       | |       | |
       (_)       (_)
`;

export const Body: FunctionComponent = () => {
  const [text, setText] = useState('STOP!');
  const [art, setArt] = useState(' ');
  const [tranlate, setTranslate] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setText((prevText) => `${prevText}\nHammer\nTime`);
    }, 1000);

    setTimeout(() => {
      setArt(hammer);
    }, 1700);

    setTimeout(() => {
      setInterval(() => {
        setTranslate((prevValue) => prevValue + 1);
      }, 100);
    }, 2000);

    return () => {
      clearInterval(tranlate);
    };
  }, []);
  return (
    <>
      <Gradient colors={[yellow, yellow]}>
        <BigText text={text} />
      </Gradient>

      <Box marginLeft={tranlate}>{art}</Box>
    </>
  );
};
