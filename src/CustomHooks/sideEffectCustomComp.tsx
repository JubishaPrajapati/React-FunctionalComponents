import useSideEffectCustom from "./sideEffectCustom"

const SideEffectsCustomComp: React.FC = () => {
    const { height, width } = useSideEffectCustom();

    return (
        <div>
            <h3>Extracting windows dimension using custom hooks:</h3>
            <p>Height:{height}</p>
            <p>Width:{width}</p>
        </div>
    )
}
export default SideEffectsCustomComp;