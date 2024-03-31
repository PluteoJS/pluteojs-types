import {JwtPayload} from "jsonwebtoken";

enum AuthorizationTokenTypes {
	Bearer = "Bearer",
}

interface iJWTPayload extends JwtPayload {
	uid: string;
}
interface iTokenPair {
	accessToken: string;
	refreshToken: string;
}

export type {iJWTPayload, iTokenPair, AuthorizationTokenTypes};
