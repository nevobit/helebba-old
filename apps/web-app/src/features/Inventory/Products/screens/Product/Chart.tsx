import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    datasets: [
        {
            label: 'Stock',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            borderColor: '#4181f2',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            tension: 0.4,
            pointBackgroundColor: '#4181f2',
        },
    ],
};

const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
    },
    scales: {
        y: {
            grid: {
                display: false,
            },
            beginAtZero: true,
            ticks: {
                callback: function (tickValue: string | number) {
                    return `${tickValue}`;
                },
            },
        },
        x: {
            grid: {
                display: false,
            },
        }
    },
};

export default function Chart() {
    return <Line data={data} options={options} height={50} />;
}
