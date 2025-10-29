import { GoArrowRight, GoShieldCheck } from "react-icons/go";
import { GrGroup } from "react-icons/gr";
import { FiTarget, FiShield, FiSearch } from "react-icons/fi";
import { LuQuote } from "react-icons/lu";
import { LuUserRound } from "react-icons/lu";
import { CiCalendar } from "react-icons/ci";
import { GrSecure } from "react-icons/gr";
import { RiGroupLine } from "react-icons/ri";
import { RxLightningBolt } from "react-icons/rx";
import { IoTimeOutline, IoNotificationsOutline } from "react-icons/io5";
import picture from "../assets/picture.png";
import { TbWorld } from "react-icons/tb";
import { PiMedalLight } from "react-icons/pi";
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
import { LuBuilding2 } from "react-icons/lu";
import { IoMdTrendingUp } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
export const MenuNav = ["Home", "About", "Blog"];

export const FundNum = [
  {
    Number: "90+",
    Details: "Active Startups & business owners",
  },

  {
    Number: "30+",
    Details: "Verified Investors",
  },

  {
    Number: "\u20a6100M+",
    Details: "Total Funding Facilitated",
  },

  {
    Number: "95%",
    Details: "Satisfaction Rate",
  },
];

export const TargetInfo = [
  {
    image: <FiShield />,
    title: "Verified & Secure",
    details:
      "Every user undergoes thorough verification to ensure trust and credibility on our platform.",
  },

  {
    image: <FiTarget />,
    title: "Targeted Matching",
    details:
      "Our intelligent algorithm connects startups with investors whose interests align perfectly.",
  },

  {
    image: <GrGroup />,
    title: "Community Driven",
    details:
      "Join a thriving community of entrepreneurs and investors building the future together.",
  },
];

export const InsightData = [
  {
    image: picture,
    detailsImage: picture,
    title: "for startups",
    details: "How to Attract the Right Investors to your Business",
    descriptions:
      "You've built something special, your own business. But now you want it to...",
    link: "Read More",
    profileIcon: <LuUserRound />,
    profileName: "Yetunde Adeola",
    dateIcon: <CiCalendar />,
    dateName: "October 10, 2025",
    timeIcon: <IoTimeOutline />,
    timeName: "5 min read",
  },

  {
    image: picture,
    title: "for investors",
    details: "How to Identify High Potential Startups Before Everyone Else",
    descriptions:
      "Every investor wants to find the next big thing, that one startup that grows from...",
    link: "Read More",
    profileIcon: <LuUserRound />,
    profileName: "Amara Nnaji",
    dateIcon: <CiCalendar />,
    dateName: "August 25, 2025",
    timeIcon: <IoTimeOutline />,
    timeName: "6 min read",
  },

  {
    image: picture,
    title: "for startups",
    details: "Why Building Relationships Matters More Than Funding image",
    descriptions:
      "Many entrepreneurs believe that securing funding is the ultimate goal. But...",
    link: "Read More",
    profileIcon: <LuUserRound />,
    profileName: "Chioma Nwosu",
    dateIcon: <CiCalendar />,
    dateName: "October 1, 2025",
    timeIcon: <IoTimeOutline />,
    timeName: "4 min read",
  },
  {
    image: picture,
    title: "for investors",
    details: "The Vision Factor: Why Great Investors See Before Others Do",
    descriptions:
      "Vision is what allows investors to see the spark in an idea long before it becom...",
    link: "Read More",
    profileIcon: <LuUserRound />,
    profileName: "Victor Balogun",
    dateIcon: <CiCalendar />,
    dateName: "October 7, 2025",
    timeIcon: <IoTimeOutline />,
    timeName: "8 min read",
  },

  {
    image: picture,
    title: "for startups",
    details: "Ways to Make Your Business More Attractive to Investors",
    descriptions:
      "Investors receive hundreds of proposals, so how do you make yours stand is...",
    link: "Read More",
    profileIcon: <LuUserRound />,
    profileName: "Emmanuel Danjuma",
    dateIcon: <CiCalendar />,
    dateName: "October 5, 2025",
    timeIcon: <IoTimeOutline />,
    timeName: "6 min read",
  },

  {
    image: picture,
    title: "for investors",
    details: "The Power of Early Partnerships in Smart Investing",
    descriptions:
      "In the fast paced world of investing, everyone talks about “timing.” When to en...",
    link: "Read More",
    profileIcon: <LuUserRound />,
    profileName: "Sade Oladipo",
    dateIcon: <CiCalendar />,
    dateName: "October 12, 2025",
    timeIcon: <IoTimeOutline />,
    timeName: "4 min read",
  },
];

export const SmartData = [
  [
    {
      image: <FiSearch />,
      title: "Smart Discovery",
      descriptions:
        "Advanced search and filtering to find the perfect match based on industry, stage, and investment preferences.",
    },

    {
      image: <GoShieldCheck />,
      title: "Verification System",
      descriptions:
        "Comprehensive verification process ensuring all businesses and investors are credible and legitimate.",
    },
  ],

  [
    {
      image: <IoNotificationsOutline />,
      title: "Real-time Notification",
      descriptions:
        "Stay updated with instant notifications about new matches, messages, and investment opportunities.",
    },

    {
      image: <GrSecure />,
      title: "Secure Platform",
      descriptions:
        "Bank-level security to protect sensitive business information and investment data.",
    },
  ],
];

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
      link: "savedbusiness",
    },
    {
      Icon: dollar,
      label: "Funding History",
      link: "fundinghistory",
    },
    {
      Icon: nda,
      label: "NDA Management",
      link: "ndamanagement",
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
      link: "kycverification",
    },
    {
      Icon: help,
      label: "Help & Support",
      link: "helpsuppport",
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
      link: "mybusiness",
    },
    {
      Icon: add,
      label: "Add Business",
      link: "addbusiness",
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
      link: "kycverification",
    },
    {
      Icon: help,
      label: "Help & Support",
      link: "helpsuppport",
    },
  ],
];

