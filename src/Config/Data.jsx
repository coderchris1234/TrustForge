/* eslint-disable no-unused-vars */
import explore from "../../public/material-symbols-light_explore.svg";
import save from "../../public/icon-park-outline_like.svg";
import dollar from "../../public/bx_dollar.svg";
import nda from "../../public/wpf_note.svg";
import notification from "../../public/icon.svg";
import meeting from "../../public/icon.svg";
import sub from "../../public/octicon_person-24.svg";
import verify from "../../public/uil_comment-verify.svg";
import help from "../../public/material-symbols_help-outline.svg";
import overview from "../../public/material-symbols_overview-key-outline.svg";
import light from "../../public/akar-icons_light-bulb.svg";
import add from "../../public/material-symbols_upload-rounded.svg";
import people from "../../public/bi_people.svg";
import eye from "../../public/eye.svg";
import message from "../../public/mdi_message-outline.svg";
import { FaHeart } from "react-icons/fa";

export const InvestorMenu = [
  [
    {
      Icon: explore,
      label: "Explore Business",
      link: "",
    },
    {
      Icon: save,
      label: "Saved Business",
      link: "saved-business",
    },
    {
      Icon: dollar,
      label: "Funding History",
      link: "funding-history",
    },
    {
      Icon: nda,
      label: "NDA Management",
      link: "nda-management",
    },
  ],
  [
    {
      Icon: notification,
      label: "Notification",
      link: "notification",
    },
    {
      Icon: meeting,
      label: "Meetings",
      link: "meeting",
    },
    {
      Icon: sub,
      label: "Subscription",
      link: "subscription",
    },
    {
      Icon: verify,
      label: "KYC Verification",
      link: "kyc-verification",
    },
    {
      Icon: help,
      label: "Help & Support",
      link: "help-suppport",
    },
  ],
];
export const CreatorMenu = [
  [
    {
      Icon: overview,
      label: "Overview",
      link: "",
    },
    {
      Icon: light,
      label: "My Business",
      link: "my-business",
    },
    {
      Icon: add,
      label: "Add Business",
      link: "add-business",
    },
  ],
  [
    {
      Icon: notification,
      label: "Notification",
      link: "notification",
    },
    {
      Icon: meeting,
      label: "Meetings",
      link: "meeting",
    },
    {
      Icon: sub,
      label: "Subscription",
      link: "subscription",
    },
    {
      Icon: verify,
      label: "KYC Verification",
      link: "kyc-verification",
    },
    {
      Icon: help,
      label: "Help & Support",
      link: "help-suppport",
    },
  ],
];

export const overviewBusiness = [
  {
    id: 1,
    title: "Business Profile",
    num: 8,
    icon: light,
    bgColor: "#8ab7f4",
  },

  {
    id: 2,
    title: "Total Views",
    num: 200,
    icon: eye,
    bgColor: "#90ed49",
    color: "#4a9512",
  },

  {
    id: 3,
    title: "Total Likes",
    num: 30,
    icon: save,
    bgColor: "#e35151",
    color: "#b01e1e",
  },

  {
    id: 4,
    title: "Investor Connections",
    num: 8,
    icon: people,
    bgColor: "#e6b5e6",
    color: "#8a38f5",
  },
];

export const RecentBusiness = [
  {
    id: 1,
    title: "Supermarket / Mini Mart",
    label: "Retail",
    isActive: true,
    icon: eye,
    num: 30,
    icon2: save,
    num2: 12,
    icon3: message,
    num3: 6,
    time: "2025 - 10 - 14",
  },
  {
    id: 2,
    title: "Supermarket / Mini Mart",
    label: "Retail",
    isActive: true,
    icon: eye,
    num: 30,
    icon2: save,
    num2: 12,
    icon3: message,
    num3: 6,
    time: "2025 - 10 - 14",
  },
  {
    id: 3,
    title: "Supermarket / Mini Mart",
    label: "Retail",
    isActive: true,
    icon: eye,
    num: 30,
    icon2: save,
    num2: 12,
    icon3: message,
    num3: 6,
    time: "2025 - 10 - 14",
  },
];
