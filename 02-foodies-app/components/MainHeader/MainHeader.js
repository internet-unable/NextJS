import Link from "next/link";
import Image from "next/image";

import logoImg from "@/assets/logo.png";
import classes from "./MainHeader.module.css";
import MainHeaderBackground from "./MainHeaderBackground/MainHeaderBackground";

export default function MainHeader() {
    return (
        <>
            <MainHeaderBackground />

            <header className={classes.header}>
                <Link href="/" className={classes.logo}>
                    <Image
                        src={logoImg.src}
                        width={80}
                        height={80}
                        alt="A plate with food on it"
                        priority
                    />
                    NextLevel food
                </Link>

                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <Link href="/meals">Browse meals</Link>
                        </li>
                        <li>
                            <Link href="/community">Browse community</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}