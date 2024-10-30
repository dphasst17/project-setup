import { createContext, useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StateContext = createContext<any>({});

export const StateProvider = ({ children }: { children: React.ReactNode }) => {
  const [value1, setValue1] = useState("Value 1");

  return (
    <StateContext.Provider
      value={{
        value1,
        setValue1,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateContext;
