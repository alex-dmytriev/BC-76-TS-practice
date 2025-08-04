// Завдання:

// 1. Створіть тип для `user`.
// 2. Зробіть `address` необов'язковим.
// 3. Перевірте, що `user.address?.city` не викликає помилки.
interface UserData {
    name: string;
    address?: { city: string };
}

const user: UserData= {
  name: "Alice",
  address: {
    city: "Kyiv"
  }
};

console.log(user.address?.city);

