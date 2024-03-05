import { TGame } from 'entities/Games/types/GameTypes'
import Image from 'next/image'
import Link from 'next/link'
import { getGames } from '../entities/Games/model/Games'
import cls from "./page.module.css"

export default async function Home() {
  const games:TGame[] = await getGames();

  return (
    <main className={cls.main}>
      {games?.map(game =>
        <Link href={`/games/${game.provider}/${game.categories[0]}/${game.seo_title}`} prefetch={false}>
          <div className={cls.card} id={game.identifier}>
          <p>{game.title}</p>
          <Image src={`https://d2norla3tyc4cn.cloudfront.net/i/s3/${game.identifier}.webp`} alt={game.title} width={150} height={150}/>
        </div>
        </Link>
      )}
    </main>
  );
}
