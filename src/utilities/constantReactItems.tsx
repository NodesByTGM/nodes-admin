import React from "react";
import {
  Box,
  Briefcase,
  Globe,
  Home,
  User,
  Bookmark,
  Circle,
  Star,
} from "react-feather";
import AppConfig from "../utilities/config";

export const standardPaths = [
  { name: "Dashboard", icon: <Home />, path: AppConfig.PATHS.Dashboard.Base },
  {
    name: "Profile",
    icon: <User />,
    path: AppConfig.PATHS.Dashboard.Profile.Base,
  },
  { name: "Discover", icon: <Globe />, path: AppConfig.PATHS.Community.Base },

  {
    name: "For Business",
    icon: <Briefcase />,
    path: AppConfig.PATHS.Business.Base,
    showChild: false,
    children: [
      {
        name: "Dashboard",
        icon: <Briefcase />,
        path: AppConfig.PATHS.Business.Dashboard,
      },
      // {
      //   name: "Profile",
      //   icon: <Briefcase />,
      //   path: AppConfig.PATHS.Business.Profile,
      // },
    ],
  },

  {
    name: "Upgrade Plan",
    icon: <Box />,
    path: AppConfig.PATHS.Subscription.Base,
  },
  {
    name: "Grid Tools",
    icon: <Circle />,
    path: AppConfig.PATHS.GridTools,
  },
];
export const proPaths = [
  { name: "Dashboard", icon: <Home />, path: AppConfig.PATHS.Dashboard.Base },
  {
    name: "Profile",
    icon: <User />,
    path: AppConfig.PATHS.Dashboard.Profile.Base,
  },
  { name: "Discover", icon: <Globe />, path: AppConfig.PATHS.Community.Base },
  { name: "Saved", icon: <Bookmark />, path: AppConfig.PATHS.Saved.Base },

  {
    name: "For Business",
    icon: <Briefcase />,
    path: AppConfig.PATHS.Business.Base,
    showChild: false,
    children: [
      {
        name: "Dashboard",
        icon: <Briefcase />,
        path: AppConfig.PATHS.Business.Dashboard,
      },
      {
        name: "Profile",
        icon: <Briefcase />,
        path: AppConfig.PATHS.Business.Profile,
      },
    ],
  },

  {
    name: "Subscriptions",
    icon: <Box />,
    path: AppConfig.PATHS.Subscription.Base,
  },
  {
    name: "Grid Tools",
    icon: <Circle />,
    path: AppConfig.PATHS.GridTools,
  },
  {
    name: "Trending",
    icon: <Star />,
    path: AppConfig.PATHS.Trending.Base,
  },
];
export const businessPaths = [
  { name: "Dashboard", icon: <Home />, path: AppConfig.PATHS.Dashboard.Base },
  {
    name: "Profile",
    icon: <User />,
    path: AppConfig.PATHS.Dashboard.Profile.Base,
  },
  { name: "Discover", icon: <Globe />, path: AppConfig.PATHS.Community.Base },
  { name: "Saved", icon: <Bookmark />, path: AppConfig.PATHS.Saved.Base },

  {
    name: "For Business",
    icon: <Briefcase />,
    path: AppConfig.PATHS.Business.Base,
    showChild: false,
    children: [
      {
        name: "Dashboard",
        icon: <Briefcase />,
        path: AppConfig.PATHS.Business.Dashboard,
      },
      {
        name: "Profile",
        icon: <Briefcase />,
        path: AppConfig.PATHS.Business.Profile,
      },
    ],
  },

  {
    name: "Subscriptions",
    icon: <Box />,
    path: AppConfig.PATHS.Subscription.Base,
  },
  {
    name: "Grid Tools",
    icon: <Circle />,
    path: AppConfig.PATHS.GridTools,
  },
  {
    name: "Trending",
    icon: <Star />,
    path: AppConfig.PATHS.Trending.Base,
  },
];
