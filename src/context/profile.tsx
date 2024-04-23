import {
  ReactNode,
  createContext,
  useMemo,
  useState,
  useEffect,
  useCallback,
} from "react";
import { IProfileContext } from "../interfaces/profile";
import { useGetUserProfileQuery } from "../api";
import { projectModalTypes } from "../utilities";

// import {
//   // FormikHelpers,
//    useFormik } from "formik";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { GetToken } from "../utilities/getToken";
const initialState = {
  profileType: "individual",
  setProfileType: () => {},
  hasProject: false,
  setHasProject: () => {},
  projectDetailsModal: false,
  setProjectDetailsModal: () => {},
  jobModal: false,
  setJobModal: () => {},
  projectDetails: null,
  setProjectDetails: () => {},
  editProjectModal: false,
  setEditProjectModal: () => {},
  profileData: null,
  profileIsSuccess: false,
  profileLoading: false,
  profileRefetch: () => {},
  projectAction: "add",
  setProjectAction: () => {},
  user: null,
};

export const ProfileContext = createContext<IProfileContext>(initialState);

const ProfileProvider = ({
  children,
}: {
  children: ReactNode | ReactNode[];
}) => {
  const {
    data: profileData,
    refetch: profileRefetch,
    isSuccess: profileIsSuccess,
    isFetching: profileLoading,
  } = useGetUserProfileQuery();

  const user = useSelector((state: RootState) => state.user.user);
  const [profileType, setProfileType] = useState("");
  const [hasProject, setHasProject] = useState(false);
  const [projectDetailsModal, setProjectDetailsModal] = useState(false);
  const [editProjectModal, setEditProjectModal] = useState(false);
  const [jobModal, setJobModal] = useState(false);

  const [projectAction, setProjectAction] = useState(projectModalTypes.add);

  const [projectDetails, setProjectDetails] = useState(null);

  const profileContextValue = useMemo(
    () => ({
      profileType,
      setProfileType,
      hasProject,
      setHasProject,
      projectDetailsModal,
      setProjectDetailsModal,
      jobModal,
      setJobModal,
      projectDetails,
      setProjectDetails,
      editProjectModal,
      setEditProjectModal,
      profileData,
      profileIsSuccess,
      profileLoading,
      profileRefetch,
      projectAction,
      setProjectAction,
      user,
    }),

    [
      profileType,
      setProfileType,
      hasProject,
      setHasProject,
      projectDetailsModal,
      setProjectDetailsModal,
      jobModal,
      setJobModal,
      projectDetails,
      setProjectDetails,
      editProjectModal,
      setEditProjectModal,
      profileData,
      profileIsSuccess,
      profileLoading,
      profileRefetch,
      projectAction,
      setProjectAction,
      user,
    ]
  );

  const handleAccountType = useCallback(() => {
    const plan = user?.subscription?.plan?.toLowerCase();
    if (plan !== "pro" && plan !== "business") {
      setProfileType("individual");
    }
    if (plan === "pro" || plan === 'business') {
      setProfileType("talent");
    }
    // if (plan === "business") {
    //   setProfileType("business");
    // }
  }, [user]);

  useEffect(() => {
    handleAccountType();
  }, [user, handleAccountType]);

  return (
    <ProfileContext.Provider value={profileContextValue}>
      <div className="hidden">
        <pre>{"Data:" + JSON.stringify(profileData?.result, null, 2)}</pre>
      </div>
      <div className="hidden">
        <pre className="Test-primary">
          Token: {GetToken()}
          Stuff: {JSON.stringify(user, null, 2)}
        </pre>
      </div>
      <div className="flex gap-2 mb-4 hidden">
        <button
          onClick={() => setProfileType("individual")}
          className="px-4 py-2 rounded-md bg-customsecondary text-white"
        >
          Switch to Individual
        </button>
        <button
          onClick={() => setProfileType("talent")}
          className="px-4 py-2 rounded-md bg-customsecondary text-white"
        >
          Switch to Talent
        </button>
        <button
          onClick={() => setProfileType("business")}
          className="px-4 py-2 rounded-md bg-customsecondary text-white"
        >
          Switch to Business
        </button>

        <span className="text-blue-500 text-base">{profileType}</span>
      </div>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
