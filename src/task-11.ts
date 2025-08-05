// Завдання:

// 1. Створіть інтерфейс `Container`, що містить:
//     - масив `items` однакового типу для зберігання елементів.
//     - метод `addItem`, який додає елемент до контейнера.
//     - метод `getItem`, який повертає елемент за індексом.
// 2. Створіть два контейнери:
// - `numberContainer`, який містить числа та використовує відповідну типізацію.
// - `stringContainer`, який містить рядки та також використовує відповідну типізацію.
// 1. Використовуйте методи `addItem`, `getItem` для перевірки роботи контейнера.
// 2. Створіть функцію `getLastElement`, яка приймає масив елементві контенера `Container` і повертає останній елемент масиву.
// 3. Переконайтесь, що функція `getLastElement` працює коректно для різних типів контейнерів (масиви чисел, масиви рядків).

// Примітка:

// 1. Контейнер має підтримувати тільки один тип елементів.

interface Container<T> {
  items: T[];
  addItem: (item: T) => void;
  getItem: (index: number) => T;
}

const numberContainer: Container<number> = {
  items: [1, 2, 3],
  addItem(item) {
    this.items.push(item);
  },
  getItem(index) {
    return this.items[index];
  },
};

const stringContainer: Container<string> = {
  items: ["asd", "asdasda", "Oleh"],
  addItem(item) {
    this.items.push(item);
  },
  getItem(index) {
    return this.items[index];
  },
};

numberContainer.addItem(5);
console.log(numberContainer.items);

stringContainer.addItem("ahh");
console.log(stringContainer.items);
