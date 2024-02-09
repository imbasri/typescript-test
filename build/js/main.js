"use strict";
/**
 * enum
 */
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
console.log(Direction);
//membuat enum menjadi urutan 1
var Direction2;
(function (Direction2) {
    Direction2[Direction2["Up"] = 1] = "Up";
    Direction2[Direction2["Down"] = 2] = "Down";
    Direction2[Direction2["Left"] = 3] = "Left";
    Direction2[Direction2["Right"] = 4] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2);
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["notFound"] = 404] = "notFound";
    StatusCodes[StatusCodes["badRequest"] = 400] = "badRequest";
    StatusCodes[StatusCodes["internalServerError"] = 500] = "internalServerError";
    StatusCodes[StatusCodes["success"] = 200] = "success";
    StatusCodes[StatusCodes["auth"] = 401] = "auth";
    StatusCodes[StatusCodes["accept"] = 402] = "accept";
})(StatusCodes || (StatusCodes = {}));
console.log(StatusCodes);
console.log(StatusCodes.success);
var Color;
(function (Color) {
    Color["Red"] = "#f00";
    Color["Green"] = "#0f0";
    Color["Blue"] = "#00f";
})(Color || (Color = {}));
console.log(Color);
var Action;
(function (Action) {
    Action[Action["save"] = 0] = "save";
    Action[Action["delete"] = 1] = "delete";
    Action[Action["update"] = 2] = "update";
})(Action || (Action = {}));
function getAction(question, action) {
    console.log(question, action);
}
getAction("hello", Action.save);
var Direction3;
(function (Direction3) {
    Direction3[Direction3["Up"] = 0] = "Up";
    Direction3[Direction3["Down"] = 1] = "Down";
    Direction3[Direction3["Right"] = 2] = "Right";
    Direction3[Direction3["Left"] = 3] = "Left";
})(Direction3 || (Direction3 = {}));
console.log(Direction3.Up);
console.log(Direction3[0]);
