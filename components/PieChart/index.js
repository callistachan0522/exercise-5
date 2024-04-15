import { Pie } from 'react-chartjs-2'

import {
    Chart as ChartJS,
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js'
import { useEffect, useState } from 'react'

ChartJS.register(
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
)

export default function PieChart() {
    const [chartData, setChartData] = useState({
        datasets: []
    })

    const [chartOptions, setChartOptions] = useState({})
    useEffect(() => {
        setChartData({
            labels: ["Red", "Blue", "Yellow",  "Green", "Purple", "Orange"],
            datasets: [
                {
                    label: '# of Votes',
                    data: [10, 30, 14, 5, 12, 25],
                    borderColor: [
                        'rgba(244, 185, 219)',
                        'rgba(278, 138, 222)',
                        'rgba(250, 190, 200)',
                        'rgba(200, 172, 80)',
                        'rgba(70, 185, 219)',
                        'rgba(30, 170, 100)',
                    ],
                    backgroundColor: [
                        'rgba(244, 185, 219, 0.4)',
                        'rgba(278, 138, 222, 0.4)',
                        'rgba(250, 190, 200, 0.4)',
                        'rgba(200, 172, 80, 0.4)',
                        'rgba(70, 185, 219, 0.4)',
                        'rgba(30, 170, 100, 0.4)',
                    ],
                    borderWidth: 1
                }
            ]
        })

        setChartOptions({
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: "Daily Revenue"
                }
            },
            maintainAspectRatio: false,
            responsive: true
        })
    }, [])

    return(
        <>
        <div>
            <Pie data={chartData} options={chartOptions} style={{width: "500px", height:"300px"}}/>
        </div>
        </>
    )
}