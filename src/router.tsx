import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import LoginHome from "./routes/LoginHome";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				path: "",
				element: <LoginHome />,
			},
		],
	},
]);

export default router;
