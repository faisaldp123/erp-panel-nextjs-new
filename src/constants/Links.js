import { AccountBalance, AddToPhotos, Airplay, Assignment, Book, BookOnlineOutlined, BookSharp, CalendarMonth, CalendarViewMonthRounded, CardTravel, Dashboard, DescriptionOutlined, DockSharp, GolfCourse, HeadsetMic, HeadsetMicOutlined, Home, HomeMaxOutlined, MenuBook, NewspaperSharp, Payment, Person, PersonSearch, ReceiptLong, Source, VerifiedUser} from '@mui/icons-material';
import { Card } from '@mui/material';


export const superAdminLinks = [
    {
        label: "General",
        icon: <Home/>,
        url: "/dashboard"
    },
    // 
    {
        label: "Students",
        icon: <Person/>,
        url: "/students"
    },
    {
        label: "Exams",
        icon: <Assignment/>,
        url: "/exam"
    },
    {
            label: "Accounts",
            icon: <Payment/>,
            url: "/accounts"
        },
        {
            label: "Support",
            icon: <HeadsetMicOutlined/>,
            url: "/support"
        },
        {
            label: "Docs",
            icon: <Source/>,
            url: "/docs"
        },
        // {
        //     label: "Transaction",
        //     icon: <AccountBalance/>,
        //     url: "/transaction"
        // },
]

export const adminLinks = [
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
        label: "Docs",
        icon: <Source/>,
        url: "/docs"
    },
    {
        label: "Support",
        icon: <HeadsetMicOutlined/>,
        url: "/support"
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