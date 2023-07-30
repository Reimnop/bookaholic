export interface UserProfile {
    username: string;
    creation_date: Date;
    password_hash: string;
    session_token: string | null;
}