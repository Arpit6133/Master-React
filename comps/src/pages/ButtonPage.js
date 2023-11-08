import React from "react";
import Button from "../components/Button";
import { GoBell, GoCloud, GoDatabase } from "react-icons/go";

export default function ButtonPage() {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <div>
      <div>
        <Button primary outline rounded onClick={handleClick}>
          <GoBell />
          But Now
        </Button>
      </div>
      <div>
        <Button success rounded onMouseEnter={handleClick}>
          <GoCloud />
          Click Me!
        </Button>
      </div>
      <div>
        <Button danger>
          <GoDatabase />
          You Can
        </Button>
      </div>
      <div>
        <Button secondary>Broooooo!</Button>
      </div>
      <div>
        <Button warning>WTFF!!</Button>
      </div>
    </div>
  );
}
