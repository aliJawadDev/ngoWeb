import styles from './page.module.css'

import { Navbar, BackToTopButton, TeamCard } from './MyComponents.js'
import Logo from './Logo.png'

import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.main}>
      <Navbar />
      <BackToTopButton />

      <div className={styles.picContainer}>

      </div>


      <div className={styles.aboutContainer}>
        <h1 className={styles.aboutTitle}>
          About Us:
        </h1>
        <p className={styles.aboutText}>
          Al-Maoon exists to serve Humanity. The motto of ours is to provide the basics to those who are unable to afford it.
          This Goal of ours is carried forward by the generous souls who donate the items which are of no longer use to them but it could be useful for someone in need. So be generous we are open to everything e.g. clothes, books, kitchen utensils, and other household items etc.
          The generosity of yours will bring joy for someone in need.
          Be Generous, support Al-Maoon.
        </p>
      </div>


      <div className={styles.teamContainer}>
        <h1 className={styles.teamTitle}>
          Our Team:
        </h1>

        <div className={styles.teamCardCon}>
          <TeamCard name="Demo name" education="Demo Education" about="Demo about text here" />
          <TeamCard name="Demo name" education="Demo Education" about="Demo about text here" />
          <TeamCard name="Demo name" education="Demo Education" about="Demo about text here" />
          <TeamCard name="Demo name" education="Demo Education" about="Demo about text here" />
          <TeamCard name="Demo name" education="Demo Education" about="Demo about text here" />
          <TeamCard name="Demo name" education="Demo Education" about="Demo about text here" />
          <TeamCard name="Demo name" education="Demo Education" about="Demo about text here" />
          <TeamCard name="Demo name" education="Demo Education" about="Demo about text here" />
          <TeamCard name="Demo name" education="Demo Education" about="Demo about text here" />
          <TeamCard name="Demo name" education="Demo Education" about="Demo about text here" />
          <TeamCard name="Demo name" education="Demo Education" about="Demo about text here" />
          <TeamCard name="Demo name" education="Demo Education" about="Demo about text here" />
          <TeamCard name="Demo name" education="Demo Education" about="Demo about text here" />
          <TeamCard name="Demo name" education="Demo Education" about="Demo about text here" />
          <TeamCard name="Demo name" education="Demo Education" about="Demo about text here" />
          <TeamCard name="Demo name" education="Demo Education" about="Demo about text here" />
          <TeamCard name="Demo name" education="Demo Education" about="Demo about text here" />
          <TeamCard name="Demo name" education="Demo Education" about="Demo about text here" />
          <TeamCard name="Demo name" education="Demo Education" about="Demo about text here" />
          <TeamCard name="Demo name" education="Demo Education" about="Demo about text here" />
        </div>

      </div>


      <div className={styles.contactContainer}>
        <h1 className={styles.contactTitle}>
          Contact Us:
        </h1>


        <h1 className={styles.contactInfoText}><b>Address:</b> Address here</h1>
        <h1 className={styles.contactInfoText}><b>Whatsapp:</b> 1234567890</h1>
        <h1 className={styles.contactInfoText}><b>Facebook:</b> www.google.com</h1>
      </div>
    </div>
  )
}
