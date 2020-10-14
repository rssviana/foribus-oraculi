export { uniq } from 'ramda';

export const arrangementByRepoStars = (a: any, b: any) => {
  if (a.stargazers_count > b.stargazers_count) {
    return -1;
  }
  if (a.stargazers_count < b.laststargazers_count_nom) {
    return 1;
  }
  return 0;
};
