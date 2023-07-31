import { Database } from '$lib/Database';
import type { UserProfile } from '$lib/types/UserProfile';
import { fail, redirect } from '@sveltejs/kit';
import bcrypt from 'bcrypt';

// We don't need to implement rate limiting because SvelteKit already does it for us
async function register({request}: {request: Request}) {
    const data = await request.formData();
    const username = data.get('username') as string;
    const password = data.get('password') as string;

    const validationError = validate(username, password);
    if (validationError) {
        return fail(400, {
            error: validationError
        });
    }
    
    let db: Database | null = null;
    try {
        // Connect to the database
        db = Database.createFromEnvironment();
        await db.connect();

        // Check if the username is already taken
        const existingUserProfile = await db.queryUserProfileFromName(username);

        if (existingUserProfile) {
            return fail(400, {
                error: 'Username already taken'
            });
        }

        // Create the user profile
        const saltRounds = 10;
        const passwordHash = await bcrypt.hash(password, saltRounds);
        const userProfile: UserProfile = {
            username,
            creation_date: new Date(),
            password_hash: passwordHash,
            session_token: null
        }

        // Save the user profile
        await db.createUserProfile(userProfile);
    } catch (error) {
        if (error instanceof Error) {
            return fail(400, {
                error: error.message
            });
        }
    } finally {
        await db?.disconnect();
    }

    // Redirect to the sign in page
    throw redirect(303, '/signin');
}

function validate(username: string, password: string): string | null {
    if (username.length < 3) {
        return 'Username must be at least 3 characters long';
    }

    if (username.length > 40) {
        return 'Username must be at most 20 characters long';
    }

    if (password.length < 8) {
        return 'Password must be at least 8 characters long';
    }

    if (password.length > 50) {
        return 'Password must be at most 50 characters long';
    }

    if (!/^[a-zA-Z0-9_]+$/.test(username)) {
        return 'Username can only contain letters, numbers, and underscores';
    }

    return null;
}

export const actions = {
    register
}