const baseURL = "https://s3.villa-seaview.online";

export default function myImageLoader({ src, width, quality }) {
  const fullUrl = `${baseURL}${src}`;
  const encodedUrl = encodeURIComponent(fullUrl);
  return `https://api.villa-seaview.online/images/?url=${encodedUrl}&w=${width}&q=${
    quality ?? "85"
  }`;
}
