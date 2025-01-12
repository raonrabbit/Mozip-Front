import { CiDark, CiBrightnessUp } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { MdCalendarToday, MdHowToVote, MdGroup, MdNotifications } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import Toggle from "./ToggleBtn";
import { themeActions } from "../../store/themeSlice";

export default function Header() {
	const dispatch = useDispatch();
	const isDark = useSelector((state: { theme: { isDark: boolean } }) => state.theme.isDark);

	const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

	const handleToggle = (toggleState: boolean) => {
		if (toggleState) {
			dispatch(themeActions.darkMode());
		} else {
			dispatch(themeActions.lightMode());
		}
	};

	return (
		<header className="relative bg-header dark:bg-header-dark shadow-xl shadow-shadow p-4 top-0 left-0 w-full h-[4rem] items-center">
			<div className="h-full flex justify-between items-center">
				<Link to="/">
					<img src="/images/Logo.png" alt="logo" className="h-[2rem]" />
				</Link>
				<div className="absolute bottom-0 left-1/2 -translate-x-[160px] w-80 pl-8 pr-8 pt-2 pb-2 bg-gray-500 dark:bg-gray-700 shadow-[inset_0_0_6px_rgba(0,0,0,0.5)] rounded-tl-lg rounded-tr-lg flex items-center justify-between">
					<div className="flex h-10 w-5 flex-col items-center justify-center gap-0.5">
						<MdCalendarToday className="text-gray-100 dark:text-gray-300" />
						<div className="w-20 top-8 text-center text-[14px] text-gray-100 dark:text-gray-300">내 일정</div>
					</div>
					<div className="flex h-10 w-5 flex-col items-center justify-center gap-0.5">
						<MdHowToVote className="text-gray-100 dark:text-gray-300" />
						<div className="w-32 top-8 text-center text-[14px] text-gray-100 dark:text-gray-300">투표중인 일정</div>
					</div>
					<Link to="/group" className="flex h-10 w-5 flex-col items-center justify-center gap-0.5">
						<MdGroup className="text-gray-100 dark:text-gray-300" />
						<div className="w-20 top-8 text-center text-[14px] text-gray-100 dark:text-gray-300">그룹</div>
					</Link>
				</div>
				<div className="flex items-center gap-4">
					<Toggle
						initialState={isDark}
						size="md"
						onIcon={<CiDark />}
						offIcon={<CiBrightnessUp />}
						onColor="bg-gray-700"
						offColor="bg-yellow-500"
						onToggle={handleToggle}
					/>
					{isLoggedIn && (
						<div className="flex items-center gap-4">
							<MdNotifications className="text-3xl text-yellow-500 drop-shadow-sm" />
							<FaUserCircle className="text-3xl text-purple-500 drop-shadow-sm" />
						</div>
					)}
				</div>
			</div>
		</header>
	);
}
