import { Tabs, TabsProps } from "antd";
import { HaulerUnit } from "./HaulerUnit";
import { HaulerOperator } from "./HaulerOperator";


const ProductionHauler = () => {

    const onTabsChange = (key: string) => {
        console.log(key);
    };
    const tabItems: TabsProps['items'] = [
        {
            key: '1', label: `Unit`,
            children: (
                <>
                   <HaulerUnit />
                </>
            ),
        },
        {
            key: '2', label: `Operator`,
            children: (
                <>
                    <HaulerOperator />
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

export { ProductionHauler };
