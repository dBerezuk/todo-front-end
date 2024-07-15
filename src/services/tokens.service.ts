import Cookies from 'js-cookie';

export enum tokens {
	ACCESS_TOKEN = 'accessToken'
}

class TokensService {
	cookies: Cookies.CookiesStatic<string>;

	constructor() {
		this.cookies = Cookies.withAttributes({
			domain: import.meta.env.VITE_APP_DOMAIN,
			sameSite: 'strict',
			expires: 15
		});
	}

	getToken(): string | undefined {
		return this.cookies.get(tokens.ACCESS_TOKEN);
	}

	setToken(token: string) {
		this.cookies.set(tokens.ACCESS_TOKEN, token);
	}

	removeToken() {
		this.cookies.remove(tokens.ACCESS_TOKEN);
	}
}

export default new TokensService();
