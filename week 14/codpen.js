let quotes = [
  "У меня такое правило: завтра варенье и вчера варенье, но сегодня – никогда",
  "Миром движет любовь. Именно она заставляет Землю вертеться!",
  "Алиса, надо сказать, частенько давала себе очень разумные советы, но довольно редко следовала им",
  "Нет ничего на свете, из чего нельзя было бы сделать вывод. Надо только знать, как взяться за дело",
  "Не слово ценится, а дело",
];

// Создайте (объявите) функцию getRandomElement. Сделайте её телом три строки кода:

function getRandomElement() {
  let randIndex = Math.floor(Math.random() * quotes.length);
  console.log(randIndex);
  console.log(quotes[randIndex]);
}
// Функция getRandomElement объявлена. Вызовите её.

getRandomElement();

// Функция уже вызвана. Измени (перепиши) функцию getRandomElement, чтобы она была объявлена при помощи Function Expression.

function getRandomElement() {
  let randIndex = Math.floor(Math.random() * quotes.length);
  console.log(randIndex);
  console.log(quotes[randIndex]);
}

getRandomElement();

let getRandomElement1 = function () {
  let randIndex1 = Math.floor(Math.random() * quotes.length);
  console.log(randIndex1);
  console.log(quotes[randIndex1]);
};

getRandomElement1();

// Перепишите функциональные выражения, используя стрелочные функции.

const wannaBeArrow = function () {
  console.log("Сделайте меня стрелочной, пожалуйста");
};

const wannaBeArrowToo = function (developerName) {
  console.log(`${developerName}, сделайте меня стрелочной, пожалуйста`);
};

wannaBeArrow();
wannaBeArrowToo("Кот Ученый");

const wannaBeArrow1 = () => {
  console.log("Сделайте меня стрелочной, пожалуйста");
};

const wannaBeArrowToo1 = (developerName) => {
  console.log(`${developerName}, сделайте меня стрелочной, пожалуйста`);
};

wannaBeArrow1();
wannaBeArrowToo1("Кот Ученый");
