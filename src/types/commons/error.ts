export interface ErrorResponse {
	response?: {
		data?: {
			status: number;
			message: string;
		};
	};
	message?: string;
}
