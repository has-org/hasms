const API_HOST = process.env.NEXT_PUBLIC_API_HOST;
const IMG_HOST = process.env.NEXT_PUBLIC_API_IMG_HOST;
const BUCKET_NAME = process.env.NEXT_PUBLIC_BUCKET_NAME;

export default function myImageLoader({ src, width, quality }) {
  const fullUrl = `${IMG_HOST}/${BUCKET_NAME}/${src}`;
  const encodedUrl = encodeURIComponent(fullUrl);
  return `${API_HOST}/images/?url=${encodedUrl}&w=${width}&q=${quality ?? '85'}`;
}
