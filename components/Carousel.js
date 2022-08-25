import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image'
function CarouselFadeExample() {
    return (
        <Carousel fade>
            <Carousel.Item>
                <Image
                    src="/../public/car.jpg"
                    alt="First slide"
                    width='1100px'
                    height='400px'
                />
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    src="/../public/boat.jpg"
                    alt="Second slide"
                    width='1100px'
                    height='400px'
                />
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    src="/../public/motorbike.jpg"
                    alt="Third slide"
                    width='1100px'
                    height='400px'
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselFadeExample;