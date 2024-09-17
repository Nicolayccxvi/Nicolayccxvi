//@Nico løst med switch statement "https://www.w3schools.com/js/js_switch.asp"

document.addEventListener("DOMContentLoaded", function () {
    const rødtLys = document.getElementById("rødtLys");
    const gultLys = document.getElementById("gultLys");
    const grøntLys = document.getElementById("grøntLys");

    let nåværendeFase = 0;

    function slåAvAlleLys() {
        rødtLys.classList.remove("rødt");
        gultLys.classList.remove("gult");
        grøntLys.classList.remove("grønt");
    }

    function byttLys() {
        slåAvAlleLys();

        switch (nåværendeFase) {
            case 0:
                rødtLys.classList.add("rødt");
                nåværendeFase = 1;
                break;
            case 1:
                rødtLys.classList.add("rødt");
                gultLys.classList.add("gult");
                nåværendeFase = 2;
                break;
            case 2:
                grøntLys.classList.add("grønt");
                nåværendeFase = 3;
                break;
            case 3:
                gultLys.classList.add("gult");
                nåværendeFase = 0;
                break;
        }
    }

    byttLys();

    setInterval(byttLys, 2000);
});
