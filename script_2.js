let obj = {};
export let lista_nomi = ["Fra", "Riccio", "Cri", "Dado"];

export const function_1 = (obj, lista_nomi) => {
  obj.contatti = lista_nomi;
  return obj;
};

export const function_2 = ({ contatti }) => {
  return `I contatti sono: ${contatti}`;
};
