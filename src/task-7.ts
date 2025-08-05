interface Users {
    name: string;
    age: number;
}


const users: Users[] = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
];

users.push({ name: "John", age: 80});

console.log(users);

console.log(Object.keys(users[0]));

// Завдання:

// 1. Створіть інтерфейс `User`, який описує структуру об'єкта з іменем і віком.
// 2. Типізуйте змінну `users`.
// 3. Додайте ще одного користувача до масиву, дотримуючись структури.
// 4. Переконайтеся, що TypeScript не дозволяє додати об'єкт без обов'язкових полів (`name`, `age`).