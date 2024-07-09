// Types
import type { ChartOptions } from 'chart.js';

const chartOptions:ChartOptions = {
  responsive: true,
  indexAxis: 'x',
  scales: {
    y: {
      grid: {
        display: true,
        drawOnChartArea: true,
        drawTicks: true
      }
    },
    x: {
      grid: {
        display: true,
        drawOnChartArea: true,
        drawTicks: true
      }
    }
  },
  plugins: {
    subtitle: {
      display: false,
      text: 'Custom Chart Subtitle'
    }
  }
}

export default chartOptions;