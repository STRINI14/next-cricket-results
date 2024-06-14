import Navbar from "../../components/Navbar/Navbar";
import style from './page.module.css'

export default async function Home() {
  const {data} = await (await (fetch('https://api.cricapi.com/v1/matches?apikey=0cc73991-c07c-458f-ace0-2eba558559d1&offset=0'))).json()


  return (
    <main>
    <Navbar />

    <section className={style.content}>
        <ul className={style.lists}>
            <li className={style.lists}>Match</li>
            <li className={style.lists}>Date</li>
            <li className={style.lists}>Status</li>
            <li style={{paddingLeft: '90px'}} className={style.lists}>Venue</li>
            <li style={{paddingLeft: '190px'}} className={style.lists}>Type</li>
        </ul>
    {
        data.map(match=><ul key={match.id} className={style.listsContent}>
            <li className={style.listContent}>{match.name}</li>
            <li className={style.listContent}>{match.date}</li>
            <li className={style.listContent} style={{color:match.status === 'Match not started'? 'red' : 'green'}}>{match.status}</li>
            <li style={{paddingRight: '90px'}} className={style.listContent}>{match.venue}</li>
            <li style={{paddingLeft: '130px'}} className={style.listContent}>{match.matchType}</li>
        </ul>)
    }
    </section>
    </main>
  );
}
