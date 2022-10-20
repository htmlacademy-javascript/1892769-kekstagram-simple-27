import createPhotoDescriptionsArray from './data.js';

const picturesContainer = document.querySelector('.pictures');
const templatePicture = document
  .querySelector('#picture')
  .content.querySelector('.picture');

const renderPictures = () => {
  const picturesFragment = document.createDocumentFragment();

  const pictures = createPhotoDescriptionsArray();

  pictures.forEach(({ url, likes, comments }) => {
    const newPicture = templatePicture.cloneNode(true);
    newPicture.querySelector('.picture__img').src = url;
    newPicture.querySelector('.picture__likes').textContent = `${likes}`;
    newPicture.querySelector('.picture__comments').textContent = `${comments}`;
    picturesFragment.append(newPicture);
  });

  picturesContainer.append(picturesFragment);
};

export { renderPictures };
