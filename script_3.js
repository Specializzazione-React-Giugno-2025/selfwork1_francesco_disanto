import student from "./script_1.js";
import { function_1, function_2 } from "./script_2.js";

const lista_nomi = ["Fra", "Riccio", "Cri", "Dado"];

const new_obj = function_1(student, lista_nomi);

console.log(new_obj);

console.log(function_2(new_obj));
