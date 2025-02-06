import React from 'react'
import { BarChart } from '@mui/x-charts'

const SortingChart = ({ data }) => {
    // console.log(data);
    return (
        <BarChart
            data-testid="sorting-chart"
            series={[{ data }]}
            width={1200}
            height={450}
            // height={data.reduce((acc, curr) => acc + curr, 0)}
            xAxis={[{ scaleType: 'band', data: data.map((_, i) => i), colorMap: { type: 'piecewise', thresholds: [data], colors: ['#14a44d'] } }]}
            yAxis={[{ scaleType: 'linear' }]}
            barLabel="value"
        />
    )
};

export default SortingChart;