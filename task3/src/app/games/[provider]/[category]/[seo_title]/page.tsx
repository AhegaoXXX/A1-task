import Image from 'next/image'
import { getGames } from '../../../../../entities/Games/model/Games'
import { TGame } from '../../../../../entities/Games/types/GameTypes'
import cls from './gamePage.module.css'

export async function generateStaticParams(){
    const gamesData:TGame[] = await getGames();

    if(!gamesData) return [];

    return gamesData.flatMap(game =>
        game.categories.map(category => ({
            provider: game.provider,
            category: category,
            seo_title: game.seo_title,
        }))
    );
};

const GamePage = async ({ params }: {
    params: { seo_title:string, provider:string, category:string,}
}) => {
    const { provider, category, seo_title } = params;
    const games:TGame[] = await getGames();
    const game = games.find(g =>
        g.seo_title === seo_title
        && (g.provider === provider || g.categories.includes(category)));

    return (
        <div className={cls.main}>
            <div className={cls.left}>
                <Image
                    src={`https://d2norla3tyc4cn.cloudfront.net/i/s3/${game?.identifier}.webp`}
                    alt={game?.title || 'game-img'}
                    width={400}
                    height={400}
                    />
            </div>
            <div className={cls.right}>
                <h2>Название: <span>{game?.title}</span></h2>
                <br/>
                <p>Провайдер: <span>{game?.provider}</span></p>
                <br/>
                <div>
                    <p>Категории:</p>
                    <br/>
                    <p className={cls.categories}>~ {game?.categories?.join(", ")} ~</p>
                </div>
            </div>
        </div>
    );
}


export default GamePage;
