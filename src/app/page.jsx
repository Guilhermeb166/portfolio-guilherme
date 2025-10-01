
import Title from "@/components/title/Title";
import AboutMe from "./Home/aboutMe/AboutMe";
import Introduction from "./Home/Introduction/Introduction";
import styles from "./page.module.css";
import Projects from "./Home/projects/Projects";

export default function Home() {
  return (
    <div className={styles.Home}>
      <Introduction/>
      <Title text='Projects'  id='Projects'/>
      <Projects/>
      <AboutMe/>
      
    </div>
  );
}
