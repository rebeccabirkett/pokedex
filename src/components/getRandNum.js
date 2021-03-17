// random number generator for selecting a random pokemon
export const getRandNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
