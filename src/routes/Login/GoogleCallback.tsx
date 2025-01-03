import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import googleLogin from "../../api/auth";

interface LoginResponse {
	nickname: string;
	imageUrl?: string; // Nullable
}

export default function GoogleCallback() {
	const navigate = useNavigate();

	useEffect(() => {
		const query = new URLSearchParams(window.location.search);
		const code = query.get("code");

		const handleGoogleLogin = async () => {
			if (!code) {
				console.log("code가 없음");
				navigate("/");
				return;
			}

			try {
				// 구글 로그인 API 호출
				const loginResponse: LoginResponse = await googleLogin(code);
				const nickname = loginResponse?.nickname;
				const imageUrl = loginResponse?.imageUrl;
				console.log(nickname);
				console.log(imageUrl);
				if (!nickname) {
					console.log("닉네임 정보 없음");
					navigate("/login");
					return;
				}
				// 성공 메시지
				console.log("로그인 성공");
				// 홈으로 이동
				navigate("/");
			} catch (error) {
				console.log(error);
				navigate("/");
			}
		};

		handleGoogleLogin();
	}, [navigate]);

	return <div>구글 로그인 처리 중...</div>;
}
