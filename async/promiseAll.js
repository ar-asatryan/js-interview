const getCountA = function () {
  return new Promise((res, rej) => res(25));
};

const getCountB = function () {
  return new Promise((res, rej) => res(15));
};

console.log(getCountA(), getCountB());
// async function getCount() {
//   const a = await getCountA();
//   const b = await getCountB();
//   console.log(a + b);
// }

async function getCount() {
  return await Promise.all([getCountA(), getCountB()]).then((data1, data2) =>
    console.log(data1, data2)
  );
}

getCount();
