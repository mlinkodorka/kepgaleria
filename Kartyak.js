import Kartya from "./Kartya.js";

export default class Kartyak {
  #lista = [];
  constructor(lista, szuloElem) {
    this.#lista = lista;
    console.log(this.#lista);
    this.szuloElem = szuloElem;
    this.szuloElem.empty();

    this.#kepekKiir();
  }

  #kepekKiir() {
    console.log("asd");
    this.#lista.forEach((kep, index) => {
      new Kartya(kep, this.szuloElem, index);
    });
  }
}
