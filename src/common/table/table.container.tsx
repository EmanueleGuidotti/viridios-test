import { FC } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { SdgInterface } from "../../utils/interfaces/sdg.interface";
import { Box } from "@mui/material";
import { createColumns } from "./table.utils";

interface TableContainerI {
  rows: SdgInterface[];
}

const TableContainer: FC<TableContainerI> = ({ rows }) => {
  const columns = createColumns();

  return (
    <Box sx={{ height: 600, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
};

export { TableContainer };
