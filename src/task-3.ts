// Опис: Є об'єкт користувача:

// Завдання:

// 1. Типізуйте `user`.
// 2. Зробіть властивість id тільки для читання.
interface User {
    readonly id: string; 
    name: string;
    age: number;
    active: boolean;
}
const user: User = { id: "1", name: "Charlie", age: 25, active: true };
console.log(user);
