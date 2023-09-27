// // Ambil elemen-elemen yang diperlukan
// const pdfLink = document.getElementById("pdf-link");
// const pdfLightbox = document.getElementById("pdf-lightbox");
// const closeLightbox = document.getElementById("close-lightbox");
// const pdfEmbed = document.getElementById("pdf-embed");

// // Tambahkan event listener untuk tautan PDF
// pdfLink.addEventListener("click", function (e) {
//   e.preventDefault(); // Mencegah navigasi ke tautan asli
//   pdfEmbed.src = "asset/pdf/sertifikat course dicoding.pdf"; // Setel src elemen embed untuk memuat PDF
//   pdfLightbox.style.display = "flex"; // Tampilkan lightbox
// });

// // Tambahkan event listener untuk tombol tutup
// closeLightbox.addEventListener("click", function () {
//   pdfEmbed.src = ""; // Reset src elemen embed
//   pdfLightbox.style.display = "none"; // Sembunyikan lightbox
// });

// Ambil elemen-elemen yang diperlukan untuk card tambahan
const pdfLink1 = document.getElementById("pdf-link-1");
const pdfLightbox1 = document.getElementById("pdf-lightbox-1");
const closeLightbox1 = document.getElementById("close-lightbox-1");
const pdfEmbed1 = document.getElementById("pdf-embed-1");

const pdfLink2 = document.getElementById("pdf-link-2");
const pdfLightbox2 = document.getElementById("pdf-lightbox-2");
const closeLightbox2 = document.getElementById("close-lightbox-2");
const pdfEmbed2 = document.getElementById("pdf-embed-2");

const pdfLink3 = document.getElementById("pdf-link-3");
const pdfLightbox3 = document.getElementById("pdf-lightbox-3");
const closeLightbox3 = document.getElementById("close-lightbox-3");
const pdfEmbed3 = document.getElementById("pdf-embed-3");

const pdfLink4 = document.getElementById("pdf-link-4");
const pdfLightbox4 = document.getElementById("pdf-lightbox-4");
const closeLightbox4 = document.getElementById("close-lightbox-4");
const pdfEmbed4 = document.getElementById("pdf-embed-4");

const pdfLink5 = document.getElementById("pdf-link-5");
const pdfLightbox5 = document.getElementById("pdf-lightbox-5");
const closeLightbox5 = document.getElementById("close-lightbox-5");
const pdfEmbed5 = document.getElementById("pdf-embed-5");

const pdfLink6 = document.getElementById("pdf-link-6");
const pdfLightbox6 = document.getElementById("pdf-lightbox-6");
const closeLightbox6 = document.getElementById("close-lightbox-6");
const pdfEmbed6 = document.getElementById("pdf-embed-6");

const pdfLink7 = document.getElementById("pdf-link-7");
const pdfLightbox7 = document.getElementById("pdf-lightbox-7");
const closeLightbox7 = document.getElementById("close-lightbox-7");
const pdfEmbed7 = document.getElementById("pdf-embed-7");

// Tambahkan event listener untuk tautan PDF pada card tambahan
pdfLink1.addEventListener("click", function (e) {
  e.preventDefault(); // Mencegah navigasi ke tautan asli
  pdfEmbed1.src = "asset/pdf/sertifikat_course_dicoding_1.pdf"; // Setel src elemen embed untuk memuat PDF
  pdfLightbox1.style.display = "flex"; // Tampilkan lightbox
});

pdfLink2.addEventListener("click", function (e) {
  e.preventDefault();
  pdfEmbed2.src = "asset/pdf/sertifikat_course_dicoding_2.pdf";
  pdfLightbox2.style.display = "flex";
});

pdfLink3.addEventListener("click", function (e) {
  e.preventDefault();
  pdfEmbed3.src = "asset/pdf/sertifikat_course_dicoding_3.pdf";
  pdfLightbox3.style.display = "flex";
});

pdfLink4.addEventListener("click", function (e) {
  e.preventDefault();
  pdfEmbed4.src = "asset/pdf/sertifikat_course_dicoding_4.pdf";
  pdfLightbox4.style.display = "flex";
});

pdfLink5.addEventListener("click", function (e) {
  e.preventDefault();
  pdfEmbed5.src = "asset/pdf/sertifikat_course_dicoding_5.pdf";
  pdfLightbox5.style.display = "flex";
});

pdfLink6.addEventListener("click", function (e) {
  e.preventDefault();
  pdfEmbed6.src = "asset/pdf/sertifikat_course_dicoding_6.pdf";
  pdfLightbox6.style.display = "flex";
});

pdfLink7.addEventListener("click", function (e) {
  e.preventDefault();
  pdfEmbed7.src = "asset/pdf/sertifikat_course_dicoding_7.pdf";
  pdfLightbox7.style.display = "flex";
});

// Tambahkan event listener untuk tombol tutup pada card tambahan
closeLightbox1.addEventListener("click", function () {
  pdfLightbox1.style.display = "none"; // Sembunyikan lightbox
  pdfEmbed1.src = ""; // Reset src elemen embed
});

closeLightbox2.addEventListener("click", function () {
  pdfLightbox2.style.display = "none";
  pdfEmbed2.src = "";
});

closeLightbox3.addEventListener("click", function () {
  pdfLightbox3.style.display = "none";
  pdfEmbed3.src = "";
});

closeLightbox4.addEventListener("click", function () {
  pdfLightbox4.style.display = "none";
  pdfEmbed4.src = "";
});

closeLightbox5.addEventListener("click", function () {
  pdfLightbox5.style.display = "none";
  pdfEmbed5.src = "";
});

closeLightbox6.addEventListener("click", function () {
  pdfLightbox6.style.display = "none";
  pdfEmbed6.src = "";
});

closeLightbox7.addEventListener("click", function () {
  pdfLightbox7.style.display = "none";
  pdfEmbed7.src = "";
});
