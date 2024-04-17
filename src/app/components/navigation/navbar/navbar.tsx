import SignOutBtn from "../../auth/signOutBtn";
import styles from "./navbar.module.css";

export default function Navbar() {
    return (
        <nav>
            <ul className={styles.list}>
                <li>
                    <SignOutBtn />
                </li>
            </ul>
        </nav>
    );
}
