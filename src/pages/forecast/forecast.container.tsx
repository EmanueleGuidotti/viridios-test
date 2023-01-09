import { FC, useMemo, useState } from "react";
import { Box, TextField } from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useGetForecastQuery } from "../../services/forecast.service";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { MenuContainer } from "../../common/menu";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const barChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Carbon Intensity Forecast",
    },
  },
};

interface forecastListDataI {
  from: string;
  to: string;
  intensity: { actual: number; forecast: number; index: string };
}

const ForecastContainer: FC = () => {
  const [fromValue, setFromValue] = useState<Dayjs | null>(null);
  const [toValue, setToValue] = useState<Dayjs | null>(null);
  const {
    data: forecastListData,
    error: forecastListError,
    isLoading: forecastListLoading,
  } = useGetForecastQuery(
    {
      from: dayjs(fromValue).format("YYYY-MM-DDThh:mm[Z]"),
      to: dayjs(toValue).format("YYYY-MM-DDThh:mm[Z]"),
    },
    { skip: !fromValue || !toValue }
  );

  const onDateFromHandler = (newValue: Dayjs | null) => {
    setFromValue(newValue);
  };
  const onDateToHandler = (newValue: Dayjs | null) => {
    setToValue(newValue);
  };

  const barChartData = useMemo(() => {
    if (!forecastListLoading && forecastListData?.data?.length > 0) {
      const labels = forecastListData.data.map(
        (listItem: forecastListDataI) => listItem.from
      );
      const datasets = [
        {
          label: "Actual",
          data: forecastListData.data.map(
            ({ intensity }: forecastListDataI) => intensity.actual
          ),
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
        {
          label: "Forecast",
          data: forecastListData.data.map(
            ({ intensity }: forecastListDataI) => intensity.forecast
          ),
          backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
      ];
      return { labels, datasets };
    }
  }, [forecastListData]);

  const BarComponent = useMemo(
    () =>
      barChartData && Object.keys(barChartData).length > 0 ? (
        <Bar options={barChartOptions} data={barChartData} />
      ) : null,
    [barChartData]
  );

  return (
    <>
      <MenuContainer />
      <Box>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopDatePicker
            label="Date from"
            inputFormat="MM/DD/YYYY"
            value={fromValue}
            onChange={onDateFromHandler}
            minDate={dayjs().subtract(14, "day")}
            maxDate={dayjs()}
            renderInput={(params) => <TextField {...params} />}
          />
          <DesktopDatePicker
            label="Date to"
            inputFormat="MM/DD/YYYY"
            value={toValue}
            onChange={onDateToHandler}
            disabled={!fromValue}
            minDate={fromValue ?? dayjs().subtract(14, "day")}
            maxDate={dayjs(fromValue).add(14, "day") ?? dayjs().add(14, "day")}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        {BarComponent}
      </Box>
    </>
  );
};

export { ForecastContainer };
