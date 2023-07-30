import { Database } from "$lib/Database";
import type { ClientUserProfile } from "$lib/types/ClientUserProfile";
import type { Cookies } from "@sveltejs/kit";

export async function load({cookies}: {cookies: Cookies}): Promise<ClientUserProfile | null> {
    // Check if the user is signed in
    const sessionToken = cookies.get('session_token');

    if (!sessionToken || sessionToken.length === 0) {
        return null;
    }

    // Connect to the database
    let db: Database | null = null;
    try {
        db = Database.createFromEnvironment();
        await db.connect();

        // Fetch the user profile
        const userProfile = await db.queryUserProfileFromSessionToken(sessionToken);

        if (!userProfile) {
            return null;
        }

        return {
            username: userProfile.username,
            creation_date: userProfile.creation_date
        };
    } catch (error: any) {
        return null;
    } finally {
        await db?.disconnect();
    }
}