const ROOT_FONT_SIZE = 16;

const pixelToRem = (pixel: number): string => {
  return pixel / ROOT_FONT_SIZE + "rem";
};

export default pixelToRem;
