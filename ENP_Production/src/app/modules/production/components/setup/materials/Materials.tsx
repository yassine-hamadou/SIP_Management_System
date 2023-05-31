import { Tabs, TabsProps } from "antd";
import { ProcessedMaterial } from "./ProcessedMaterial";
import { MaterialRaw } from "./MaterialRaw";


const ProductionMaterials = () => {

    const onTabsChange = (key: string) => {
        console.log(key);
    };
    const tabItems: TabsProps['items'] = [
        {
            key: '1', label: `Raw`,
            children: (
                <>
                   <MaterialRaw />
                </>
            ),
        },
        {
            key: '2', label: `Processed`,
            children: (
                <>
                    <ProcessedMaterial />
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

export { ProductionMaterials };

