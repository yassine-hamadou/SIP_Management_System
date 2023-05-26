import { MatComponet } from "../components/MaterialSetupComponent";

const ProcessedMaterial = () => {
    const data = {
        url: 'prodProcessedMaterial',
        title: 'Processed Material'
    }
    return (
        <MatComponet data={data} />
    )
}

export { ProcessedMaterial };
