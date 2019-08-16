export function parseDuration(ms) {
  const seconds = Math.floor(ms/1000);
  const minutes = Math.floor(seconds/60);
  
  return { seconds, minutes };
  }

export function padLeft(number) {

if (number < 10) {
    return `0${number}`;
  }
    return `${number}`;}
    