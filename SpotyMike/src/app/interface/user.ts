export interface User {
    id: number,
    email: string,
    name: string,
    token: Token;
}

export interface AccessToken{
    token:string;
    expires:string|Date;
}

export interface Token{
    access: AccessToken;
    refresh: AccessToken;
}
