import styles from "./page.module.scss";
import { Metadata } from 'next';

//Метаданные для страницы
export const metadata: Metadata = {
  title: "Сайт для тестов",
  description: "Сайт для тестов на VDS hoster.kz",
  keywords: "nextjs, react, typescript, css-modules, vds, hoster.kz, letsencryptm, pimenov.kz, sck-1.kz, Пименов Сергей"
};

export default function Home() {

  return (
    <main className={styles.main}>
      123
    </main>
  );
}
