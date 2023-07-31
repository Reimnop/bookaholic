import { fail } from '@sveltejs/kit';
import fs from 'fs';

export function GET({url}: {url: URL}) {
    const name = url.searchParams.get('name');

    if (!name) {
        return fail(400, {
            error: 'Missing name parameter'
        });
    }

    // Check if file exists
    const path = `${process.cwd()}/static/avatars/${name}.png`;
    if (!fs.existsSync(path)) {
        // Return default avatar (if it exists)
        const defaultAvatarPath = `${process.cwd()}/static/avatars/default.png`;
        if (!fs.existsSync(defaultAvatarPath)) {
            return fail(404);
        }

        return new Response(fs.readFileSync(defaultAvatarPath), {
            status: 200,
            headers: {
                'Content-Type': 'image/png'
            }
        });
    }

    // Return avatar
    return new Response(fs.readFileSync(path), {
        status: 200,
        headers: {
            'Content-Type': 'image/png'
        }
    });
}