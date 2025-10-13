import styles from './Contact.module.css'
import Title from '@/components/title/Title'
import Form from './form/Form'
import { FiSend } from 'react-icons/fi'

export default function Contact() {
  return (
    <section className={styles.contactSession} id='contact'>
      <Title text ='Contact'/>
      <div className={styles.contactWrapper}>
        {/* Coluna da Esquerda: Texto e E-mail */}
        <div className={styles.contactText}>
          <p>
            Estou sempre aberto a oportunidades interessantes como projetos freelance ou colaborações tecnológicas.
          </p>
          <p>
            Minha caixa de entrada está sempre aberta, não importa se você tem alguma dúvida ou apenas quer conversar.
          </p>
          <p>
            Vamos nos conectar!
          </p>
          <a href="mailto:guilhermebarroso166@gmail.com" className={styles.emailButton}>
            <FiSend />
            guilhermebarroso166@gmail.com
          </a>
        </div>
        <Form/>
      </div>
    </section>
  )
}
