import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import LoginHome from "./routes/LoginHome";
import Home from "./routes/Home";

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
		],
	},
]);

export default router;
