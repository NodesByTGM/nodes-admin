import { ReactNode, createContext, useMemo, useState } from "react";
import { IUsersContext } from "../interfaces/users";
import { useSelector } from "react-redux";
import { RootState } from "../store";
const initialState = {
  pageName: "",
  user: null,
};

export const UsersContext = createContext<IUsersContext>(initialState);

const UsersProvider = ({ children }: { children: ReactNode | ReactNode[] }) => {
  const user = useSelector((state: RootState) => state.user.user);
  const [pageName] = useState("Dashboard");
  const usersContextValue = useMemo(
    () => ({
      pageName,
      user,
    }),

    [pageName, user]
  );

  return (
    <UsersContext.Provider value={usersContextValue}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
