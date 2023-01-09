import { FC, useMemo } from "react";
import { SdgComponent } from "./sdg.component";
import data from "../../utils/data/data.json";

const SdgContainer: FC = () => {
  const list = useMemo(() => JSON.parse(JSON.stringify(data)), [data]);

  return <SdgComponent list={list["SDR2020 Data"]} />;
};

export { SdgContainer };
