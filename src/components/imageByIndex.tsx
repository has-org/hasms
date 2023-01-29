import { StaticImageData } from 'next/image'
import image4 from '../../public/slide-4.jpg'
import logo from '../../public/logo.png'
import logo1 from '../../public/logo2.jpg'

export const images: StaticImageData[] = [logo, logo1, image4]

const imageByIndex = (index: number): StaticImageData => images[index % images.length]

export default imageByIndex
