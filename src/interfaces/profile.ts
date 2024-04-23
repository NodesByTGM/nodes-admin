/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IProfileContext {
  profileType: string;
  setProfileType: (e) => void;
  hasProject: boolean;
  setHasProject: (e) => void;
  jobModal: boolean;
  setJobModal: (e) => void;
  projectDetailsModal: boolean;
  setProjectDetailsModal: (e) => void;
  projectDetails: any;
  setProjectDetails: (e) => void;
  editProjectModal: any;
  setEditProjectModal: (e) => void;
  profileData?: any;
  profileIsSuccess?: boolean;
  profileLoading?: boolean;
  profileRefetch?: any;
  projectAction?: any;
  setProjectAction: (e) => void;
  user: any;

}

/* eslint-disable @typescript-eslint/no-explicit-any */
