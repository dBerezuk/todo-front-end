export interface IResponseError<T = null> {
	formError?: {
		[K in keyof T]: {
			location: string;
			msg: string;
			path: string;
			type: string;
			value: string;
		};
	};
	error?: string;
}
