import { createBrowserRouter } from "react-router-dom";
import Courses from "../components/Courses/Courses";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Premium from "../components/Premium/Premium";
import Register from "../components/Register/Register";
import SingleCourse from "../components/SingleCourse/SingleCourse";
import Main from "../layout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('https://b610-lerning-platform-server-side-dev-as-fahim.vercel.app/courses')
            },
            {
                path: '/courses/:id',
                loader: ({params}) => fetch(`https://b610-lerning-platform-server-side-dev-as-fahim.vercel.app/courses/${params.id}`),
                element: <SingleCourse></SingleCourse>
            },
            {
                path: '/premium',
                element: <Premium></Premium>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])