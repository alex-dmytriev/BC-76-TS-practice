// Є функція `sendDoneStatus`

type Callback = (message: string) => void;

function sendDoneStatus(callback: Callback): void {
  callback("done");
}

sendDoneStatus((message) => {
  console.log(message);
});

// 1. Типізуйте параметр `callback`, щоб це була функція, яка приймає рядок і повертав void.
