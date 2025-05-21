// SidebarIcons.js
import { FaChartPie } from "react-icons/fa6";
import { FaMessage } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import { MdOutlineWaterDrop } from "react-icons/md";
import { SiMaterialdesignicons } from "react-icons/si";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { FaShoppingBag } from "react-icons/fa";
import { SlQuestion } from "react-icons/sl";
import { LuNotebookPen } from "react-icons/lu";
import { FaLocationArrow } from "react-icons/fa";
import { LuUserRoundPen } from "react-icons/lu";
import { LuMessagesSquare } from "react-icons/lu";
import { MdOutlineEventNote } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import ViewUser from "../DropDownItems/ViewUser";

export const Icons = [
  {
    id: 1,
    icon: <FaChartPie />,
    label: "Dashboard",
    path: "/home",
    
  },
  {
    id: 2,
    icon: <IoPersonSharp />,
    label: "User",
    arrow: <IoIosArrowDown />,
   dropdown: [
      {
        id: 1,
        icon: <LuUserRoundPen />,
        label: "View User",
        path: "/view-user",
      },
    ],
  },
  {
    id: 3,
    icon: <FaMessage />,
    label: "Enquirys",
    arrow: <IoIosArrowDown />,
    dropdown: [
      {
        id: 1,
        icon: <LuMessagesSquare />,
        label: "Contact Enquirys",
        path: "/contact-enquirys",
      },
      {
        id: 2,
        icon: <LuMessagesSquare />,
        label: "Newslatters",
        path: "/newslatters",
      },
]
  },
  {
    id: 4,
    icon: <MdOutlineWaterDrop />,
    label: "Color",
    arrow: <IoIosArrowDown />,
  },
  {
    id: 5,
    icon: <SiMaterialdesignicons />,
    label: "Materials",
    arrow: <IoIosArrowDown />,
  },
  {
    id: 6,
    icon: <AiOutlineAlignLeft />,
    label: "Parent Categorys",
    arrow: <IoIosArrowDown />,
  },
  {
    id: 7,
    icon: <AiOutlineAlignLeft />,
    label: "Sub Categorys",
    arrow: <IoIosArrowDown />,
  },
  {
    id: 8,
    icon: <AiOutlineAlignLeft />,
    label: "Sub sub Categorys",
    arrow: <IoIosArrowDown />,
  },
  {
    id: 9,
    icon: <FaShoppingBag />,
    label: "Products",
    arrow: <IoIosArrowDown />,
  },
  {
    id: 10,
    icon: <SlQuestion />,
    label: "Why Choose Us",
    arrow: <IoIosArrowDown />,
  },
  {
    id: 11,
    icon: <LuNotebookPen />,
    label: "Order",
    arrow: <IoIosArrowDown />,
  },
  {
    id: 12,
    icon: <FaLocationArrow />,
    label: "Country",
    arrow: <IoIosArrowDown />,
  },
  {
    id: 13,
    icon: <LuUserRoundPen />,
    label: "Testimonials",
    arrow: <IoIosArrowDown />,
  },
  {
    id: 14,
    icon: <LuMessagesSquare />,
    label: "Faqs",
    arrow: <IoIosArrowDown />,
  },
  {
    id: 15,
    icon: <MdOutlineEventNote />,
    label: "Terms & Conditions",
    arrow: <IoIosArrowDown />,
  },
];
