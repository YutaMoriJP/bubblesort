import React from "react";
import Button from "./Button";
import delay from "./util/delay";
import swap from "./util/swap";
import Center from "./styled/Center";
import Text from "./styled/Text";
import { Rotate } from "react-awesome-reveal/";

const reducer = (state, action) => {
  switch (action.type) {
    case "update":
      return !state;
    case "reset":
      return true;
    case "over":
      return "SORTED!";
    default:
      return state;
  }
};

const Sort = () => {
  const [isReset, setIsReset] = React.useState(false);
  const [state, dispatch] = React.useReducer(reducer, true);
  const [status, setStatus] = React.useState("idle");
  let arr = React.useMemo(() => [5, 4, 3, 2, 1], [isReset]);

  const handleClick = async () => {
    setStatus("pending");
    let notSorted = true;
    while (notSorted) {
      notSorted = false;
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          swap(arr, i, i + 1);
          dispatch({ type: "update" });
          await delay();
          notSorted = true;
        }
      }
    }
    dispatch({ type: "over" });
    setStatus("resolved");
    return;
  };
  const reset = () => {
    arr = [5, 4, 3, 2, 1];
    setIsReset(prev => !prev);
    dispatch({ type: "reset" });
  };
  return (
    <Center>
      <Text>{JSON.stringify(arr)}</Text>
      <Button
        onClick={typeof state === "boolean" ? handleClick : reset}
        disabled={status === "pending"}
      >
        {status === "pending"
          ? "Sorting..."
          : typeof state === "boolean"
          ? "Start Sorting"
          : "Reset"}
      </Button>
      {typeof state === "string" && (
        <Rotate>
          <h1>Sorted!</h1>
        </Rotate>
      )}
    </Center>
  );
};
export default Sort;
