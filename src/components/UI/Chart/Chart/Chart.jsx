import "./Chart.css";
import ChartBar from "../ChartBar/ChartBar";

const Chart = (props) => {
    const arrVal = props.dataPoints.map(dataPoint=>dataPoint.value)
    const maxValue = Math.max(...arrVal)
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          label={dataPoint.label}
          maxValue={maxValue}
          value={dataPoint.value}
        />
      ))}
    </div>
  );
};

export default Chart;
