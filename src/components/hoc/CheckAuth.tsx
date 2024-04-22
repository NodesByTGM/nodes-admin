/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/hooks';
import { mainClient } from '../../utilities/client';
import AppConfig from '../../utilities/config';

// interface RouteComponent {
//     children: ReactNode | ReactNode[],
// }

const checkAuth = (WrappedComponent: FC) => {
    // The returned component is now a functional component
    const WithAuthCheck: FC<any> = (props) => {
        const { user, setUser } = useAuth();
        const navigate = useNavigate()
        useEffect(() => {
            const checkAuthentication = async () => {
                try {
                    if (!user) {
                        const response = await mainClient.get(AppConfig.API_ENDPOINTS.Auth.ProfileURL, {
                            headers: { Authorization: 'Token ' + localStorage.getItem("bearerToken") }
                        });
                        if (response.status === 200) {
                            setUser(response?.data?.result?.user);
                        } else {
                            // Redirect to the login page if the authentication fails
                            navigate(AppConfig.PATHS.Auth.Login, { replace: true })
                        }
                    }
                } catch (error) {
                    // Handle error appropriately
                    console.error('Error checking authentication:', error);
                    navigate(AppConfig.PATHS.Auth.Login, { replace: true })
                }
            };

            // Call the authentication check function
            checkAuthentication();
        }, [user, setUser]);

        return <WrappedComponent {...props} />;
    };

    return WithAuthCheck;
};

export default checkAuth;
