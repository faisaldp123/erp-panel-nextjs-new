import { AccountBalance, AddToPhotos, Airplay, Book, BookOnlineOutlined, BookSharp, CalendarMonth, CalendarViewMonthRounded, CardTravel, Dashboard, DescriptionOutlined, GolfCourse, Home, MenuBook, NewspaperSharp, Person, PersonSearch, ReceiptLong, VerifiedUser} from '@mui/icons-material';
import { Card } from '@mui/material';


export const adminLinks = [
    {
        label: "Dashboard",
        icon: <Dashboard/>,
        url: "/dashboard"
    },
    // 
    {
        label: "Students",
        icon: <PersonSearch/>,
        url: "/students"
    },
    {
        label: "Courses",
        icon: <MenuBook/>,
        url: "/courses"
    },
    {
            label: "Profile",
            icon: <PersonSearch/>,
            url: "/profile/list"
        },
        // {
        //     label: "Transaction",
        //     icon: <AccountBalance/>,
        //     url: "/transaction"
        // },
]

export const superAdminLinks = [
    {
        label: "Home",
        icon: <Home/>,
        url: "/"
    },
    {
        label: "Dashboard",
        icon: <Dashboard/>,
        url: "/dashboard"
    },
    {
        label: "LMS",
        icon: <Airplay/>,
        url: "/lms"
    },
    {
        label: "Profile",
        icon: <Person/>,
        url: "/profile/list"
    },
    {
        label: "Download ID Card",
        icon: <NewspaperSharp/>,
        url: "/id-card"
    },
    {
        label: "Elective Course",
        icon: <AddToPhotos/>,
        url: "/elective-course"
    },
    {
        label: "Ebooks",
        icon: <Book/>,
        url: "/ebooks/list"
    },
    {
        label: "Admit Card",
        icon: <DescriptionOutlined/>,
        url: "/admit-card"
    },
    {
        label: "Time Table",
        icon: <CalendarMonth/>,
        url: "/time-table"
    },
    {
        label: "Result",
        icon: <ReceiptLong/>,
        url: "/result"
    },
    // 
    // {
    //     label: "Students",
    //     icon: <PersonSearch/>,
    //     url: "/students"
    // },
    // {
    //     label: "Courses",
    //     icon: <MenuBook/>,
    //     url: "/courses"
    // },
    //     {
    //         label: "Transaction",
    //         icon: <AccountBalance/>,
    //         url: "/transaction"
    //     },
]