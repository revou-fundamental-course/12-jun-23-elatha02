// Ambil referensi elemen-elemen yang dibutuhkan
const temperatureForm = document.getElementById("temperatureForm");
const temperatureInput = document.getElementById("temperatureInput");
const celsiusRadio = document.getElementById("celsiusRadio");
const fahrenheitRadio = document.getElementById("fahrenheitRadio");
const resultContainer = document.getElementById("resultContainer");
const result = document.getElementById("result");

// Event listener untuk saat formulir dikirimkan
temperatureForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah aksi default dari formulir

    const temperature = parseFloat(temperatureInput.value); // Ambil suhu dari input
    let convertedTemperature; // Variabel untuk menyimpan suhu yang dikonversi

    if (celsiusRadio.checked) {
        // Konversi dari Celsius ke Fahrenheit
        convertedTemperature = (temperature * 9/5) + 32;
        result.textContent = `${temperature} \u00B0C = ${convertedTemperature} \u00B0F`;
        result.insertAdjacentHTML("afterend", `<br>(${temperature} \u00B0C * 9/5) + 32 = ${convertedTemperature} \u00B0F`); 
    } 
    else if (fahrenheitRadio.checked) {
        // Konversi dari Fahrenheit ke Celsius
        convertedTemperature = (temperature - 32) * 5/9;
        result.textContent = `${temperature} \u00B0F = ${convertedTemperature} \u00B0C`;
        result.insertAdjacentHTML("afterend", `<br>(${temperature} \u00B0F - 32) * 5/9 = ${convertedTemperature} \u00B0C`);
  }

    resultContainer.classList.remove("hidden"); // Tampilkan kontainer hasil konversi
});

// Event listener untuk saat tombol reset diklik
temperatureForm.addEventListener("reset", function() {
    resultContainer.classList.add("hidden"); // Sembunyikan kontainer hasil konversi
});
