export const cx = (...classNames) =>
  classNames.filter(Boolean).join(" ");

export const myLoader = ({ src }) => {
  return src;
};
