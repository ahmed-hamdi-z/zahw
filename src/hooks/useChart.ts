// Documentation ( https://www.chartjs.org/docs/latest/ )

// Dependencies
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';

// Types
import { ChartData, ChartOptions, ChartDataset } from 'chart.js';

// Data
import chartOptions from "@/utils/charts/options";

const useChart = () => {
  const defaultOptions: ChartOptions = chartOptions;

  // This Function Used To avoid CategoryScale Error ( IMPORTANT )
  Chart.register(CategoryScale);

  /** createDataObject
   * This Function Used To Create Chart Data Object
   * @param { ChartData data }
   * @return { ChartData }
   */
  const createDataObject = (data: ChartData): ChartData => data;

  /** createChartOptions
   * This Function Used To Create Chart Options.
   * @param { ChartOptions options }
   * @return { ChartOptions }
   */
  const createOptionsObject = (options: ChartOptions = chartOptions): ChartOptions => options;

  /** createDatasetObject
   * This Function Used To Create a Dataset Object
   * @param { ChartDataset dataset }
   * @return { ChartDataset }
   */
  const createDatasetObject = (dataset: ChartDataset): ChartDataset => dataset;

  /** createDatasetsArray
   * This Function Used To Create Array Of Dataset Object.
   * @param { ChartDataset[] datasets }
   * @return { ChartDataset[] }
  */
  const createDatasetsArray = (datasets: ChartDataset[]): ChartDataset[] => datasets;

  return {
    defaultOptions,
    createDataObject,
    createOptionsObject,
    createDatasetObject,
    createDatasetsArray
  }
}

export default useChart;
