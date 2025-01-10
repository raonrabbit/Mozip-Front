import localAxios from "./http-commons";
import { GoogleLoginResponse } from "../interfaces/user/googleLogin";
import { ErrorResponse } from "../interfaces/commons/error";

export const googleLoginAPI = async (code: string): Promise<GoogleLoginResponse> => {
	try {
		const response = await localAxios.post<GoogleLoginResponse>("auth/login/google", { code });
		return response.data;
	} catch (error: unknown) {
		const err = error as ErrorResponse;
		const status = err.response?.data?.status;
		const message = err.response?.data?.message || err.message;

		if (status === 401) {
			console.error("Unauthorized:", message);
			throw new Error("아이디나 비밀번호를 다시 한 번 확인해주세요.");
		}

		console.error("Unexpected error:", message);
		throw new Error("Google Login failed");
	}
};

export const logoutAPI = async (): Promise<void> => {
	try {
		await localAxios.post<void>("auth/logout");
	} catch (error: unknown) {
		const err = error as ErrorResponse;
		const status = err.response?.data?.status;
		const message = err.response?.data?.message || err.message;

		if (status === 401) {
			console.error("Unauthorized:", message);
			throw new Error("로그인이 필요합니다.");
		}

		console.error("Unexpected error:", message);
		throw new Error("Logout failed");
	}
};
