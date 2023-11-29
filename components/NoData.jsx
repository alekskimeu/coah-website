import Image from "next/image";

import noData from '../assets/no-data.svg'

const NoData = () => {
  return (
    <div className="no-data-container flex flex-col justify-center items-center gap-3">
        <Image src={noData} />
        <h5 className="font-semibold">No Data</h5>
    </div>
  )
}

export default NoData;
