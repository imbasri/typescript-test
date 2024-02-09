/**
 * enum
 */

enum Direction {
  Up,
  Down,
  Left,
  Right,
}
console.log(Direction);
//membuat enum menjadi urutan 1
enum Direction2 {
  Up = 1,
  Down,
  Left,
  Right,
}
console.log(Direction2);

enum StatusCodes {
  notFound = 404,
  badRequest = 400,
  internalServerError = 500,
  success = 200,
  auth = 401,
  accept = 402,
}

console.log(StatusCodes);
console.log(StatusCodes.success);

enum Color {
  Red = "#f00",
  Green = "#0f0",
  Blue = "#00f",
}
console.log(Color);

enum Action {
  save,
  delete,
  update,
}

function getAction(question: string, action: Action) {
  console.log(question, action);
}
getAction("hello", Action.save);

enum Direction3 {
  Up,
  Down,
  Right,
  Left,
}

console.log(Direction3.Up);
console.log(Direction3[0]);
