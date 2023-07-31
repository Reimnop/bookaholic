import type { DatabaseAuthInfo } from './types/DatabaseAuthInfo';
import { Client } from 'pg';
import type { UserProfile } from './types/UserProfile';

export class Database {
    client: Client;

    constructor(authInfo: DatabaseAuthInfo) {
        this.client = new Client({
            host: authInfo.host,
            port: authInfo.port,
            database: authInfo.database,
            user: authInfo.user,
            password: authInfo.password
        });
    }

    async connect() {
        await this.client.connect();
    }

    async disconnect() {
        await this.client.end();
    }

    async queryUserProfileFromName(username: string): Promise<UserProfile | null> {
        const result = await this.client.query(
            'SELECT * FROM users WHERE username = $1',
            [username]
        );

        if (result.rowCount === 0) {
            return null;
        }

        const row = result.rows[0];

        if (!row.username || !row.creation_date || !row.password_hash) {
            return null;
        }

        return {
            username: row.username,
            creation_date: row.creation_date,
            password_hash: row.password_hash,
            session_token: row.session_token ?? null
        };
    }

    async queryUserProfileFromSessionToken(sessionToken: string): Promise<UserProfile | null> {
        const result = await this.client.query(
            'SELECT * FROM users WHERE session_token = $1',
            [sessionToken]
        );

        if (result.rowCount === 0) {
            return null;
        }

        const row = result.rows[0];

        if (!row.username || !row.creation_date || !row.password_hash || !row.session_token) {
            return null;
        }

        return {
            username: row.username,
            creation_date: row.creation_date,
            password_hash: row.password_hash,
            session_token: row.session_token
        };
    }

    async createUserProfile(userProfile: UserProfile) {
        await this.client.query(
            'INSERT INTO users (username, creation_date, password_hash, session_token) VALUES ($1, $2, $3, $4)',
            [userProfile.username, userProfile.creation_date, userProfile.password_hash, userProfile.session_token]
        );
    }

    async updateSessionToken(username: string, sessionToken: string) {
        await this.client.query(
            'UPDATE users SET session_token = $1 WHERE username = $2',
            [sessionToken, username]
        );
    }
    
    static createFromEnvironment(): Database {
        const postgresHost = process.env.POSTGRES_HOST;
        const postgresPort = process.env.POSTGRES_PORT;
        const postgresDatabase = process.env.POSTGRES_DATABASE;
        const postgresUser = process.env.POSTGRES_USER;
        const postgresPassword = process.env.POSTGRES_PASSWORD;

        if (!postgresHost || !postgresPort || !postgresDatabase || !postgresUser || !postgresPassword) {
            throw new Error('Database environment variables not set');
        }

        const authInfo: DatabaseAuthInfo = {
            host: postgresHost,
            port: parseInt(postgresPort),
            database: postgresDatabase,
            user: postgresUser,
            password: postgresPassword
        };

        return new Database(authInfo);
    }
}