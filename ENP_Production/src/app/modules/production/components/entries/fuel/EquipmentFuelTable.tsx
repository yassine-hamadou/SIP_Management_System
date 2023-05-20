import { Space, Tabs, TabsProps, Tag } from "antd";
import { Link } from "react-router-dom";
import { FuelReciept } from "./Reciept";
import { FuelIssue } from "./Issue";


const EquipmentFuelTable = () => {

    const onTabsChange = (key: string) => {
        console.log(key);
    };
    const tabItems: TabsProps['items'] = [
        {
            key: '1', label: `Reciept`,
            children: (
                <>
                    <FuelReciept />
                </>
            ),
        },
        {
            key: '2', label: `Issue`,
            children: (
                <>
                    <FuelIssue />
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

export { EquipmentFuelTable }