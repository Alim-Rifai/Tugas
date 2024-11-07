function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;
    let result;

    try {
        // Memeriksa apakah input valid
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error("Input harus berupa angka.");
        }

        // Memilih operasi berdasarkan pilihan pengguna
        switch (operation) {
            case "add":
                result = num1 + num2;
                break;
            case "subtract":
                result = num1 - num2;
                break;
            case "multiply":
                result = num1 * num2;
                break;
            case "divide":
                if (num2 === 0) {
                    throw new Error("Pembagian dengan nol tidak diperbolehkan.");
                }
                result = num1 / num2;
                break;
            default:
                throw new Error("Operasi tidak valid.");
        }

        // Menampilkan hasil jika tidak ada error
        document.getElementById("result").innerText = `Hasil: ${result}`;
    } catch (error) {
        // Menampilkan pesan kesalahan jika ada error
        document.getElementById("result").innerText = `Error: ${error.message}`;
    } finally {
        console.log("Proses kalkulasi selesai.");
    }
}
