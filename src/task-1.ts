// Опис: Є об'єкт `settings`, який містить налаштування.
// Завдання:
// 1. Створіть тип `Settings`, який описує цей об'єкт.
// 2. Типізуйте `settings` через цей тип.


interface Settings {
  darkMode: boolean;
  fontSize: number;
  language: string;
}

const settings: Settings = {
  darkMode: true,
  fontSize: 16,
  language: "en",
};

console.log(settings);


