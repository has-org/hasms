import { StaticImageData } from 'next/image'
import slide1 from '../../public/carousel/slide1.jpg'
import slide2 from '../../public/carousel/slide2.jpg'

export const images: StaticImageData[] = [slide1, slide2]

const imageByIndex = (index: number): StaticImageData => images[index % images.length]

export default imageByIndex
