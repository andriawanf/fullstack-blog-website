const FormatDates = ({createdAt}) => {
    const apiDate = new Date(createdAt);

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