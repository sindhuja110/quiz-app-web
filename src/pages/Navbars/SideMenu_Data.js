
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { PiUserListBold } from "react-icons/pi";
import { FaTrainSubway } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";
import { MdOutlineWorkHistory } from "react-icons/md";
import { MdFeedback } from "react-icons/md";
import { GiRailway } from "react-icons/gi";
import { BiMoneyWithdraw } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineIssuesClose } from "react-icons/ai";
import { HiMiniUserGroup } from "react-icons/hi2";
import { MdPerson } from "react-icons/md";
import { IoPersonCircleSharp } from "react-icons/io5";
import { FaRegNewspaper } from "react-icons/fa";
import { PiTrainRegionalFill } from "react-icons/pi";
import { FaTrainTram } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";
import { FaGift } from "react-icons/fa6";
import { MdWorkspacePremium } from "react-icons/md";



export const sidebarItems = [
  {
    "id": 1,
    "label": " Dashboard",
    "className":"nav-option",
    "parent_id": null,
    "icon":<MdOutlineAdminPanelSettings size={20} />,
    "order_index": 1,
    "url": "/admin/dashboard"
  },{
    "id": 2,
    "label": "User List",
    "classname":"nav-option",
    "parent_id": null,

    "icon":<PiUserListBold size={20}/>,
    "order_index": 2,
    "url": "/admin/user-list",
  },
 
  
  
  
 
  
  
  {
    "id": 9,
    "classname":"nav-option",
    "label": "Withdraw request",
    "parent_id": null,
    "icon":<BiMoneyWithdraw size={20}/>,
    "order_index": 6,
    "url": "/admin/withdraw-request",
  },
  {
    "id": 10,
    "classname":"nav-option",
    "label": "Transaction history",
    "parent_id": null,
    "icon":<MdOutlineWorkHistory  size={20}/>,
    "order_index": 7,
    "url": "/admin/transaction-history",
  },
  {
    "id": 11,
    "classname":"nav-option",
    "label": "FeedBack",
    "parent_id": null,
    "icon":<MdFeedback   size={20}/>,
    "order_index": 8,
    "url": "/admin/feedback",
  },
  {
    "id": 12,
    "classname":"nav-option",
    "label": "Issues",
    "parent_id": null,
    "icon":<AiOutlineIssuesClose   size={20}/>,
    "order_index": 8,
    "url": "/admin/issue",
  },
  {
    "id": 13,
    "classname":"nav-option",
    "label": "Ratings",
    "parent_id": null,
    "icon":<IoIosStar   size={20}/>,
    "order_index": 8,
    "url": "/admin/ratings",
  },
  {
    "id": 14,
    "classname":"nav-option",
    "label": "Ticket",
    "parent_id": null,
    "icon":<FaRegNewspaper   size={20}/>,
    "order_index": 8,
    "url": "/admin/news",
  },
 
  {
    "id": 9,
    "label": "Question Update",
    "classname":"nav-option",
    "parent_id": null,
    "icon":<BiMoneyWithdraw size={20}/>,
    "order_index": 6,
    "url": "/admin/withdraw-request",
  },
  {
    "id": 9,
    "label": "Main test Attened",
    "classname":"nav-option",
    "parent_id": null,
    "icon":<BiMoneyWithdraw size={20}/>,
    "order_index": 6,
    "url": "/admin/withdraw-request",
  },
  {
    "id": 9,
    "label": "Test Winner",
    "classname":"nav-option",
    "parent_id": null,
    "icon":<BiMoneyWithdraw size={20}/>,
    "order_index": 6,
    "url": "/admin/withdraw-request",
  },
  {
    "id": 9,
    "label": "Today test Attened",
    "classname":"nav-option",
    "parent_id": null,
    "icon":<BiMoneyWithdraw size={20}/>,
    "order_index": 6,
    "url": "/admin/withdraw-request",
  },
  {
    "id": 16,
    "label": "Notification",
    "parent_id": null,
    "icon": <IoMdNotifications size={20}  />,
    "order_index": 5,
    "url": "/",
    "style": { color: 'white' },
    "children": [
      {
        "id": 1,
        "label": "General",
        "parent_id": null,
        "icon": <IoPersonCircleSharp size={20}/>,
        "order_index":1,
        "url": "/admin/general"
      },
      {
        "id": 2,
        "label": "Individual",
        "parent_id": null,
        "icon":<MdPerson size={20}/>,
        "order_index": 2,
        "url": "/admin/individual"
      }
      ,
      {
        "id": 3,
        "label": "Group",
        "parent_id": null,
        "icon":<HiMiniUserGroup size={20}/>,
        "order_index": 3,
        "url": "/admin/group-notification"
      }
    ]
  }, 
];
