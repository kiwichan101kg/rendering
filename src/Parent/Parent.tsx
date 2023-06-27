import { useState } from "react";

export function Parent() {
  const [state, setState] = useState(1);
  return (
    <>
      <button onClick={() => setState((prev) => prev + 1)}>Pearent</button>
      <p>Parent:{state}</p>
      {/**① 固定で1を渡す */}
      <Child parentState={1} />
      {/**② stateを渡す */}
      <Child parentState={state} />
    </>
  );
}

type ChildProps = {
  state: number;
};

function Child(props: { parentState: number }) {
  const [state, setState] = useState(1);
  return (
    <>
      <button onClick={() => setState((prev) => prev + 1)}>Child</button>
      <p>Parent:{props.parentState}</p>
      <p>Child: {state}</p>
    </>
  );
}
