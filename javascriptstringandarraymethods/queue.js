function processQueue() {
    // Inisialisasi antrian pembeli
    let queue = ["ray", "fiki", "fadhilla", "farah"];
    
    // 1. Datang 1 pembeli yaitu nabila
    queue.push("nabila");

    // 2. Datang 2 pembeli yaitu maza dan elsi
    queue.push("maza", "elsi");

    // 3. Antrian terakhir tidak jadi antri dan pulang ke rumah
    queue.pop();

    // 4. Antrian pertama sudah mendapatkan belanjaannya
    queue.shift();

    // 5. Antrian kedua juga sudah mendapatkan belanjaannya
    queue.shift();

    // 6. Datang pembeli baru yang nyerobot antrian yaitu tomi
    queue.unshift("tomi");

    // Menampilkan hasil akhir antrian
    document.getElementById("result").innerText = `Hasil Akhir Antrian: ${queue.join(", ")}`;
}
