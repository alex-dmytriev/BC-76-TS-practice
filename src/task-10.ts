enum Role {
  Admin,
  User,
  Guest,
}

function getPermissions(role: Role): string[] {
  switch (role) {
    case Role.Admin:
      return ["create", "read", "update", "delete"];

    case Role.User:
      return ["read", "update"];
    case Role.Guest:
      return ["read"];

    default:
      return [];
  }
}

// function getPermissions(role: Role): string[] {
//   if (role === Role.Admin) {
//     return ["create", "read", "update", "delete"];
//   }
//   else if (role === Role.User) {
//     return ["read", "update"];
//   }
//   else if (role === Role.Guest) {
//     return ["read"];
//   } else {
//     return [];
//   }
// }

console.log(getPermissions(Role.Guest));

//   Завдання:

//   1. Створіть функцію `getPermissions`, яка приймає параметр `role` типу `Role`.
//   2. Функція має повертати масив рядків, які описують права доступу для кожної ролі:
//       - `Admin` має права: `"create"`, `"read"`, `"update"`, `"delete"`
//       - `User` має права: `"read"`, `"update"`
//       - `Guest` має лише право: `"read"`
//   3. Типізуйте параметр і тип повернення функції `getPermissions`.
//   4. Перевірте, що TypeScript не дозволяє передати в `getPermissions` значення, якого немає в `Role`.
