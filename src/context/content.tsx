import { ReactNode, createContext, useMemo, useState } from "react";
import { IContentContext } from "../interfaces/content";
import { useSelector } from "react-redux";
import { RootState } from "../store";
const initialState = {
  pageName: "",
  user: null,
};

export const ContentContext = createContext<IContentContext>(initialState);

const ContentProvider = ({
  children,
}: {
  children: ReactNode | ReactNode[];
}) => {
  const user = useSelector((state: RootState) => state.user.user);
  const [pageName] = useState("Content");
  const contentContextValue = useMemo(
    () => ({
      pageName,
      user,
    }),

    [pageName, user]
  );

  return (
    <ContentContext.Provider value={contentContextValue}>
      {children}
    </ContentContext.Provider>
  );
};

export default ContentProvider;
