import { Box, Button } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router";

const MenuContainer: FC = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
      <Button
        variant="contained"
        onClick={() => navigate("/forecast", { replace: true })}
      >
        Forecast
      </Button>
      <Button
        variant="contained"
        onClick={() => navigate("/", { replace: true })}
      >
        SDG
      </Button>
    </Box>
  );
};

export { MenuContainer };
