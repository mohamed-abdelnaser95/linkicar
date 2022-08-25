import React from 'react'
import styles from '../styles/Footer.module.css'
import { Container } from 'react-bootstrap'
import { FaFacebookF, FaTwitter, FaGooglePlay } from 'react-icons/fa'
import { AiFillInstagram, AiFillApple, } from 'react-icons/ai'
import { CgAlbum } from 'react-icons/cg'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerTop}>
                <Container className={styles.container}>
                    <ul className={styles.uae}>
                        <li className={styles.active}>UAE</li>
                        <li>Abu Dhabi</li>
                        <li>Al Ain</li>
                        <li>Dubai</li>
                        <li>Sharjah</li>
                        <li>Ajman</li>
                        <li>Fujairah</li>
                        <li>Ras al khaimah</li>
                    </ul>
                    <ul className={styles.quickLinks}>
                        <li className={styles.active}>Qucik Links</li>
                        <li>About</li>
                        <li>Advertising</li>
                        <li>Terms Of Use</li>
                        <li>Privacy Policy</li>
                        <li>Contact Us</li>
                    </ul>
                    <ul className={styles.company}>
                        <li className={styles.active}>Company</li>
                        <li>New Cars</li>
                        <li>Used Cars</li>
                        <li>Showrooms</li>
                        <li>offers</li>
                        <li>Ajman</li>
                        <li>Salvage Cars</li>
                        <li>News</li>
                    </ul>
                    <ul className={styles.followUs}>
                        <li className={styles.active}>Follow Us</li>
                        <li className={styles.icons}>
                            <i><FaFacebookF /></i><i><FaTwitter /></i><i><AiFillInstagram /></i>
                        </li>
                        <li className={styles.download}>Download Our Mobile App</li>
                        <li className={styles.btns}>
                            <button>
                                <i><FaGooglePlay/></i>
                                <div><small>Get it on </small><p>GooglePlay</p></div>
                            </button>
                            <button>
                                <i><AiFillApple/></i>
                                <div><small>Get it on </small><p>App Store</p></div>
                            </button>
                            <button>
                                <i><CgAlbum/></i>
                                <div><small>Get it on </small><p>App Gallery</p></div>
                            </button>
                        </li>
                    </ul>
                </Container>
            </div>
            <div className={styles.footerBotm}>
                All rights are reserved to linkicars - 2021
            </div>
        </footer>
    )
}

export default Footer