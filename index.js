// Code your solutions in this file

function writeCards(names, eventName) {
    const namesArr = [];
  for (let i = 0; i < names.length; i++) {
    namesArr.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
  }
  return namesArr;
}

writeCards(["Charlie", "Samip", "Ali"], "birthday");

function countDown(number) {
    for (let i = number; i >= 0; i--) {
        console.log(i);
    }
}

countDown(10);