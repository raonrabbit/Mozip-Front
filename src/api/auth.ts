import localAxios from "./http-commons";

interface LoginResponse {
	nickname: string;
	imageUrl?: string; // Nullable
}

interface ErrorResponse {
	response?: {
		data?: {
			status: number;
			message: string;
		};
	};
	message?: string;
}

const googleLogin = async (code: string): Promise<LoginResponse> => {
	try {
		const response = await localAxios.post<LoginResponse>("auth/login/google", { code });
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

export default googleLogin;
