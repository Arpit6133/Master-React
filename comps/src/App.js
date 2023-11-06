import React from 'react';
import Button from './Button';

export default function App() {
  return (
    <div>
      <div>
        <Button primary outline rounded>But Now</Button>
      </div>
      <div>
        <Button success rounded >Click Me!</Button>
      </div>
      <div>
        <Button danger>You Can</Button>
      </div>
      <div>
        <Button secondary>Broooooo!</Button>
      </div>
      <div>
        <Button warning>WTFF!!</Button>
      </div>
    </div>
  )
};
