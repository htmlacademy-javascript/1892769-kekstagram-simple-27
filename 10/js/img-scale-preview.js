import { imgPreviewFile, imgScaleValue } from './dom-elements.js';

export const INITIAL_IMG_SCALE = 100;
export const SCALE_STEP = 25;
const MIN_SCALE_IMG = 25;
const MAX_SCALE_IMG = 100;

export const setInitialImgScale = (initialScale) => {
  imgScaleValue.value = `${initialScale}%`;
  imgPreviewFile.style.transform = `scale(${initialScale / 100})`;
};

export const onImgScaleButtonClick = (step) => {
  const imgScalePercent = +imgScaleValue.value.slice(0, -1);

  if (
    (imgScalePercent === MAX_SCALE_IMG && step > 0) ||
    (imgScalePercent === MIN_SCALE_IMG && step < 0)
  ) {
    return;
  }

  const newImgScale = imgScalePercent + step;

  imgScaleValue.value = `${newImgScale}%`;

  imgPreviewFile.style.transform = `scale(${newImgScale / 100})`;
};

export const onBiggerScaleButtonClick = () => onImgScaleButtonClick(SCALE_STEP);
export const onSmallerScaleButtonClick = () =>
  onImgScaleButtonClick(-SCALE_STEP);
