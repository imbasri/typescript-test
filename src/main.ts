console.log("Hello world");
// type data any yaitu bebas atau me-ignore type data
let data: any = {
  name: "Nik",
  age: 20,
};
console.log(data.name);
let w: unknown = 1;
w = "string";
w = {
  runNonExixtsMethod: () => {
    console.log("runNonExixtsMethod");
  },
} as { runNonExixtsMethod: () => void };

//type data never menjalankan / return error

function throwError(message: string): never {
  throw new Error(message);
}

// throwError("error nich");
function assertNever(x: never): never {
  throw new Error("error" + x);
}

function printAnimal(animal: "cat" | "dog" | "bird"): void {
  switch (animal) {
    case "cat":
      console.log("cat");
      break;
    case "dog":
      console.log("dog");
      break;
    case "bird":
      console.log("bird");
      break;
    default:
      assertNever(animal);
  }
}

printAnimal("cat");
// printAnimal("cat2");
