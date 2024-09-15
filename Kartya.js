export default class Kartya {
    #kep = {};
    constructor(kep, szuloElem) {
        this.#kep = kep;
        this.szuloElem = szuloElem;
        this.elem = document.createElement('div');
        this.elem.classList.add('kartya');
        this.kepElem = document.createElement('img');
        this.kepElem.src = this.#kep.utvonal; 
        this.kepElem.alt = this.#kep.cim;
        this.elem.appendChild(this.kepElem);

        }}