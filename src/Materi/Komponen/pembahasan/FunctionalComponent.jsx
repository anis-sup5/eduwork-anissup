import { useState } from "react";

// const FunctionalComponent = (props) => {
const FunctionalComponent = ({nama}) => {
    const [value, setValue] = useState(0);

    const handlePlus = () => {
        setValue(value +1)
    }

    const handleMinus = () => {
        if(value > 0) {
            setValue(value -1)
        }
    }

    return(
        <div>
            <h1>Membuat komponen dengan functional component</h1>
            {/* <h1>{props.nama} Selamat Belajar</h1> */}
            <h1>{nama} Selamat Belajar</h1> {/* distructering object */}
            <button onClick={handleMinus}>-</button>
            <span>{' '}{value}{' '}</span>
            <button onClick={handlePlus}>+</button>
        </div>

    )
};
FunctionalComponent.defaultProps = {
    nama: "User"
}
export default FunctionalComponent;