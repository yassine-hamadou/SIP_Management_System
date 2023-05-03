import { MatComponet } from '../MaterialSetupComponent';

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
