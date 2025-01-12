import { FaSearch, FaPen } from "react-icons/fa";
import { MdGroupAdd } from "react-icons/md";
import { FcMediumPriority } from "react-icons/fc";

export default function Group() {
	return (
		<div className="flex min-h-screen bg-background dark:bg-background-dark p-12 justify-between gap-12">
			<div className="flex min-w-60 justify-center w-80 bg-white dark:bg-slate-800 shadow-xl rounded-3xl">
				<div className="flex w-full h-12 items-center justify-between p-6 border-b-2">
					<div className="font-semibold text-gray-700 dark:text-slate-400">그룹</div>
					<div className="flex gap-4">
						<FaSearch className="text-gray-700 dark:text-slate-400" />
						<MdGroupAdd className="text-gray-700 dark:text-slate-400" />
						<FaPen className="text-gray-700 dark:text-slate-400" />
					</div>
				</div>
			</div>
			<div className="w-full min-w-[40rem] bg-white dark:bg-slate-800 shadow-xl rounded-3xl">
				<div className="flex w-full h-12 items-center justify-between p-6 border-b-2">
					<div className="font-semibold text-gray-700 dark:text-slate-400">그룹을 선택해주세요</div>
				</div>
				<div className="flex h-full items-center justify-center p-12">
					<FcMediumPriority className="text-5xl" />
				</div>
			</div>
		</div>
	);
}
