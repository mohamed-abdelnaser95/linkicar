import React from 'react'
import { Container } from 'react-bootstrap'
import { AiFillHome } from 'react-icons/ai'
import { MdKeyboardArrowRight } from 'react-icons/md'
import Image from 'next/image'
import styles from '../styles/CarDetails.module.css'
import { BsShareFill } from 'react-icons/bs'
import Link from 'next/link'

const cardetails = () => {
    return (
        <div>
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
                Information about the international clutch and ways to maintain it.Information about the international clutch and 
                ways to maintain it.
            </h2>
            <div className={styles.content}>
                <Image
                    src= '/../public/motorbike.jpg'
                    alt='Third slide'
                    width='1100px'
                    height='400px'
                />
                <div className={styles.carouselText}>
                    <div className={styles.date}>
                        <small>04 Sep, 2021 - 05:34 PM </small>
                        <i><BsShareFill /> <small>Share</small></i>
                    </div>
                    <p>
                        Written by John doe
                    </p>
                </div>
                <article className={styles.article}>
                    <section>
                    Section 1.10.32 of de Finibus Bonorum et Malorum, written by Cicero in 45 BC
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                    1914 translation by H. Rackham
                    But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?
                    <br />
                    <p>
                        <b>Section 1.10.33 of de Finibus Bonorum et Malorum</b>
                    </p>
                    
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                    
                    </section>
                    <section>
                    
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                    
                    
                    <br />
                    <p>
                        <b>Section 1.10.33</b>
                    </p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                    
                    <br></br>
                    <p>
                        <b>Section 1.10.33</b>
                    </p>

                    de Finibus Bonorum et Malorum, written by Cicero in 45 BC
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                    </section>
                </article>
            </div>
            <div className={styles.tags}>
            <h2>Tags</h2>
                <button>First Owner</button>
                <button>2022 cars</button>
            </div>
            <h2 className={styles.header}>
                Related News
            </h2>
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
                <small className={styles.subNews}>Sun news</small>
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
              <small className={styles.subNews}>Sun news</small>
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
                <small className={styles.subNews}>Sun news</small>
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

export default cardetails