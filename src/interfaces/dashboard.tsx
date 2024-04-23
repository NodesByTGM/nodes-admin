/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IDashboardContext {
  pageName: string;
  accountType: string;
  setAccountType: (e) => void;
  user: any;
  currentPlan: string | null;
  setCurrentPlan: (e) => void;
  userIsBusiness: boolean;
  setUserIsBusiness: (e) => void;
  profileData?: any;
  profileIsSuccess?: boolean;
  profileLoading?: boolean;
  profileRefetch?: any;
  jobModal: boolean;
   setJobModal: (e) => void;
   eventModal: boolean;
   setEventModal: (e) => void;
   projectModal: boolean;
   setProjectModal: (e) => void;
   projectDetails: any;
  setProjectDetails: (e) => void;
  projectDetailsModal: boolean;   setProjectDetailsModal: (e) => void;
  editProjectModal: any;
  setEditProjectModal: (e) => void;
  projectAction?: any;
  setProjectAction: (e) => void;
 
}
