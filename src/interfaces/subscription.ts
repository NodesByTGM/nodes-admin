/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ISubscriptionContext {
    pageName: string;
    user: any;
    cancelPlanModal: boolean;
    setCancelPlanModal: (e) => void;
  }