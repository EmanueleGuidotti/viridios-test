import { GridColDef } from "@mui/x-data-grid";

const createColumns = (): GridColDef[] => {
  return [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "Country",
      headerName: "Country",
      width: 150,
      editable: false,
    },
    {
      field: "2020 SDG Index Score",
      headerName: "2020 SDG Index Score",
      type: "number",
      width: 150,
      editable: false,
    },
    {
      field: "2020 SDG Index Rank",
      headerName: "2020 SDG Index Rank",
      type: "number",
      width: 110,
      editable: false,
    },
    {
      field: "Regional Score (0-100)",
      headerName: "Regional Score (0-100)",
      type: "number",
      width: 160,
      editable: false,
    },
    {
      field: "Regions used for the SDR",
      headerName: "Regions used for the SDR",
      width: 160,
      editable: false,
    },
    {
      field: "Goal 1 Dash",
      headerName: "Goal 1 Dash",
      width: 160,
      editable: false,
    },
    {
      field: "Goal 2 Dash",
      headerName: "Goal 2 Dash",
      width: 160,
      editable: false,
    },
    {
      field: "Goal 3 Dash",
      headerName: "Goal 3 Dash",
      width: 160,
      editable: false,
    },
    {
      field: "Goal 4 Dash",
      headerName: "Goal 4 Dash",
      width: 160,
      editable: false,
    },
    {
      field: "Goal 5 Dash",
      headerName: "Goal 5 Dash",
      width: 160,
      editable: false,
    },
    {
      field: "Goal 6 Dash",
      headerName: "Goal 6 Dash",
      width: 160,
      editable: false,
    },
    {
      field: "Goal 7 Dash",
      headerName: "Goal 7 Dash",
      width: 160,
      editable: false,
    },
    {
      field: "Goal 8 Dash",
      headerName: "Goal 8 Dash",
      width: 160,
      editable: false,
    },
    {
      field: "Goal 9 Dash",
      headerName: "Goal 9 Dash",
      width: 160,
      editable: false,
    },
    {
      field: "Goal 10 Dash",
      headerName: "Goal 10 Dash",
      width: 160,
      editable: false,
    },
    {
      field: "Goal 11 Dash",
      headerName: "Goal 11 Dash",
      width: 160,
      editable: false,
    },
    {
      field: "Goal 12 Dash",
      headerName: "Goal 12 Dash",
      width: 160,
      editable: false,
    },
    {
      field: "Goal 13 Dash",
      headerName: "Goal 13 Dash",
      width: 160,
      editable: false,
    },
    {
      field: "Goal 14 Dash",
      headerName: "Goal 14 Dash",
      width: 160,
      editable: false,
    },
    {
      field: "Goal 15 Dash",
      headerName: "Goal 15 Dash",
      width: 160,
      editable: false,
    },
    {
      field: "Goal 16 Dash",
      headerName: "Goal 16 Dash",
      width: 160,
      editable: false,
    },
    {
      field: "Goal 17 Dash",
      headerName: "Goal 17 Dash",
      width: 160,
      editable: false,
    },
  ];
};

export { createColumns };
