// Завдання:

// 1. Типізуйте функцію повністю: параметри і повернення функції.
interface UserData {
    name: string;
    age: number;
}
// interface GetUser {
//      name: string;
//     age: number;
//     isAdmin: boolean;
// }
interface GetUser extends UserData {
    isAdmin: boolean;
}
function createUser({ name, age }: UserData): GetUser{
  return {
    name,
    age,
    isAdmin: false
  };
}

console.log(createUser({ name: "Alice", age: 30 })); 
