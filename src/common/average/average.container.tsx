import { FC, useMemo } from "react";
import { Box } from "@mui/material";

interface AverageContainerI {
  sdgIndexScore: number[];
}

const AverageContainer: FC<AverageContainerI> = ({ sdgIndexScore }) => {
  const average = useMemo(
    () =>
      sdgIndexScore.length &&
      parseFloat(
        String(sdgIndexScore.reduce((a, b) => a + b, 0) / sdgIndexScore.length)
      ).toFixed(2),
    [sdgIndexScore]
  );

  return (
    <Box>
      <h1>The average is: {average}</h1>
    </Box>
  );
};

export { AverageContainer };
