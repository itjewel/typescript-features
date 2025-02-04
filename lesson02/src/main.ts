let nam: string | number;
let num: number;
let bol: boolean;
let unkn: unknown;

nam = "";
num = 899;
bol = true;
unkn = 345;

const sum = (a: number, b: string) => {
  return a + b;
};

const rsult = sum(2, "3");

let postId: string | number;
let isActive: number | boolean;

let re: RegExp = /\w+/g;

console.log(re);
console.log(rsult);
