import Login from "@/components/login/login"
import MainPage from "@/components/mainPage/mainPage"

const list = [
    {
        path : "/",
        exact: true,
        component: Login,
        requiresAuth : false
    },
    {
        path : "/login",
        exact: true,
        component: Login,
        requiresAuth : false
    },
    {
        path : "/mainPage",
        exact: false,
        component: MainPage,
        requiresAuth : true
    }
]

export default list