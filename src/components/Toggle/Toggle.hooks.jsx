import { useContext } from "react";
import { ToggleContext } from "./Toggle";

export const useToggle = () => {
  const context = useContext(ToggleContext);

  // if (context === undefined) {
  //   throw new Error("useToggle must be used within a <Toggle/>");
  // }
  return context;
};
