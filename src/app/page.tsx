import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
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
      <div className={`${styles.description} ${styles.center}`}>
        <h1>Привет SCK-1.kz</h1>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://pimenov.kz"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Что сделано<span>-&gt;</span>
          </h2>
          <p>Этот сервер куплен для тестов на VDS hoster.kz а так же куплен домен
            pimenov.kz
            + разобрался как установить сертификат letsEncrypt</p>
        </a>

        <div>
          <Image
            src="/letsencrypt.png"
            alt="letsencrypt"
            className={styles.Logo}
            width={337}
            height={396}
            priority
          />

        </div>

      </div>
    </main>
  );
}
