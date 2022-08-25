import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { AiFillHome } from 'react-icons/ai'
import { FaPlay } from 'react-icons/fa'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { BsShareFill } from 'react-icons/bs'
import { Container } from 'react-bootstrap'
import CarouselFadeExample from '../components/Carousel'
import Link from 'next/link'
import { carData } from '../components/StaticData'
export default function Home() {


  return (
    <div className={styles.home}>
      <div className={styles.homeNav}>
        <Container className={styles.container}>
          <div className={styles.homeIcon}>
            <AiFillHome /> 
            <Link href='/'><a>Home</a></Link>
            <MdKeyboardArrowRight /><span>News</span>
          </div>
        </Container>
      </div>
      <Container className={styles.homeContant}>
        <h2 className={styles.header}>
          Latest News
        </h2>
        <div className={styles.imgSection}>
          <div className={styles.navImages}>
            <div className={styles.col}>
              <Image
                src="/../public/car.jpg"
                alt="First slide"
                width='265'
                height='170px'
                
              />
              <div className={styles.overlay}>
                <p>Car News</p>
                <Link href='/cardetails'><a>View Artcile</a></Link>
              </div>
            </div>
            <div className={styles.col}>
              <Image
                src="/../public/boat.jpg"
                alt="Second slide"
                width='265'
                height='170px'
              />
              <div className={styles.overlay}>
                <p>Car News</p>
                <Link href='/cardetails'><a>View Artcile</a></Link>
              </div>
            </div>
            <div className={styles.col}>
              <Image
                src="/../public/motorbike.jpg"
                alt="Third slide"
                width='265'
                height='170px'
              />
              <div className={styles.overlay}>
                <p>Car News</p>
                <Link href='/cardetails'><a>View Artcile</a></Link>
              </div>
            </div>
          </div>
          <div className={styles.carousel}>
            <CarouselFadeExample />
              <div className={styles.carouselText}>
                <div className={styles.date}>
                  <small>04 Sep, 2021 - 05:34 PM </small>
                  <i><BsShareFill /> <small>Share</small></i>
                </div>
                <p>
                  Information about the international cluth aend ways to mantain itInformation about the international cluth and ways to mantain it
                </p>
              </div>
          </div>
        </div>

        <div className={styles.vichles}>
          <div className={styles.row}>
            <Image
              src="/../public/car.jpg"
              alt="First slide"
              width='300px'
              height='250px'
            />
            <div className={styles.carouselText}>
              <div className={styles.date}>
                <small>04 Sep, 2021 - 05:34 PM </small>
                <i><BsShareFill /> <small>Share</small></i>
              </div>
              <p>
                Information about the international cluth and ways to mantain
              </p>
            </div>
          </div>
          <div className={styles.row}>
            <Image
              src="/../public/car.jpg"
              alt="First slide"
              width='300px'
              height='250px'
            />
            <div className={styles.carouselText}>
              <div className={styles.date}>
                <small>04 Sep, 2021 - 05:34 PM </small>
                <i><BsShareFill /> <small>Share</small></i>
              </div>
              <p>
                Information about the international cluth and ways to mantain
              </p>
            </div>
          </div>
          <div className={styles.row}>
            <Image
              src="/../public/car.jpg"
              alt="First slide"
              width='300px'
              height='250px'
            />
            <div className={styles.carouselText}>
              <div className={styles.date}>
                <small>04 Sep, 2021 - 05:34 PM </small>
                <i><BsShareFill /> <small>Share</small></i>
              </div>
              <p>
                Information about the international cluth and ways to mantain
              </p>
            </div>
          </div>
        </div>

        <div className={styles.banner}>
          <Image
            src="/../public/banner2.jpg"
            alt="First slide"
            width='300px'
            height='300px'
          />
        </div>

        <div className={styles.category}>
          <h2 className={styles.header}>
            All News
          </h2>
          <div className={styles.allNews}>
            {carData.map((row, index) => (
              <div key={index} className={styles.categ}>
                <Image
                  src={row.src}
                  alt="car"
                  width='400px'
                  height='200px'
                />
                <div className={styles.carouselText}>
                  <div className={styles.newsData}>
                    <button className={styles.newsBtn}>{row.btn}</button>
                    <i>{row.share} <small>Share</small></i>
                  </div>
                  <p className={styles.newsText}>
                    {row.text}
                  </p>
                  <small>{row.small}</small>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.videos}>
          <div className={styles.row}>
            <div className={styles.videoImg}>
              <Image
              src="/../public/car.jpg"
              alt="First slide"
              width='300px'
              height='250px'
              />
              <div className={styles.videoOverLay}>
                <a href='https://www.youtube.com/watch?v=cXt8L3hAEnM' target='_blank' rel="noreferrer" ><i><FaPlay /></i></a>
              </div>
            </div>
            <div className={styles.carouselText}>
              <div className={styles.date}>
                <small>04 Sep, 2021 - 05:34 PM </small>
                <i><BsShareFill /> <small>Share</small></i>
              </div>
              <p>
                Information about the international cluth and ways to mantain
              </p>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.videoImg}>
              <Image
              src="/../public/car.jpg"
              alt="First slide"
              width='300px'
              height='250px'
              />
              <div className={styles.videoOverLay}>
                <a href='https://www.youtube.com/watch?v=cXt8L3hAEnM' target='_blank' rel="noreferrer" ><i><FaPlay /></i></a>
              </div>
            </div>
            <div className={styles.carouselText}>
              <div className={styles.date}>
                <small>04 Sep, 2021 - 05:34 PM </small>
                <i><BsShareFill /> <small>Share</small></i>
              </div>
              <p>
                Information about the international cluth and ways to mantain
              </p>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.videoImg}>
              <Image
              src="/../public/car.jpg"
              alt="First slide"
              width='300px'
              height='250px'
              />
              <div className={styles.videoOverLay}>
                <a href='https://www.youtube.com/watch?v=cXt8L3hAEnM' target='_blank' rel="noreferrer" ><i><FaPlay /></i></a>
              </div>
            </div>
            <div className={styles.carouselText}>
              <div className={styles.date}>
                <small>04 Sep, 2021 - 05:34 PM </small>
                <i><BsShareFill /> <small>Share</small></i>
              </div>
              <p>
                Information about the international cluth and ways to mantain
              </p>
            </div>
          </div>
        </div>
      </Container>
      </div>
  )
}
