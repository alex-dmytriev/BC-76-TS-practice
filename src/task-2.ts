// Опис: Є функція, яка приймає суму (число) та тип валюти.
// Завдання:

// 1. Типізуйте параметри функції дозволивши властивості `currency` лише одне із значень `"USD"`, `"EUR"`, `"UAH"`.
// 2. Типізуйте повернення функції.

type Currency = 'USD' | 'EUR' | 'UAH';

interface CurrencyParams {
    amount: number;
    currency: Currency;
}

function convertCurrency({amount, currency}: CurrencyParams): void {
  console.log(`Converting ${amount} to ${currency}`);
}

convertCurrency({ amount: 100, currency: 'USD' });
