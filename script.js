function beli(nama){

let nomor = "6283837033723";

let pesan = `Halo admin saya ingin membeli ${nama}`;

window.open(`https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`);

}