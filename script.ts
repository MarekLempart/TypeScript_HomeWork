const myFunction = (name: string, a: number, b: number, array: number[]) => {
  console.log(`Hello ${name}`);
  array.forEach((element) => {
    console.log(element);
  });
  return a + b;
};

myFunction("Marek", 1, 2, [1, 2, 3]);
