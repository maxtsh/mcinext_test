const debounce = (fn: (...args: any) => any, delay: number = 500) => {
  let to: ReturnType<typeof setTimeout> | null = null;
  return (...args: any) => {
    if (to) clearTimeout(to);
    to = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};
export default debounce;
