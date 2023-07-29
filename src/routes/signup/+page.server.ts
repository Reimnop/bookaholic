import { fail } from '@sveltejs/kit';

async function register({request}: {request: Request}) {
    const data = await request.formData();
    const username = data.get('username');
    const password = data.get('password');

    // TODO: register user
}

export const actions = {
    register
}