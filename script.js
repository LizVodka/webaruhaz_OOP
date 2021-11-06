$(function () {
    const termekek = [];
    adatbeolvasas("termekek.json", termekek, megjelenit);

    function megjelenit() {
        const galeria = $("#galeria");
        const sablonElem = $(".kartya"); //ez a mintaelem, amit másolgatunk
        console.log(termekek);
        termekek.forEach(function (tombelem) {
            let ujElem = sablonElem.clone().appendTo(galeria);
            let ujKartya = new Kartya(ujElem, tombelem);
        });
        sablonElem.remove();
    }
    function adatbeolvasas(fajlnev, tomb, myCallback) {
        $.ajax({
            url: fajlnev,
            success: function (result) {
                console.log("result:" + result);
                result.forEach((value) => {
                    tomb.push(value);
                });
                console.log("tömb: " + tomb);

                myCallback();
            },
        });
    }
});