export const StoriesData = [
  {
    image: picture,
    name: "Olumide Olaitan",
    descriptions:
      "TRUSTFORGE connected us with investors who truly understood our vision. Within 3 months, we closed our Series A round with partners who share our long-term goals.",
    Icon: <LuQuote />,
    role: "CEO & Founder",
    jobTitle: "TechFlow Solutions",
  },

  {
    image: picture,
    name: "Michael Okafor ",
    descriptions:
      "The verification process gave us confidence that we were dealing with serious investors. TRUSTFORGE's platform made the entire funding journey transparent and efficient.",
    Icon: <LuQuote />,
    role: "Co-Founder",
    jobTitle: "GreenEnergy innovations",
  },

  {
    image: picture,
    name: "Esther Johnson",
    descriptions:
      "As a first-time founder, I was overwhelmed by the fundraising process. TRUSTFORGE provided the tools and connections I needed to successfully raise our seed round.",
    Icon: <LuQuote />,
    role: "Founder",
    jobTitle: "The Johnson Label",
  },
];

export const ValueInfo = [
  {
    image: <FiShield />,
    title: "Trust & Transparency",
    details:
      "We believe that trust is earned through transparency. Every user on our platform undergoes rigorous verification to ensure credibility.",
  },

  {
    image: <FiTarget />,
    title: "Quality over Quantity",
    details:
      "We focus on meaningful connections rather than volume, ensuring every match has genuine potential for success.",
  },

  {
    image: <RiGroupLine />,
    title: "Community First",
    details:
      "We’re building a supportive ecosystem where entreprenuers and investors can learn, grow and succeed together",
  },

  {
    image: <RxLightningBolt />,
    title: "Innovation",
    details:
      "We continuously evolve our platform with cutting edge technology to provide the best experience for our users.",
  },
];

export const TeamInfo = [
  {
    Image: picture,
    name: "Uchechi Ogbonna",
    role: "Product Designer",
    details:
      "“I design intentional digital experiences built on Empathy, guided by UX Research, & shaped by Design Thinking, to solve real problems and create long lasting impact.”",
  },

  {
    Image: picture,
    name: "James Victoria",
    role: "Product Designer",
    details:
      "“I design experiences that build trust, inspire growth, and make every interaction feel effortless.”",
  },

  {
    Image: picture,
    name: "Daniel Paul-Chukwudi",
    role: "Backend Developer",
    details:
      "“I design experiences that build trust, inspire growth, and make every interaction feel effortless.”",
  },

  // {
  //   image: picture,
  //   name: "Ovie Oghenevwede",
  //   role: "Backend Developer",
  //   details:
  //     "“I build and maintain the backend architecture that powers web applications, focusing on scalable, secure, and efficient APIs to ensure seamless performaance and reliable data flow.”",
  // },

  // {
  //   image: picture,
  //   name: "Christobel Nwachukwu",
  //   role: "Frontend Developer",
  //   details:
  //     "“I translate design concepts into responsive web interfaces, working collaboratively with designers and backend developers to provide outstanding user experience.”",
  // },

  // {
  //   image: picture,
  //   name: "Okoye Alfred",
  //   role: "Backend Developer",
  //   details:
  //     "“I'm passionate about building efficient, scalable systems & crafting smooth digital experiences through clean backend logic and reliable Apis.”",
  // },

  // {
  //   image: picture,
  //   name: "Uchechukwu Evans",
  //   role: "Frontend Developer",
  //   details:
  //     "“Fueled by creativity and attention to detail, dedicated to turning design visions into interactive, user-friendly web experiences that blend beauty, performance and functionality.”",
  // },

  // {
  //   image: picture,
  //   name: "Godsfavour Azimadu",
  //   role: "Frontend Developer",
  //   details:
  //     "“I transform design visions into responsive web interfaces, collaborating closely with designers and backend developers to deliver exceptional user experiences.”",
  // },
];

export const MissionInfo = [
  {
    icon: <PiMedalLight />,
    goal: "Our Mission",
    descriptions:
      "To democratize access to funding by creating a transparent, secure, and efficient platform that connect innovative business with th right investors, fostering economic growth and enabling entrepreneurship worldwide.",
  },

  {
    icon: <TbWorld />,
    goal: "Our Vision",
    descriptions:
      "To become the world’s most trusted platform for Startup, investor connections, where every great idea has the opportunity to find its perfect funding partner",
  },
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
export const BusinessPost = [
  {
    icon1: <LuBuilding2 />,
    title: "SupplyChain AI Solutions",
    trendicon: <IoMdTrendingUp />,
    trend: "Trending",
    ai: "AI & ML",
    series: "Series A",
    founded: "Founded 2022",
    about:
      "B2B SaaS platform providing AI-powered supply chain optimisation for manufacturing companies.",
    view: <FaEye />,
    viewNum: 300,
    like: <FaHeart />,
    likeNum: 45,
    comment: <FiMessageSquare />,
    commentNum: 12,
  },
];
