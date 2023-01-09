import { FC, SyntheticEvent, useMemo, useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { SdgInterface } from "../../utils/interfaces/sdg.interface";
import { TableContainer } from "../../common/table";
import { AverageContainer } from "../../common/average";

interface SdgComponentI {
  list: SdgInterface[];
}

const SdgComponent: FC<SdgComponentI> = ({ list }) => {
  const [tableList, setTableList] = useState<SdgInterface[]>([]);
  const onChangeHandler = (event: SyntheticEvent, value: SdgInterface[]) => {
    setTableList(value);
  };
  const sdgIndexScore = useMemo(
    () =>
      tableList.map((listItem) => {
        const number = parseFloat(listItem["2020 SDG Index Score"]);
        return number;
      }),
    [tableList]
  );

  return (
    <>
      <Autocomplete
        multiple
        options={list}
        getOptionLabel={(option) => option.Country}
        filterSelectedOptions
        onChange={onChangeHandler}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Countries"
            placeholder="Choose from the list"
          />
        )}
      />
      <AverageContainer sdgIndexScore={sdgIndexScore} />
      <TableContainer rows={tableList} />
    </>
  );
};

export { SdgComponent };
