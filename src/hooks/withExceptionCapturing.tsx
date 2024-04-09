export function withExceptionCapturing<S, T extends any[]>(
    fn: (...rest: T) => Promise<S>,
  ) {
    return (...args: T) => {
      fn(...args).catch((error) => {
        console.log("Unexpected error", error);
      });
    };
  }