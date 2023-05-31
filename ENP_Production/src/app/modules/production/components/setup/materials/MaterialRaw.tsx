import { MatComponet } from "../components/MaterialSetupComponent";

const MaterialRaw = () => {
    const data = {
        url: 'prodRawMaterial',
        title: 'Raw Material'
    }
    return (
        <MatComponet data={data} />
    )
}

export { MaterialRaw };
