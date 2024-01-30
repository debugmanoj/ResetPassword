import SignUp from "../components/SignUp"
import SignIn from "../components/SignIn"
import Email from "../components/Email"
import ResetFrom from "../components/ResetFrom"
import Update from "../components/Update"

const router=[
    {
        path:"/",
        exact:true,
        element:<SignUp/>,
    },
    {
        path:"/signIn",
        exact:true,
        element:<SignIn/>,
    },
    {
        path:"/email",
        exact:true,
        element:<Email/>,
    },
    {
        path:"/resetForm",
        exact:true,
        element:<ResetFrom/>
    },
    {
        path:"/Update",
        exact:true,
        element:<Update/>
    }
]

export default router