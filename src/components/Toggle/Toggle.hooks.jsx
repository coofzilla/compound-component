import { useContext } from "react";
import { ToggleContext } from "./Toggle";

const objEmpty = (obj) => {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
};

export const useToggle = () => {
  const context = useContext(ToggleContext);

  if (objEmpty(context)) {
    throw new Error("useToggle must be used within a <Toggle/>");
  }
  return context;
};
