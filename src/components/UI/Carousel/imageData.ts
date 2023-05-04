// async function getCarouselImages() {
//   try {
//     const res = await fetch('http://localhost:8000/carousel-featured-images', {
//       method: 'GET',
//     });
//     if (res.status !== 200) {
//       throw new Error('Failed to fetch data');
//     }
//     return res.json();
//   } catch (e) {
//     return null
//   }
// }

// const returnImageUrls = async () => {
//   const images = await getCarouselImages();
//   return images.map((image: any) => image.url);
// }

// console.log(returnImageUrls())

// export const images = 

export const images = [
    "http://localhost:9000/images/1.jpg",
    "http://localhost:9000/images/22.jpeg",
    "http://localhost:9000/images/23.jpg",
    "http://localhost:9000/images/5.jpg",
  ];
  