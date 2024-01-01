"use client";
import styles from './MyComponents.module.css';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Logo from './Logo.png'
import Image from 'next/image'
import { faCoffee, faShoppingCart, faCaretUp, faClose, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function MyButton(props) {
  return (
    <div onClick={props.onClick} className={props.parentClassName ? props.parentClassName + " " + [styles.MyButtonParentDiv] : [styles.MyButtonParentDiv]}>
      <h1 className={props.textClass ? props.textClass + " " + [styles.MyButtonTextStyle] : [styles.MyButtonTextStyle]}>{props.text}</h1>
    </div>
  );
}

export function TextWithLabel(props) {
  return (
    <div className={props.parentClassName ? props.parentClassName + " " + [styles.textWithLabelCon] : [styles.textWithLabelCon]}>
      <h1 className={props.labelClass ? props.labelClass + " " + [styles.TWLLabel] : [styles.TWLLabel]}>{props.label}</h1>
      <h1 className={props.textClass ? props.textClass + " " + [styles.TWLText] : [styles.TWLText]}>{props.text}</h1>
    </div>
  );
}

export function Navbar(props) {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className={styles.navbarContainer}>
      <Image src={Logo} width={50} height={50} />
      <h1 className={styles.navbarLink}>Home</h1>
      <h1 className={styles.navbarLink}>About Us</h1>
      <h1 className={styles.navbarLink}>Our Team</h1>
      <h1 className={styles.navbarLink}>Contact us</h1>

    </div>
  );
}
export function Divider(props) {
  return (
    <div className={props.dividerClassname ? props.dividerClassname + " " + styles.divider : styles.divider}>
      <h2 className={props.dividerTextClassname ? props.dividerTextClassname + " " + styles.dividerText : styles.dividerText}>{props.title}</h2>
      <div className={props.dividerLineClassname ? props.dividerLineClassname + " " + styles.dividerLine : styles.dividerLine}></div>
    </div>
  )
}

export function BackToTopButton() {
  const [show, setShow] = useState(false);
  if (typeof window !== 'undefined') {
    window.onscroll = function () { scrollFunction() };
  }
  function scrollFunction() {
    console.log('here')
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)
      setShow(true)
    else
      setShow(false)
  }
  function ScrollToTop() {
    if (typeof window !== 'undefined') {
      if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.body.scrollTop = document.body.scrollTop - (document.body.scrollTop / 10);
        document.documentElement.scrollTop = document.documentElement.scrollTop - (document.documentElement.scrollTop / 10);
        setTimeout(function () {
          ScrollToTop();
        }, 1);
      }
    }
  }
  return (
    <FontAwesomeIcon
      onClick={() => ScrollToTop()}
      className={show ? [styles.BackToTopButton, styles.BackToTopButtonShown].join(" ") : styles.BackToTopButton}
      icon={faCaretUp}
      size={32} />
  );
}


export function TeamCard(props) {
  return (
    <div className={styles.cardContainer}>
      <Image src={Logo} className={styles.cardImage} />
      <h1 className={styles.cardName}>
       {props.name}
      </h1>
      <h1 className={styles.cardEduText}>
        {props.education}
      </h1>
      <h1 className={styles.cardAbout}>
        {props.about}
      </h1>
    </div>
  )
}
