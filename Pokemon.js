// Egy pokemonnak van neve, tartozik hozzá egy kép, egy mondat amit ki tud mondani.


export default class Pokemon {
    //privát adattagok létrehozása a konstruktor előtt, #-el
    #nev="";
    #kep="";
    #mondat="";
    constructor(nev, kep, szuloElem){
        // this mindig a konkrét objektumpéldányra mutat
        this.#nev = nev;
        this.#kep = kep;
        this.#mondat = "Jó estét!";
        this.szuloElem=szuloElem
        this.#megjelenit()
    }

    beszel(){
        console.log(this.#mondat);
    }

    #megjelenit(){
        let txt= `<div class="poki">`
        txt += `
                <h3>${this.#nev}</h3>
                <img src="${this.#kep}" alt='kep'>
        `
        txt += `</div>`
        this.szuloElem.append(txt)
    }

    //getter a névre:
    get nev(){
    return this.#nev
}

    set mondat(szoveg){
        // kiszűrjük a csúnya szavakat
        this.#mondat = szoveg
    }

}