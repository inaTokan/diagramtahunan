// Data Penjualan
const labels = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
const data2022 = [4017, 6135, 7091, 5841, 5036, 4547, 3467, 3970, 6313, 3595, 9207, 5945];
const data2023 = [2416, 4136, 7935, 8004, 9505, 5026, 6108, 6343, 9404, 9280, 9287, 8689];

// Chart Configuration
const ctx = document.getElementById("salesChart").getContext("2d");
const salesChart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: labels,
        datasets: [
            {
                label: "2022",
                data: data2022,
                backgroundColor: "rgba(9, 9, 237, 0.7)", // Biru
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1
            },
            {
                label: "2023",
                data: data2023,
                backgroundColor: "rgba(249, 6, 58, 0.7)", // Merah
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 1
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                max: 10000,
                ticks: {
                    stepSize: 2500
                }
            }
        },
        plugins: {
            title: {
                display: true,
                text: "Laporan Penjualan"
            }
        }
    }
});
