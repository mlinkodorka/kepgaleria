import Kartya from "./Kartya.js";

const kepgaleria = [];

const kepek = [
    { utvonal: './Pictures/Dezi.jpg', cim: 'Dézi' },
    { utvonal: './Pictures/Floki.jpg', cim: 'Floki' },
    { utvonal: './Pictures/Jeno.jpg', cim: 'Jenő' }
];

const tartalomDiv = document.querySelector('.tartalom');

kepek.forEach(kep => {
    const ujKartya = new Kartya(kep, tartalomDiv);
    kepgaleria.push(ujKartya);
});
