
import { ProUnitComponent } from "./components/PROUnitComponent";


const ProductionDrill = () => {

    const data = {
        title: 'Drill',
        url: 'ProDrill',
    }
    return (
        <div className='card border border-gray-400 '
            style={{
                backgroundColor: 'white',
                paddingTop: '20px',
                borderRadius: '5px',
                boxShadow: '2px 2px 15px rgba(0,0,0,0.08)',
            }}
        >
            <ProUnitComponent data={data} />
        </div>
    )
};

export { ProductionDrill };
