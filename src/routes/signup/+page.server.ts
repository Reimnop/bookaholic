import { Database } from '$lib/Database.js';
import type { UserProfile } from '$lib/types/UserProfile.js';
import { fail } from '@sveltejs/kit';
import sha256 from 'crypto-js/sha256';
import Base64 from 'crypto-js/enc-base64';

async function register({request}: {request: Request}) {
    const data = await request.formData();
    const username = data.get('username') as string;
    const password = data.get('password') as string;
    
    let db: Database | null = null;
    try {
        // Connect to the database
        db = Database.createFromEnvironment();
        await db.connect();

        // Check if the username is already taken
        const existingUserProfile = await db.queryUserProfile(username);

        if (existingUserProfile) {
            return fail(400, {
                error: 'Username already taken'
            });
        }

        // Create the user profile
        const passwordHashDigest = sha256(password);
        const passwordHash = Base64.stringify(passwordHashDigest);
        const userProfile: UserProfile = {
            username,
            creation_date: new Date(),
            password_hash: passwordHash
        }

        // Save the user profile
        await db.createUserProfile(userProfile);
    } catch (error: any) {
        return fail(400, {
            error: error.message
        });
    } finally {
        await db?.disconnect();
    }
}

export const actions = {
    register
}