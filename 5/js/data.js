import { getRandomNumber } from './util.js';

const PHOTOS_COUNT = 25;
const LIKES_MIN_COUNT = 15;
const LIKES_MAX_COUNT = 200;
const COMMENTS_MIN_COUNT = 0;
const COMMENTS_MAX_COUNT = 200;

const createPhotoDescriptionItem = (_, index) => ({
  description: `Описание фотографии: ${getRandomNumber(0, PHOTOS_COUNT)}`,
  likes: getRandomNumber(LIKES_MIN_COUNT, LIKES_MAX_COUNT),
  comments: getRandomNumber(COMMENTS_MIN_COUNT, COMMENTS_MAX_COUNT),
  id: index + 1,
  url: `photos/${index + 1}.jpg`,
});

const createPhotoDescriptionsArray = () =>
  Array.from({ length: PHOTOS_COUNT }, createPhotoDescriptionItem);

export default createPhotoDescriptionsArray;
