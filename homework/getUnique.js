/**
 * Напишите функцию getUnique(input), возвращающую новый массив,
 * состоящий из уникальных значений массива input. Результирующий
 * массив должен быть отсортирован по возрастанию.
 *
 * Не использовать Set().
 *
 * Пример:
 * getUnique([1, 1, 2, 6, 3, 6, 2]); // [1, 2, 3, 6]
 *
 * @param  {number[]} input исходный массив
 * @return {number[]} массив уникальных значений, отсортированный по возрастанию
 */
export function getUnique(input) {
  const uniqueValues = [];

  for (const s of input) {
    if (uniqueValues.indexOf(s) === -1) {
      uniqueValues.push(s);
    }
  }

  function compareNumeric(a, b) {
    if (a > b) { return 1; }
    if (a < b) { return -1; }
    return 0;
  }


  return uniqueValues.sort(compareNumeric);
}
