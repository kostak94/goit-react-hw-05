export function getImageUrl(imagePath) {
  return `https://image.tmdb.org/t/p/w500/${imagePath}`;
}

export function getReleaseDate(date) {
  return date.slice(0, 4);
}
