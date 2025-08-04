// Напиши функцію getFullName, яка приймає обʼєкт користувача з полями firstName і lastName (обидва типу string) і повертає повне імʼя.
interface User {
    firstName: string;
    lastName: string;
}


function getFullName({ firstName, lastName }:User): string {
    return `${firstName} ${lastName}`;
}

console.log(getFullName ({firstName: "Ann", lastName: "Doe"}));