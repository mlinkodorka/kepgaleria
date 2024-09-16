export default class Kartya {
  #kep = {};
  constructor(kep, szuloElem, index, isNagy = false) {
    this.#kep = kep;
    this.szuloElem = szuloElem;
    this.imgElem = document.createElement("img");
    this.imgElem.src = this.#kep.eleres;
    if (isNagy){
        this.imgElem.classList.add("col", "kiskep", "col-8")
    }
    else{this.imgElem.classList.add("kiskep", "col-sm-6", "col", "col-md-4", "col-lg-3")}
    this.#egyKepKiiras();
    this.index = index;
    this.#esemenyKezelo();
  }

  #egyKepKiiras() {
    this.szuloElem.append(this.imgElem);
  }

  #esemenyKezelo() {
    this.imgElem.addEventListener("click", (event) => {
      console.log(this.imgElem);
      const e = new CustomEvent("kivalaszt", { detail: this.index });
      window.dispatchEvent(e);
    });
  }
}
