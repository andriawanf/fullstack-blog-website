const FormatDates = ({publishedAt}) => {
    const apiDate = new Date("2024-01-16T22:45:00Z");

    // Daftar nama bulan
    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    // Mendapatkan tanggal, bulan, dan tahun dari objek Date
    const day = apiDate.getDate();
    const month = months[apiDate.getMonth()];
    const year = apiDate.getFullYear();

    // Membuat fungsi untuk menambahkan sufiks tanggal
    function addSufix(num) {
        if (num >= 11 && num <= 13) {
            return num + "th";
        } else {
            const lastDigit = num % 10;
            switch (lastDigit) {
                case 1: return num + "st";
                case 2: return num + "nd";
                case 3: return num + "rd";
                default: return num + "th";
            }
        }
    }

    // Mendapatkan sufiks untuk tanggal
    const dayWithSufix = addSufix(day);

    // Membuat string tanggal baru
    return `${dayWithSufix} ${month} ${year}`;
}

export { FormatDates }