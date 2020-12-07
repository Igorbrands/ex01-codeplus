//a função deve dar console.log em cada um dos desenvolvedores da e-plus.

const eplusDevList = [
  'Parça',
  'Galego',
  'Xará',
  'Baqueta',
  'Na',
  'Lindo',
  'Pablito',
  'Bahia',
];

//Solução com método forEach():
function listDevs() {
  eplusDevList.forEach((list) => console.log(list));
}

listDevs(eplusDevList);

//Solução com for loop:
// function listDevs(list) {
//   for (let i = 0; i < list.length; i++) {
//     console.log(list[i]);
//   }
// }
// listDevs(eplusDevList);
