
import AboutMe from "./Home/aboutMe/AboutMe";
import Introduction from "./Home/Introduction/Introduction";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.Home}>
      <Introduction/>
      <AboutMe/>
    </div>
  );
}
