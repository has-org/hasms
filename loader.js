const baseURL = "https://s3.villa-seaview.online";

export default function myImageLoader({ src, width, quality }) {
  return `https://api.villa-seaview.online/images/?url=${baseURL}${src}&w=${width}&q=${quality ?? '85'}`;
}
