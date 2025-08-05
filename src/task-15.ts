// Функція `fetchUsers` повертає проміс, який через `axios` отримує список користувачів з API.

import axios from "axios";

interface User {
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
  address: {
    city: string;
    geo: { lat: string; lng: string };
    street: string;
    suite: string;
    zipcode: string;
  };
  company: {
    bs: string;
    catchPhrase: string;
    name: string;
  };
}

const fetchUsers = async (): Promise<User[]> => {
  const response = await axios.get<User[]>(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
};

const getUsers = async () => {
  const users = await fetchUsers();
  console.log(users);
};

getUsers();

// Завдання:
// 1. Оголосіть інтерфейс `User` для користувача (перевірте, які властивості користувача містяться у відповіді бекенда).
// 2. Типізуйте функцію `fetchUsers`.

const numbers = [1, 2, 3, 4, 5];

const filterNumbers = numbers.reduce((acc, item) => {
  if (item % 2 === 0) {
    acc.push(item);
  }
  return acc;
}, []);

console.log(filterNumbers);
