"use client";

import Image from "next/image";
import styles from "./header.module.scss";
import { useSession } from "next-auth/react";
import Link from "next/link";

interface UserProps {
    url: string;
    text: string;
    image: string;
    imageAlt: string;
}

function User() {
    const session = useSession();

    let user: UserProps;

    if (session.status !== "authenticated") {
        user = {
            url: "/api/auth/signin",
            text: "Войти",
            image: "/siluet.webp",
            imageAlt: "siluet not auth user"
        }
    } else {
        user = {
            url: "/api/auth/signout",
            text: "Выйти",
            image: session?.data.user?.image as string,
            imageAlt: "user"
        }
    }

    return (
        <div className={styles.UserContainer}>
            <div className={styles.UserText}>
                {session.status === "authenticated" && `Привет, ${session?.data.user?.name} !`}
                <Link href={user.url}>{user.text}</Link>
            </div>
            
            <Image
                src={user.image}
                alt={user.imageAlt}
                className={styles.Rounded}
                width={50}
                height={50}
                priority
            />
        </div>
    );

}


export default function Header() {
    return (
        <div className={styles.HeaderContainer}>
            <Link href={"/"}>На главную</Link>
            <User />
        </div>
    );
};