import { ReactNode, createContext, useMemo, useState } from "react";
import { ISettingsContext } from "../interfaces/settings";
import { useSelector } from "react-redux";
import { RootState } from "../store";
const initialState = {
  pageName: "",
  user: null,
};

export const SettingsContext = createContext<ISettingsContext>(initialState);

const SettingsProvider = ({
  children,
}: {
  children: ReactNode | ReactNode[];
}) => {
  const user = useSelector((state: RootState) => state.user.user);
  const [pageName] = useState("Settings");
  const settingsContextValue = useMemo(
    () => ({
      pageName,
      user,
    }),

    [pageName, user]
  );

  return (
    <SettingsContext.Provider value={settingsContextValue}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
