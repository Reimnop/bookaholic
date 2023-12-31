import { Database } from "$lib/Database";
import type { ClientUserProfile } from "$lib/types/ClientUserProfile";
import type { ClientPageData } from "$lib/types/ClientPageData";
import { fail, type Cookies, ActionFailure } from "@sveltejs/kit";

export async function load({cookies}: {cookies: Cookies}): Promise<ClientPageData | ActionFailure<{ error: string }> | null> {
    // Check if the user is signed in
    const sessionToken = cookies.get('session_token');

    if (!sessionToken || sessionToken.length === 0) {
        return null;
    }

    // Connect to the database
    let clientUserProfile: ClientUserProfile | null = null;

    let db: Database | null = null;
    try {
        db = Database.createFromEnvironment();
        await db.connect();

        // Fetch the user profile
        const userProfile = await db.queryUserProfileFromSessionToken(sessionToken);

        if (!userProfile) {
            return null;
        }

        clientUserProfile = {
            username: userProfile.username,
            creation_date: userProfile.creation_date
        }
    } catch (error) {
        if (error instanceof Error) {
            return fail(400, {
                error: error.message
            });
        }
    } finally {
        await db?.disconnect();
    }

    return {
        userProfile: clientUserProfile
    }
}