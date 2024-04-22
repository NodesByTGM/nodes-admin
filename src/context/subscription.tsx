import { ReactNode, createContext, useMemo, useState } from "react";
import { ISubscriptionContext } from "../interfaces/subscription";
import { useSelector } from "react-redux";
import { RootState } from "../store";
const initialState = {
  pageName: "",
  user: null,
  cancelPlanModal: false,
  setCancelPlanModal: () => {},
};

export const SubscriptionContext = createContext<ISubscriptionContext>(initialState);

const SubscriptionProvider = ({
  children,
}: {
  children: ReactNode | ReactNode[];
}) => {
  const user = useSelector((state: RootState) => state.user.user);
  const [cancelPlanModal, setCancelPlanModal] = useState(false);

  const [pageName] = useState("Subscription");
  const subscriptionContextValue = useMemo(
    () => ({
      pageName,
      user,
      cancelPlanModal,
      setCancelPlanModal,
    }),

    [pageName, user, cancelPlanModal, setCancelPlanModal]
  );

  return (
    <SubscriptionContext.Provider value={subscriptionContextValue}>
      {children}
    </SubscriptionContext.Provider>
  );
};

export default SubscriptionProvider;
