export interface AuthUser {
	id: string;
	email: string;
	name?: string;
	avatar_url?: string;
	role: "USER" | "ADMIN" | "SUPER_ADMIN";
}

export interface Session {
	user: AuthUser;
	access_token: string;
	refresh_token: string;
	expires_at: number;
}
