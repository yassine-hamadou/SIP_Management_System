
import { Tabs, TabsProps } from "antd";
import { DestinationTable } from "./DestinationTable";
import { MineArea } from "./MineArea";
import { OriginPage } from "./OriginPage";
import { FuelPump } from "./fuelPump";


const ProductionLocations = () => {

    const onTabsChange = (key: string) => {
        console.log(key);
    };
    const tabItems: TabsProps['items'] = [
        {
            key: '1', label: `Mine Area`,
            children: (
                <>
                   <MineArea />
                </>
            ),
        },
        {
            key: '2', label: `Origin`,
            children: (
                <>
                    <OriginPage />
                </>
            ),
        },
        {
            key: '3', label: `Destination`,
            children: (
                <>
                    <DestinationTable />
                </>
            ),
        },
        {
            key: '4', label: `Pump`,
            children: (
                <>
                    <FuelPump />
                </>
            ),
        },
    ]

    return (
        <div className='card border border-gray-400 '
            style={{
                backgroundColor: 'white',
                padding: '20px',
                borderRadius: '5px',
                boxShadow: '2px 2px 15px rgba(0,0,0,0.08)',
            }}
        >
            <Tabs defaultActiveKey="1"
                type="card"
                items={tabItems}
                onChange={onTabsChange}
            />
        </div>
    )
};

export { ProductionLocations };
