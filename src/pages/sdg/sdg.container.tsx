import { FC, useMemo } from "react";
import { SdgComponent } from "./sdg.component";
import data from "../../utils/data/data.json";
import { MenuContainer } from "../../common/menu";

const SdgContainer: FC = () => {
  const list = useMemo(() => JSON.parse(JSON.stringify(data)), [data]);

  return (
    <>
      <MenuContainer />
      <SdgComponent list={list["SDR2020 Data"]} />
    </>
  );
};

export { SdgContainer };
