import { Link } from "react-router-dom";

export default function SignUp() {
	return (
		<div className="flex items-center justify-center min-h-screen bg-background dark:bg-background-dark">
			<div className="w-[1400px] h-[670px] bg-white rounded-[1.5rem] shadow-lg flex overflow-hidden">
				{/* 왼쪽 영역: 동영상 */}
				<div className="w-1/2 bg-purple-100 relative">
					<video src="/videos/main.mp4" autoPlay loop muted className="w-full h-full object-cover" />
				</div>

				{/* 오른쪽 영역: 회원가입 폼 */}
				<div className="w-1/2 p-10 flex flex-col justify-center">
					{/* 로고와 라인 */}
					<div className="text-3xl font-bold mb-2">MOZIP</div>
					<hr className="border-black mb-6 w-[80px]" />

					<div className="text-xl font-semibold mb-8">회원가입</div>

					{/* 이름 / 이메일 / 비밀번호 폼 */}
					<form className="space-y-4">
						<div>
							<label htmlFor="name" className="block mb-1 text-sm font-medium">
								이름
								<input
									type="text"
									id="name"
									className="w-full border border-gray-300 rounded-[0.75rem] px-3 py-2 focus:outline-none hover:border-purple-300 focus:border-purple-300 focus:ring-1 focus:ring-purple-300"
									placeholder="이름 입력"
								/>
							</label>
						</div>
						<div>
							<label htmlFor="email" className="block mb-1 text-sm font-medium">
								이메일
								<input
									type="email"
									id="email"
									className="w-full border border-gray-300 rounded-[0.75rem] px-3 py-2 focus:outline-none hover:border-purple-300 focus:border-purple-300 focus:ring-1 focus:ring-purple-300"
									placeholder="이메일 입력"
								/>
							</label>
						</div>
						<div>
							<label htmlFor="password" className="block mb-1 text-sm font-medium">
								비밀번호
								<input
									type="password"
									id="password"
									className="w-full border border-gray-300 rounded-[0.75rem] px-3 py-2 focus:outline-none hover:border-purple-300 focus:border-purple-300 focus:ring-1 focus:ring-purple-300"
									placeholder="비밀번호 입력"
								/>
							</label>
						</div>
						<div>
							<label htmlFor="confirmPassword" className="block mb-1 text-sm font-medium">
								비밀번호 확인
								<input
									type="password"
									id="confirmPassword"
									className="w-full border border-gray-300 rounded-[0.75rem] px-3 py-2 focus:outline-none hover:border-purple-300 focus:border-purple-300 focus:ring-1 focus:ring-purple-300"
									placeholder="비밀번호 확인 입력"
								/>
							</label>
						</div>
						<button type="submit" className="w-full bg-[#AB8ECD] text-white py-2 rounded-[0.75rem] font-semibold">
							회원가입
						</button>
					</form>

					{/* 로그인 안내 */}
					<div className="mt-4 text-sm text-right">
						이미 계정이 있으신가요?
						<Link to="/" className="text-purple-500 underline decoration-purple-500">
							로그인하러 가기
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
