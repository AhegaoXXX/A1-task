
const API = process.env.NEXT_API || 'https://nextjs-test-pi-hazel-56.vercel.app/data/games.json';

export async function getGames() {
    const response = await fetch(API);
    const data = await response.json();
    return data;
}
