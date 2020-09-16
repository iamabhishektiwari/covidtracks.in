import React from "react";
import Counter from "./Counter";
import Form from "./Form";

import FightBack from "./FightBack";

export default function Home() {
  return (
    <React.Fragment>
      {/* Hero unit */}
      <Form />
      {/* End hero unit */}
      <FightBack />
      <Counter />
    </React.Fragment>
  );
}
