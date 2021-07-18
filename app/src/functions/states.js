import { statesArr } from "./statesArr";

const States = () => {
  return statesArr.map((state, index) => {
    return (
      <option key={index} value={state}>
        {state}
      </option>
    );
  });
};

export default States();
