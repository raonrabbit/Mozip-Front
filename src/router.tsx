import { createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root";
import LoginHome from "./routes/Home/LoginHome";
import Home from "./routes/Home/Home";
import GoogleCallback from "./routes/Login/GoogleCallback";
import SignUp from "./routes/Login/SignUp";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				path: "",
				element: <LoginHome />,
			},
			{
				path: "home",
				element: <Home />,
			},
			{
				path: "signup",
				element: <SignUp />,
			},
			{
				path: "/login/google",
				element: <GoogleCallback />,
			},
		],
	},
]);

export default router;
