import { FC } from "react";
import { useAuth } from "../../context/hooks";
import { mainClient } from "../../utilities/client";
import AppConfig from "../../utilities/config";

// interface RouteComponent {
//     children: ReactNode | ReactNode[],
// }

const getProfile = (WrappedComponent: FC) => {
  // The returned component is now a functional component
  const WithLogger: FC = (props) => {
    const { user, setUser } = useAuth();
    if (!user) {
      mainClient
        .get(AppConfig.API_ENDPOINTS.Auth.ProfileURL, {
          headers: {
            Authorization: "Token " + localStorage.getItem("nodesToken"),
          },
        })
        .then((r) => {
          if (r.status === 200) {
            setUser(r?.data?.result?.user);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    }
    return <WrappedComponent {...props} />;
  };
  return WithLogger;
};

export default getProfile;
