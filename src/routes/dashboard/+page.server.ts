import { redirect, type Cookies } from "@sveltejs/kit";

async function signout({cookies}: {cookies: Cookies}) {
    cookies.delete('session_token', {
        path: '/'
    });

    throw redirect(303, '/');
}

export const actions = {
    signout
}