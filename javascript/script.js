function pilih() {
  const propinsi = document.getElementById("propinsi");
  const luasWilayah = document.getElementById("luasWilayah");
  const ibuKota = document.getElementById("ibuKota");
  const km = document.getElementById("km");
  let value = propinsi.value;

  if (value == 0) {
    luasWilayah.innerHTML = "";
    ibuKota.innerHTML = "";
    km.style.display = "none";
  } else if (value == 1) {
    luasWilayah.innerHTML = "57 956,00";
    ibuKota.innerHTML = "Ibu Kota Wilayah : <b>Banda Aceh</b>";
    km.style.display = "block";
  } else if (value == 2) {
    luasWilayah.innerHTML = "72 981,23";
    ibuKota.innerHTML = "Ibu Kota Wilayah : <b>Medan</b>";
    km.style.display = "block";
  } else if (value == 3) {
    luasWilayah.innerHTML = "42 012,89";
    ibuKota.innerHTML = "Ibu Kota Wilayah : <b>Padang</b>";
    km.style.display = "block";
  } else if (value == 4) {
    luasWilayah.innerHTML = "87 023,66	";
    ibuKota.innerHTML = "Ibu Kota Wilayah : <b>Pekanbaru</b>";
    km.style.display = "block";
  } else if (value == 5) {
    luasWilayah.innerHTML = "50 058,16";
    ibuKota.innerHTML = "Ibu Kota Wilayah : <b>Jambi</b>";
    km.style.display = "block";
  } else if (value == 6) {
    luasWilayah.innerHTML = "91 592,43";
    ibuKota.innerHTML = "Ibu Kota Wilayah : <b>Palembang</b>";
    km.style.display = "block";
  } else if (value == 7) {
    luasWilayah.innerHTML = "19 919,33";
    ibuKota.innerHTML = "Ibu Kota Wilayah : <b>Bengkulu</b>";
    km.style.display = "block";
  } else if (value == 8) {
    luasWilayah.innerHTML = "34 623,80";
    ibuKota.innerHTML = "Ibu Kota Wilayah : <b>Bandar Lampung</b>";
    km.style.display = "block";
  } else if (value == 9) {
    luasWilayah.innerHTML = "16 424,06";
    ibuKota.innerHTML = "Ibu Kota Wilayah : <b>Pangkal Pinang</b>";
    km.style.display = "block";
  } else if (value == 10) {
    luasWilayah.innerHTML = "8 201,72";
    ibuKota.innerHTML = "Ibu Kota Wilayah : <b>Tanjung Pinang</b>";
    km.style.display = "block";
  } else if (value == 11) {
    luasWilayah.innerHTML = "664,01	";
    ibuKota.innerHTML = "Ibu Kota Wilayah : <b>Jakarta</b>";
    km.style.display = "block";
  } else if (value == 12) {
    luasWilayah.innerHTML = "35.377,76";
    ibuKota.innerHTML = "Ibu Kota Wilayah : <b>Bandung</b>";
    km.style.display = "block";
  } else if (value == 13) {
    luasWilayah.innerHTML = "32.800,69";
    ibuKota.innerHTML = "Ibu Kota Wilayah : <b>Semarang</b>";
    km.style.display = "block";
  } else if (value == 14) {
    luasWilayah.innerHTML = "3.133,15";
    ibuKota.innerHTML = "Ibu Kota Wilayah : <b>Yogyakarta</b>";
    km.style.display = "block";
  } else if (value == 15) {
    luasWilayah.innerHTML = "47.803,49";
    ibuKota.innerHTML = "Ibu Kota Wilayah : <b>Surabaya</b>";
    km.style.display = "block";
  } else if (value == 16) {
    luasWilayah.innerHTML = "9.662,92";
    ibuKota.innerHTML = "Ibu Kota Wilayah : <b>Serang</b>";
    km.style.display = "block";
  } else if (value == 17) {
    luasWilayah.innerHTML = "5.780,06";
    ibuKota.innerHTML = "Ibu Kota Wilayah : <b>Denpasar</b>";
    km.style.display = "block";
  } else if (value == 18) {
    luasWilayah.innerHTML = "18.572,32";
    ibuKota.innerHTML = "Ibu Kota Wilayah : <b>Mataram</b>";
    km.style.display = "block";
  } else if (value == 19) {
    luasWilayah.innerHTML = "48.718,10";
    ibuKota.innerHTML = "Ibu Kota Wilayah : <b>Kupang</b>";
    km.style.display = "block";
  } else if (value == 20) {
    luasWilayah.innerHTML = "147.307,00";
    ibuKota.innerHTML = "Ibu Kota Wilayah : <b>Pontianak</b>";
    km.style.display = "block";
  } else if (value == 21) {
    luasWilayah.innerHTML = "153.564,50";
    ibuKota.innerHTML = "Ibu Kota Wilayah : <b>Palangka Raya</b>";
    km.style.display = "block";
  } else if (value == 22) {
    luasWilayah.innerHTML = "38.744,23";
    ibuKota.innerHTML = "Ibu Kota Wilayah : <b>Banjarmasin</b>";
    km.style.display = "block";
  } else if (value == 23) {
    luasWilayah.innerHTML = "129.066,64";
    ibuKota.innerHTML = "Ibu Kota Wilayah : <b>Samarinda</b>";
    km.style.display = "block";
  } else if (value == 24) {
    luasWilayah.innerHTML = "75.467,70	";
    ibuKota.innerHTML = "Ibu Kota Wilayah : <b>Bulungan</b>";
    km.style.display = "block";
  } else if (value == 25) {
    luasWilayah.innerHTML = "13.892,47";
    ibuKota.innerHTML = "Ibu Kota Wilayah : <b>Manado</b>";
    km.style.display = "block";
  } else if (value == 26) {
    luasWilayah.innerHTML = "61.841,29";
    ibuKota.innerHTML = "Ibu Kota Wilayah : <b>Palu</b>";
    km.style.display = "block";
  } else if (value == 27) {
    luasWilayah.innerHTML = "46.717,48";
    ibuKota.innerHTML = "Ibu Kota Wilayah : <b>Makassar</b>";
    km.style.display = "block";
  } else if (value == 28) {
    luasWilayah.innerHTML = "38.067,70";
    ibuKota.innerHTML = "Ibu Kota Wilayah : <b>Kendari</b>";
    km.style.display = "block";
  } else if (value == 29) {
    luasWilayah.innerHTML = "11.257,07";
    ibuKota.innerHTML = "Ibu Kota Wilayah : <b>Gorontalo</b>";
    km.style.display = "block";
  } else if (value == 30) {
    luasWilayah.innerHTML = "16.787,18";
    ibuKota.innerHTML = "Ibu Kota Wilayah : <b>Mamuju</b>";
    km.style.display = "block";
  } else if (value == 31) {
    luasWilayah.innerHTML = "46.914,03";
    ibuKota.innerHTML = "Ibu Kota Wilayah : <b>Ambon</b>";
    km.style.display = "block";
  } else if (value == 32) {
    luasWilayah.innerHTML = "31.982,50";
    ibuKota.innerHTML = "Ibu Kota Wilayah : <b>Sofifi</b>";
    km.style.display = "block";
  } else if (value == 33) {
    luasWilayah.innerHTML = "102.955,15";
    ibuKota.innerHTML = "Ibu Kota Wilayah : <b>Manokwari</b>";
    km.style.display = "block";
  } else if (value == 34) {
    luasWilayah.innerHTML = "319.036,05	";
    ibuKota.innerHTML = "Ibu Kota Wilayah : <b>Jayapura</b>";
    km.style.display = "block";
  } else if (value == 35) {
    luasWilayah.innerHTML = "127.280 ";
    ibuKota.innerHTML = "Ibu Kota Wilayah : <b>Kabupaten Merauke</b>";
    km.style.display = "block";
  } else if (value == 36) {
    luasWilayah.innerHTML = "66.129 ";
    ibuKota.innerHTML = "Ibu Kota Wilayah : <b>Kabupaten Nabire</b>";
    km.style.display = "block";
  } else if (value == 37) {
    luasWilayah.innerHTML = "108.476	";
    ibuKota.innerHTML = "Ibu Kota Wilayah : <b>Kabupaten Jayawijaya</b>";
    km.style.display = "block";
  } else if (value == 38) {
    luasWilayah.innerHTML = "38.820,90	";
    ibuKota.innerHTML = "Ibu Kota Wilayah : <b>Sorong</b>";
    km.style.display = "block";
  }
}
