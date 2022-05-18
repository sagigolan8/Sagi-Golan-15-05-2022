import { useDispatch } from "react-redux";
import SwitchSelector from "react-switch-selector";
import { updateTempType } from "../reducers/tempTypeSlice";

const options = [
  {
      label: <span>F°</span>,
      value: 'F',
      selectedBackgroundColor: "#0097e6",
      selectedColor: "#fff"
    },
    {
      label: <span>C°</span>,
      value: 'C',
      selectedBackgroundColor: "#0097e6",
      selectedColor: "#fff"
  }
];

const initialSelectedIndex = options.findIndex(({value}) => value === "C");

export default function TempSwitch({borderStyle}) {
  const dispatch = useDispatch()

  const onChange = (newValue) => dispatch(updateTempType(newValue))
 
  return (
    <div 
      className="your-required-wrapper" 
      style={{...borderStyle,width:100,height:30,color:'white',marginBottom: '-25px'}}>
        
        {/* Switch that change the temp type - Celsius (C°) or Fahrenheit (F°) */}
        <SwitchSelector
            onChange={onChange}
            options={options}
            initialSelectedIndex={initialSelectedIndex}
            backgroundColor={"#353b48"}
            fontColor={"#fff"}
        />
    </div>
  );
  }