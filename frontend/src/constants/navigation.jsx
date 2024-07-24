
import { FaHome } from "react-icons/fa";
import { PiTelevisionFill } from "react-icons/pi";
import { BiSolidMoviePlay } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
export const navigation = [
    {
        label: "TV Show",
        href: "/tv",
        icon:<PiTelevisionFill />,
    },
    {
        label: "Movies",
        href: "/movie",
        icon:<BiSolidMoviePlay />,
    }
];

export const mobileNavigation=[
   {
    label:"home",
    href:"/",
    icon:<FaHome />,
   },
   ...navigation,
   {
    label: "search",
    href:"/search",
    icon:<FaSearch/>
   }

]
