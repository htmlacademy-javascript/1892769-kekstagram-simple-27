import { showAlert } from './util.js';
import { appErrors } from './errors.js';

export const getImgData = async () => {
  let response;

  try {
    response = await fetch(
      'https://27.javascript.pages.academy/kekstagram-simple/data'
    ).catch(() => {
      throw new Error('500');
    });

    if (!response.ok) {
      throw new Error(`${response.status}`);
    }
  } catch ({ message }) {
    showAlert(appErrors[message] || 'Непредвиденная ошибка.');
  }

  return await response.json();
};

export const sendFormData = async (body) => {
  let response;

  try {
    response = await fetch(
      'https://27.javascript.pages.academy/kekstagram-simple',
      {
        method: 'POST',
        body: body,
      }
    );

    if (!response.ok) {
      throw new Error(`${response.status}`);
    }
  } catch (err) {
    return false;
  }
  return true;
};
