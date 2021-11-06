class Kartya {
    constructor(htmlDomElem, adat) {
        this.elem = htmlDomElem;
        this.adat = adat;
        //console.log(this.adat);
        //console.log(this.elem);
        this.cimElem = this.elem.children("h3");
        this.kepElem = this.elem.children("img");
        this.leirasElem = this.elem.children("p");
        this.arElem = this.elem.children("span");
        this.setAdat(this.adat);
    }

    setAdat(ertek) {
        this.cimElem.html(ertek.nev);
        this.kepElem.attr("src", ertek.kep);
        this.leirasElem.html(ertek.leiras);
        this.arElem.html(ertek.ar + " Ft");
    }
}
