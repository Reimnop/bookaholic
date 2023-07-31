import { Database } from "$lib/Database";
import { fail, type Cookies, redirect } from "@sveltejs/kit";
import bcrypt from "bcrypt";

async function signin({cookies, request}: {cookies: Cookies, request: Request}) {
    const data = await request.formData();
    const username = data.get('username') as string;
    const password = data.get('password') as string;

    let database: Database | null = null;
    try {
        database = Database.createFromEnvironment();
        await database.connect();

        // Fetch the user profile
        const userProfile = await database.queryUserProfileFromName(username);

        // Validate the password
        if (!userProfile || !(await bcrypt.compare(password, userProfile.password_hash))) {
            return fail(400, {
                error: 'Invalid username or password'
            });
        }

        // Set the session cookie
        const sessionToken = userProfile.session_token ?? await bcrypt.hash(username, 10);
        cookies.set('session_token', sessionToken, {
            path: '/',
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 7 // 1 week
        });

        // Update the session token in the database
        await database.updateSessionToken(username, sessionToken);
    } catch (error) {
        if (error instanceof Error) {
            return fail(400, {
                error: error.message
            });
        }
    } finally {
        await database?.disconnect();
    }

    throw redirect(303, '/');
}

export const actions = {
    signin
}