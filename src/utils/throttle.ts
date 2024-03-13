export const throttle = (func: (args: any) => void, time: number) => {
  let throttled: boolean = false;

  return (args: any) => {
    if (!throttled) {
      throttled = true;
      setTimeout(() => {
        func(args);
        throttled = false;
      }, time);
    }
  };
};
