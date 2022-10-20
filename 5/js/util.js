/** Функция для проверки максимальной длины строки.
 * @param {string} checkedString Тестируемая строка
 * @param {number} maxLength Максимальная длина строки
 * @returns {boolean} Возвращает **true**, если строка проходит проверку на максимальную длину, в противном случае - **false**
 * */
const checkCommentLength = (checkedString, maxLength) =>
  checkedString.length <= maxLength;

/** Функция, возвращающая случайное целое число из переданного диапазона включительно.
 * @param {number} from Первое значение для диапазона
 * @param {number} to Второе значение для диапазона
 * @returns {number} Возвращает случайное целое число из переданного диапазона включительно или NaN, если переданное
 * значение не число или меньше 0
 *
 * [Random function documentation]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values}
 * */
const getRandomNumber = (from, to) => {
  if (isNaN(from) || from < 0 || isNaN(to) || to < 0) {
    return NaN;
  }

  if (from === to) {
    return from;
  }

  const min = Math.min(from, to);
  const max = Math.max(from, to);

  return Math.floor(Math.random() * (max - min + 1) + min);
};

export { getRandomNumber, checkCommentLength };
