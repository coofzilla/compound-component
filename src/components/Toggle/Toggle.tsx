import { useState, createContext } from "react";

interface ToggleProps {
  children?: React.ReactNode;
}

interface ContextProps {
  isOpen?: boolean;
  toggle?: () => void;
}

export const ToggleContext = createContext<ContextProps>({});
ToggleContext.displayName = "ToggleContext";

const Toggle = ({ children }: ToggleProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <ToggleContext.Provider value={{ isOpen, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
};

Toggle.Accordion = Toggle;
export default Toggle;
