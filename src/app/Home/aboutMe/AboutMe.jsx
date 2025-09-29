
import Title from '@/components/title/Title'
import styles from './AboutMe.module.css'
export default function AboutMe() {
  return (
    <div id="aboutMe" className={styles.aboutMe}>
        <div className={styles.description}>
          <p>
            Olá! Meu nome é <strong>Guilherme Barroso</strong>, sou
            <strong> desenvolvedor full stack</strong>. sou apaixonado por tecnologia, resolução de problemas e por criar soluções que
            realmente fazem a diferença no dia a dia das pessoas e empresas.
          </p>
          <p>
            Hoje trabalho como <strong>desenvolvedor backend na BM Code</strong>, onde atuo
            com o <strong>ERP Sankhya</strong>, utilizando <strong>PL/SQL no Oracle </strong>
            e <strong>Java</strong> para construir soluções robustas e escaláveis.
          </p>
          <p>
            Além disso, sou <strong>co-fundador da NextSolve</strong>, uma startup focada
            no desenvolvimento de <strong>sistemas web</strong>, onde aplico meus conhecimentos
            em diferentes tecnologias.
          </p>
        </div>
    </div>
  )
}
