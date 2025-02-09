import { promises as fs } from 'fs';
import path from 'path';

export default defineEventHandler(async (event) => {

    try {
        const body = await readBody(event);

        const artistId = body.id;

        if (!artistId) {
            return { success: false, message: 'Artist ID is required' };
        }

        const filePath = path.resolve('static/artists.json');

        const fileData = await fs.readFile(filePath, 'utf-8');

        const jsonDataBefore = JSON.parse(fileData)

        const artist = jsonDataBefore.find((item) => item.id === artistId);

        if (artist) {
            artist.followed = !artist.followed;

            await fs.writeFile(filePath, JSON.stringify(jsonDataBefore, null, 2));
            return { success: true, message: 'Follow status updated successfully' };
        } else {
            return { success: false, message: 'Artist not found' };
        }
    } catch (error) {
        return { success: false, message: 'Failed to update data' };
    }
});
