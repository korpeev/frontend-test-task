import Head from "next/head";
import {Card} from "~/components/Card";
import {Card as CardModel} from "~/models";

const cards:CardModel[]  = [
  {
    color: 'blue',
    title: 'Получите\nпартнерскую ссылку',
    hasArrow: true,
    hero: 'hero-1.svg'
  },
  {
    color: 'purple',
    title: 'Расскажите\nо IIII.COM',
    hasArrow: true,
    hero: 'hero-2.svg'
  },
  {
    color: 'green',
    title: 'Получайте хороший процент\nот покупок по вашей ссылке!',
    hasArrow: false,
    hero: 'hero-3.svg'
  }
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Frontend test task</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={'container'}>
        <h3 className="title">Зарабатывайте вместе с нами!</h3>
        <div className='card-content'>
          <div className="border">
            {cards.map((card, index) => (
                <Card card={card} key={index} index={index}/>
            ))}
          </div>
        </div>
        <div className="button-row">
          <button className="button">
            <img src="btn-icon.svg" alt="btn icon"/>
            Стать партнером
          </button>
        </div>
      </div>
    </>
  );
}