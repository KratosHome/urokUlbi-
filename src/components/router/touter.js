import About from "../pages/About";
import Posts from '../pages/Posts';
import Postpage from '../pages/PostPage';
import Login from '../pages/LogIn';

export const privateRouter = [
    { path: "/about", component: <About/>, exact: true },
    { path: "/posts", component: <Posts/>, exact: true },
    { path: "/posts/:id", component: <Postpage/>, exact: true }
]

export const publicRoute = [
    { path: "/login", component: <Login/>, exact: true },
]