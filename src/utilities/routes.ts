import { RouteObject } from "react-router-dom";

import {
  AdminAuthBase,
  AdminLogin,
  AdminSignup,
  AdminForgotPassword,
  AdminResetPassword,
  AdminContent,
  AdminContentBase,
  AdminUser,
  AdminUserBase,
  AdminSubscription,
  AdminSubscriptionBase,
  AdminUserDetails,
  AdminUserDetailsBase,
  AdminAnalytics,
  AdminAnalyticsBase,
  AdminTeamManagement,
  AdminTeamManagementBase,
} from "../pagesAdmin";
import AppConfig from "./config";

export const adminAuthRoutes: RouteObject[] = [
  {
    path: AppConfig.PATHS.Admin.Auth.Base,
    Component: AdminAuthBase,
    children: [
      {
        path: AppConfig.PATHS.Admin.Auth.Default,
        Component: AdminLogin,
      },
      {
        path: AppConfig.PATHS.Admin.Auth.Login,
        Component: AdminLogin,
      },
      {
        path: AppConfig.PATHS.Admin.Auth.Signup,
        Component: AdminSignup,
      },
      {
        path: AppConfig.PATHS.Admin.Auth.ForgotPassword,
        Component: AdminForgotPassword,
      },
      {
        path: AppConfig.PATHS.Admin.Auth.ResetPassword,
        Component: AdminResetPassword,
      },
      {
        path: AppConfig.PATHS.Admin.Auth.ResetPasswordWithParams,
        Component: AdminResetPassword,
      },

      
    ],
  },
];

export const adminMainRoutes: RouteObject[] = [
  {
    path: AppConfig.PATHS.Admin.Content.Base,
    Component: AdminContentBase,
    children: [
      {
        path: AppConfig.PATHS.Admin.Content.Default,
        Component: AdminContent,
      },
    ],
  },
  {
    path: AppConfig.PATHS.Admin.User.Base,
    Component: AdminUserBase,
    children: [
      {
        path: AppConfig.PATHS.Admin.User.Default,
        Component: AdminUser,
      },
    ],
  },
  {
    path: AppConfig.PATHS.Admin.Subscription.Base,
    Component: AdminSubscriptionBase,
    children: [
      {
        path: AppConfig.PATHS.Admin.Subscription.Default,
        Component: AdminSubscription,
      },
    ],
  },
  {
    path: AppConfig.PATHS.Admin.UserDetails.Base,
    Component: AdminUserDetailsBase,
    children: [
      {
        path: AppConfig.PATHS.Admin.UserDetails.Default,
        Component: AdminUserDetails,
      },
    ],
  },

  {
    path: AppConfig.PATHS.Admin.Analytics.Base,
    Component: AdminAnalyticsBase,
    children: [
      {
        path: AppConfig.PATHS.Admin.Analytics.Default,
        Component: AdminAnalytics,
      },
    ],
  },
  {
    path: AppConfig.PATHS.Admin.TeamManagement.Base,
    Component: AdminTeamManagementBase,
    children: [
      {
        path: AppConfig.PATHS.Admin.TeamManagement.Default,
        Component: AdminTeamManagement,
      },
    ],
  },


];
