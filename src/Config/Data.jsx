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
import picture from "../assets/picture.png";
import picture1 from "../assets/picture1.png";
import picture2 from "../assets/picture2.png";
import picture4 from "../assets/picture4.png";
import picture5 from "../assets/picture5.png";
import picture6 from "../assets/picture6.png";

import Olu from "../assets/Olu.jpg";
import Michael from "../assets/Michael.jpg";
import Esther from "../assets/Esther.jpg";
import Uchechi from "../assets/Uchechi.jpg";
import Daniel from "../assets/Daniel.jpg";
import Victoria from "../assets/Victoria.png";

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
    category: "For Business",
    title: "for startups",
    heading: "How to Attract the Right Investors to your Business",
    descriptions:
      "You've built something special, your own business. But now you want it to...",
    link: "Read More",
    profileIcon: <LuUserRound />,
    profileName: "Yetunde Adeola",
    dateIcon: <CiCalendar />,
    dateName: "October 10, 2025",
    timeIcon: <IoTimeOutline />,
    timeName: "5 min read",
    introduction:
      "You’ve built something special, your own business. But now you want it to grow, and that means finding people who believe in your dream. The right investor can help your business reach the next level. But not every investor is the right fit. Here’s how to attract the one who truly understands your vision.",
    descriptionDetails: [
      {
        titles: "1. Tell a Clear Story",
        info: "People love stories. Before investors care about your numbers, they want to know why you started. Talk about what inspired your business and what problem you’re solving. Keep it simple and real,  not complicated. Instead of saying, “We sell skincare products,” try:  “We’re helping African women access affordable, high-quality skincare made for their skin types.” That’s a story investors remember.",
      },
      {
        titles: "2. Show  Real Progress",
        info: "Investors want to see that your idea works. Share your numbers, how many customers you have, how your sales are growing, or what feedback you’ve gotten.",
      },
      {
        titles: "3. Know the Kind of Investor You Want",
        info: "There are different types of investors: angel investors, venture capitalists, crowdfunding supporters, and even impact investors. Each one looks for something specific.",
      },
      {
        titles: "4. Be Honest and Open",
        info: "No business is perfect. Don’t hide your challenges, be honest about them. Investors prefer honesty over perfection. When they see that you’re transparent, they’re more likely to trust you.",
      },
    ],

    bottomText: [
      "Investors want more than numbers, they want connection.Share your story, show real growth, and stay true to your values. The right investor will see your passion and want to join your journey.",
      "Join TrusForge today and meet investors who believe in your vision.",
    ],
  },

  {
    image: picture1,
    category: "For Investors",
    title: "for investors",
    heading: "How to Identify High Potential Startups Before Everyone Else",
    descriptions:
      "Every investor wants to find the next big thing, that one startup that grows from...",
    link: "Read More",
    profileIcon: <LuUserRound />,
    profileName: "Amara Nnaji",
    dateIcon: <CiCalendar />,
    dateName: "August 25, 2025",
    timeIcon: <IoTimeOutline />,
    timeName: "6 min read",
    introduction:
      "Every investor wants to find the next big thing, that one startup that grows from an idea into a movement. But spotting that potential early requires more than luck. It takes observation, curiosity, and a good understanding of what truly drives long term success.",
    descriptionDetails: [
      {
        titles: "Look Beyond the Pitch Deck",
        info: "A beautiful pitch deck doesn’t equal a strong business. The best startups often start simple, but with founders who are deeply passionate and focused. Look for authenticity, resilience, and a clear understanding of the problem they’re solving.",
      },
      {
        titles: "Back Teams, Not Just Ideas",
        info: "An idea can evolve, but a great team adapts and survives. Pay attention to the chemistry, drive, and vision of the people behind the business. A strong team can pivot when needed, and that flexibility is the secret ingredient behind most successful startups.",
      },
    ],
    bottomText: [
      "Finding high-potential startups isn’t about guessing; it’s about recognizing the right combination of passion, execution, and resilience. When you invest in founders who embody these traits, you’re not just funding a business, you’re shaping the future.",
    ],
  },

  {
    image: picture2,
    category: "For Business",
    title: "for startups",
    heading: "Why Building Relationships Matters More Than Funding image",
    descriptions:
      "Many entrepreneurs believe that securing funding is the ultimate goal. But...",
    link: "Read More",
    profileIcon: <LuUserRound />,
    profileName: "Chioma Nwosu",
    dateIcon: <CiCalendar />,
    dateName: "October 1, 2025",
    timeIcon: <IoTimeOutline />,
    timeName: "4 min read",
    introduction:
      "Many entrepreneurs believe that securing funding is the ultimate goal. But while money can help you start, it’s relationships that help you last. Funding may build your product, but relationships build your foundation and in business, that foundation is everything.",
    descriptionDetails: [
      {
        titles: "Funding Gives You a Start, Relationships Keep You Going",
        info: "Money can accelerate growth, but it doesn’t guarantee success. Countless startups have raised funds and still failed because they lacked the right guidance, partnerships, and community. Relationships provide those things — wisdom, access, and long-term support that money can’t buy.",
      },
      {
        titles: "Investors Invest in People, Not Just Ideas",
        info: "Investors want to see that your idea works. Share your numbers, how many customers you have, how your sales are growing, or what feedback you’ve gotten.",
      },
      {
        titles: "Collaboration Over Competition",
        info: "Strong relationships also lead to partnerships, not rivalry. When founders collaborate with others in their industry, they unlock new opportunities, shared growth, and mutual success. In today’s world, collaboration is the new competitive edge.",
      },
    ],
    bottomText: [
      "Build meaningful connections today. Join TrustForge and connect with the right investors and partners who believe in your vision.",
    ],
  },
  {
    image: picture4,
    category: "For Investors",
    title: "for investors",
    heading: "The Vision Factor: Why Great Investors See Before Others Do",
    descriptions:
      "Vision is what allows investors to see the spark in an idea long before it becom...",
    link: "Read More",
    profileIcon: <LuUserRound />,
    profileName: "Victor Balogun",
    dateIcon: <CiCalendar />,
    dateName: "October 7, 2025",
    timeIcon: <IoTimeOutline />,
    timeName: "8 min read",
    introduction:
      " Vision is what allows investors to see the spark in an idea long before it becomes a flame. It’s not about luck or timing, it’s about clarity the ability to look beyond the obvious and recognize potential where others see risk.",
    descriptionDetails: [
      {
        titles: "Beyond the Numbers, The True Skill of Investing",
        info: "In today’s fast paced investment world, data is everywhere. Everyone has access to analytics, performance metrics, and market trends. Yet, only a few investors consistently identify the next big breakthrough not because they have more information, but because they see differently.",
      },
      {
        titles: "The Power of Early Belief",
        info: "Every major success story began as a fragile idea, one that seemed unrealistic to most. From garage startups to global disruptors, the earliest investors weren’t merely buyers of equity, they were believers in vision.These investors understood something vital, belief compounds faster than capital. A founder’s confidence is contagious, but it needs to be met with faith someone who sees the future before it takes form.",
      },
      {
        titles: "Vision Is the New Currency",
        info: "In a noisy world where everyone is chasing the next big thing, vision remains timeless. It’s not something you can buy, measure, or automate. it’s cultivated through experience, empathy, and curiosity. Investors who master the art of seeing before others do are not just funding businesses; they are shaping the future. They understand that wealth is built not just in numbers, but in insight the kind that sees tomorrow’s success hiding inside today’s uncertainty. Because the difference between good investors and great ones isn’t in how much they invest, it’s in how deeply they believe.",
      },
    ],
    bottomText: [
      "Step into the future, where belief becomes return. Start investing.",
    ],
  },

  {
    image: picture5,
    category: "For Business",
    title: "for startups",
    heading: "Ways to Make Your Business More Attractive to Investors",
    descriptions:
      "Investors receive hundreds of proposals, so how do you make yours stand is...",
    link: "Read More",
    profileIcon: <LuUserRound />,
    profileName: "Emmanuel Danjuma",
    dateIcon: <CiCalendar />,
    dateName: "October 5, 2025",
    timeIcon: <IoTimeOutline />,
    timeName: "6 min read",
    introduction:
      "Investors receive hundreds of proposals, so how do you make yours stand out? The secret isn’t just having a great idea, it’s about presenting your business the right way.",
    descriptionDetails: [
      {
        titles: "1. Have a Clear Problem and Solution ",
        info: "Investors back clarity. Clearly define the problem you’re solving and how your business provides a unique, scalable solution.",
      },
      {
        titles: "2. Show Traction, Even the Small Wins Matter",
        info: "Investors are not just buying into your idea, they are buying into your progress. They want to see proof that your business has potential, and you can show that in many ways, even before you make your first big sale.",
      },
      {
        titles: "3.  Know Your Numbers",
        info: "One of the biggest turnoffs for any investor is a founder who doesn’t know their numbers. When you step into a meeting, you should be able to confidently discuss your costs, your revenue model, and your growth projections. Investors aren’t expecting perfection, but they expect you to understand your financial foundation.",
      },
      {
        titles: "4. Highlight Your Team",
        info: "Even the best ideas can fail in the wrong hands, and investors know it. That’s why they often say they invest in people first, not products. A capable, committed, and adaptable team can take a good idea and turn it into a great company.",
      },
      {
        titles: "5. Be Story Driven",
        info: "Facts tell, but stories sell. Craft a compelling business story that shows passion, purpose, and potential.",
      },
    ],
    bottomText: [
      "Investors want more than numbers, they want connection.Share your story, show real growth, and stay true to your values. The right investor will see your passion and want to join your journey.",
      "Build your story. Find your investor.",
    ],
  },

  {
    image: picture6,
    category: "For Investors",
    title: "for investors",
    heading: "The Power of Early Partnerships in Smart Investing",
    descriptions:
      "In the fast paced world of investing, everyone talks about “timing.” When to en...",
    link: "Read More",
    profileIcon: <LuUserRound />,
    profileName: "Sade Oladipo",
    dateIcon: <CiCalendar />,
    dateName: "October 12, 2025",
    timeIcon: <IoTimeOutline />,
    timeName: "4 min read",
    introduction:
      "In the fast paced world of investing, everyone talks about “timing.” When to enter. When to exit. When to double down.But the truth is, timing means nothing without connection  because access to the right opportunities only comes through the right relationships.",

    introduction2:
      "The investors who consistently win are not always the ones with the biggest capital  they’re the ones with the strongest partnerships. The ones who invest early not only in ideas but in people.",
    descriptionDetails: [
      {
        titles: "Why Early Partnerships Matter",
        info: "Behind every breakout startup story, there’s always one thing in common  an early believer.Someone who saw potential before numbers, who trusted the founder before the headlines came. Early partnerships are powerful because they’re built on belief, not metrics. When you invest early, you’re not just funding an idea, you’re helping shape it.You get a front row seat in the decision making process, the brand identity, and the product journey. You become part of the DNA of that company.",
      },
      {
        titles: "Long Term Wins Over Short Term Gains",
        info: "Early partnerships create a different kind of success story.Instead of flipping startups for quick exits, investors who commit early often enjoy deeper influence, higher equity, and longer term profitability. When founders feel supported, they build with loyalty. And loyal founders don’t forget their early backers. They bring them into new projects, new markets, and even new industries. The investors who truly win are the ones who stay long enough to see an idea grow into an ecosystem",
      },
    ],
    bottomText: [
      "Early partnerships are not about being first they’re about being faithful.They’re about showing up when it’s uncertain, believing when it’s still small, and helping shape something that lasts.",
      "Connect with visionaries. Build with believers. Invest where trust and opportunity grow together.",
    ],
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
    image: Olu,
    name: "Olumide Olaitan",
    descriptions:
      "TRUSTFORGE connected us with investors who truly understood our vision. Within 3 months, we closed our Series A round with partners who share our long-term goals.",
    Icon: <LuQuote />,
    role: "CEO & Founder",
    jobTitle: "TechFlow Solutions",
  },

  {
    image: Michael,
    name: "Michael Okafor ",
    descriptions:
      "The verification process gave us confidence that we were dealing with serious investors. TRUSTFORGE's platform made the entire funding journey transparent and efficient.",
    Icon: <LuQuote />,
    role: "Co-Founder",
    jobTitle: "GreenEnergy innovations",
  },

  {
    image: Esther,
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
    Image: Uchechi,
    name: "Uchechi Ogbonna",
    role: "Product Designer",
    details:
      "“I design intentional digital experiences built on Empathy, guided by UX Research, & shaped by Design Thinking, to solve real problems and create long lasting impact.”",
  },

  {
    Image: Victoria,
    name: "James Victoria",
    role: "Product Designer",
    details:
      "“I design experiences that build trust, inspire growth, and make every interaction feel effortless.”",
  },

  {
    Image: Daniel,
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

export const Business = [
  {
    id: 1,
    title: "Supermarket / Mini Mart",
    category: "Retail",
    status: "Active",
    stage: "Seed",
    description: "Neighborhood store selling groceries and daily essentials.",
    views: 30,
    likes: 12,
    messages: 6,
    postedDate: "2025-10-14",
  },
  {
    id: 2,
    title: "Supermarket / Mini Mart",
    category: "Retail",
    status: "Active",
    stage: "Seed",
    description: "Neighborhood store selling groceries and daily essentials.",
    views: 30,
    likes: 12,
    messages: 6,
    postedDate: "2025-10-14",
  },
  {
    id: 3,
    title: "Supermarket / Mini Mart",
    category: "Retail",
    status: "Active",
    stage: "Seed",
    description: "Neighborhood store selling groceries and daily essentials.",
    views: 30,
    likes: 12,
    messages: 6,
    postedDate: "2025-10-14",
  },
  {
    id: 4,
    title: "Supermarket / Mini Mart",
    category: "Retail",
    status: "Active",
    stage: "Seed",
    description: "Neighborhood store selling groceries and daily essentials.",
    views: 30,
    likes: 12,
    messages: 6,
    postedDate: "2025-10-14",
  },
  {
    id: 5,
    title: "Supermarket / Mini Mart",
    category: "Retail",
    status: "Active",
    stage: "Seed",
    description: "Neighborhood store selling groceries and daily essentials.",
    views: 30,
    likes: 12,
    messages: 6,
    postedDate: "2025-10-14",
  },
  {
    id: 6,
    title: "Supermarket / Mini Mart",
    category: "Retail",
    status: "Active",
    stage: "Seed",
    description: "Neighborhood store selling groceries and daily essentials.",
    views: 30,
    likes: 12,
    messages: 6,
    postedDate: "2025-10-14",
  },
  {
    id: 7,
    title: "Supermarket / Mini Mart",
    category: "Retail",
    status: "Active",
    stage: "Seed",
    description: "Neighborhood store selling groceries and daily essentials.",
    views: 30,
    likes: 12,
    messages: 6,
    postedDate: "2025-10-14",
  },
  {
    id: 8,
    title: "Supermarket / Mini Mart",
    category: "Retail",
    status: "Active",
    stage: "Seed",
    description: "Neighborhood store selling groceries and daily essentials.",
    views: 30,
    likes: 12,
    messages: 6,
    postedDate: "2025-10-14",
  },
];
