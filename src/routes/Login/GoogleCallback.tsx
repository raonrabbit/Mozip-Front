import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { googleLoginAPI } from "../../api/auth";
import { GoogleLoginResponse } from "../../types/user/googleLogin";

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
			console.log("code:", code);
			try {
				// 구글 로그인 API 호출
				const loginResponse: GoogleLoginResponse = await googleLoginAPI(code);
				const accessToken = loginResponse?.accessToken;
				console.log(accessToken);
				if (!accessToken) {
					console.log("로그인 토큰 정보 없음");
					navigate("/");
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
