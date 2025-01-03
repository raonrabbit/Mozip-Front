import { CiDark, CiBrightnessUp } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import Toggle from "./ToggleBtn";
import { themeActions } from "../../store/themeSlice";

export default function Header() {
	const dispatch = useDispatch();
	const isDark = useSelector((state: { theme: { isDark: boolean } }) => state.theme.isDark);

	const handleToggle = (toggleState: boolean) => {
		if (toggleState) {
			dispatch(themeActions.darkMode());
		} else {
			dispatch(themeActions.lightMode());
		}
	};

	return (
		<header className="shadow-lg p-4 fixed top-0 left-0 w-full h-[4rem] items-center">
			<div className="flex justify-between items-center">
				<div>
					<img src="/images/Logo.png" alt="logo" className="h-[2rem]" />
				</div>
				<div className="flex items-center">
					<Toggle
						initialState={isDark}
						size="md"
						onIcon={<CiDark />}
						offIcon={<CiBrightnessUp />}
						onColor="bg-gray-700"
						offColor="bg-yellow-500"
						onToggle={handleToggle}
					/>
				</div>
			</div>
		</header>
	);
}
