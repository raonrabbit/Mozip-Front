import { Outlet } from "react-router-dom";
import Header from "../components/commons/Header";

export default function Root() {
	return (
		<div>
			<Header />
			<Outlet />
		</div>
	);
}
