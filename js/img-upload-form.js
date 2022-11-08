import {
  clearElementTextContent,
  clearFieldValue,
  isEscapeKey,
} from './util.js';
import {
  commentTextArea,
  errorModal,
  imgPreviewFile,
  noImgEffectInput,
  uploadCancelButton,
  uploadForm,
  uploadInput,
  uploadModal,
} from './dom-elements.js';
import { INITIAL_IMG_SCALE, setInitialImgScale } from './img-scale-preview.js';
import { clearImgEffect, clearImgFilter, updateSlider } from './img-effects.js';
import { onSubmitButtonClick } from './submit-upload-form.js';

const removeCommentErrorMessage = () => {
  const text = document.querySelector('.text');
  const textError = text.querySelector('.text__error');
  if (textError) {
    clearElementTextContent(textError);
  }
};

const clearUploadForm = () => {
  clearImgEffect();
  removeCommentErrorMessage();
  clearImgFilter();
  setInitialImgScale(INITIAL_IMG_SCALE);
  clearFieldValue(uploadInput);
  clearFieldValue(commentTextArea);
  noImgEffectInput.checked = true;
};

const onModalEscKeydown = (evt) => {
  if (isEscapeKey(evt) && !errorModal()) {
    evt.preventDefault();
    closeUploadForm();
  }
};

function openUploadForm(event) {
  imgPreviewFile.src = URL.createObjectURL(event.target.files[0]);
  uploadModal.classList.remove('hidden');
  document.body.classList.add('modal-open');
  uploadForm.addEventListener('submit', onSubmitButtonClick);
  document.addEventListener('keydown', onModalEscKeydown);
  uploadCancelButton.addEventListener('click', closeUploadForm);
  setInitialImgScale(INITIAL_IMG_SCALE);
  updateSlider();
}

function closeUploadForm() {
  clearUploadForm();
  uploadModal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  uploadForm.removeEventListener('submit', onSubmitButtonClick);
  document.removeEventListener('keydown', onModalEscKeydown);
  uploadCancelButton.removeEventListener('click', closeUploadForm);
}

const onUploadInputChange = () => {
  uploadInput.addEventListener('change', openUploadForm);
};

export { onUploadInputChange, closeUploadForm, clearUploadForm };
