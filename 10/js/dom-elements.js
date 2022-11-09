export const body = document.querySelector('body');

//Галерея изображений
export const picturesContainer = document.querySelector('.pictures');
export const templatePicture = document
  .querySelector('#picture')
  .content.querySelector('.picture');

//Форма редактирования фотографии
export const uploadModal = document.querySelector('.img-upload__overlay');
export const uploadForm = document.querySelector('.img-upload__form');
export const uploadInput = document.querySelector('#upload-file');
export const commentTextArea = uploadModal.querySelector(
  '[name="description"]'
);
export const uploadCancelButton = document.querySelector('#upload-cancel');
export const imgPreview = uploadForm.querySelector('.img-upload__preview');
export const imgPreviewFile = imgPreview.querySelector('img');
export const imgMiniPreviews = uploadForm.querySelectorAll('.effects__preview');
export const sliderEffectWrapper = uploadForm.querySelector('.effect-level');
export const sliderEffectIntensity = uploadForm.querySelector(
  '.effect-level__slider'
);
export const effectIntensityInput = uploadForm.querySelector(
  '.effect-level__value'
);
export const noImgEffectInput = uploadForm.querySelector('#effect-none');
export const uploadSubmitButton = document.querySelector('#upload-submit');
export const effectsList = document.querySelector('.effects');

//Изменение масштаба превью изображения в форме редактирования
export const imgScale = document.querySelector('.scale');
export const imgScaleBiggerButton = imgScale.querySelector(
  '.scale__control--bigger'
);
export const imgScaleSmallerButton = imgScale.querySelector(
  '.scale__control--smaller'
);
export const imgScaleValue = imgScale.querySelector('.scale__control--value');

//Модальные окна об ошибке и успехе в отправке фотографии
export const templateSuccessModal = document
  .querySelector('#success')
  .content.querySelector('.success');

export const successModalCloseButton = () =>
  document.querySelector('.success__button');

export const successModal = () => document.querySelector('.success');

export const templateErrorModal = document
  .querySelector('#error')
  .content.querySelector('.error');

export const errorModalCloseButton = () =>
  document.querySelector('.error__button');

export const errorModal = () => document.querySelector('.error');
