import { AccountBalance, AddToPhotos, BookSharp, Dashboard, GolfCourse, MenuBook, NewspaperSharp, Person, PersonSearch, VerifiedUser} from '@mui/icons-material';


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
        {
            label: "Transaction",
            icon: <AccountBalance/>,
            url: "/transaction"
        },
]

export const superAdminLinks = [
    {
        label: "Dashboard",
        icon: <Dashboard/>,
        url: "/dashboard"
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
            label: "Transaction",
            icon: <AccountBalance/>,
            url: "/transaction"
        },
]