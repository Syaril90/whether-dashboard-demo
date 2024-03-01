import Box from "@mui/material/Box";
import {
  DataGrid,
  GridColDef,
  GridRowIdGetter,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { IWhetherForecast } from "./IWhetherForecast";

export default function WhetherDataTable() {
  const [forecasts, setForecasts] = useState<IWhetherForecast[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const columns: GridColDef[] = [
    { field: "date", headerName: "Date", width: 110 },
    {
      field: "location_name",
      headerName: "Location",
      width: 180,
      valueGetter: (params) => params.row.location.location_name,
    },
    { field: "morning_forecast", headerName: "Morning", width: 130 },
    { field: "afternoon_forecast", headerName: "Afternoon", width: 130 },
    { field: "night_forecast", headerName: "Night", width: 130 },
    { field: "summary_forecast", headerName: "Summary", width: 200 },
    { field: "min_temp", headerName: "Min Temp (°C)", width: 130 },
    { field: "max_temp", headerName: "Max Temp (°C)", width: 130 },
  ];

  const getRowId: GridRowIdGetter = (row) =>
    `${row.date}-${row.location.location_id}`;

  useEffect(() => {
    const fetchWeatherData = async () => {
      setLoading(true);
      try {
        // Substitute this URL with your actual endpoint
        const response = await fetch(
          "https://api.data.gov.my/weather/forecast"
        );
        const data: IWhetherForecast[] = await response.json();
        // Assuming each forecast item already has an 'id' field for DataGrid to use as a key
        setForecasts(data);
      } catch (error) {
        console.error("Failed to fetch weather data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={forecasts}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        getRowId={getRowId}
      />
    </Box>
  );
}
