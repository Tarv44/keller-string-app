import  React, {useState, useEffect} from 'react';

const buttonStyles = {
  border: 'none',
  backgroundColor: '#ffffff',
  borderRadius: '5px'
}

const inputStyles = {
  border: 'none',
  textAlign: 'center',
  width: '16px',
  display: 'inline-block',
  margin: 0
}

const divStyles = {
  display: 'inline-block',
  border: 'solid black 1px',
  borderRadius: '5px'
}

const NumInput = ({decCallback, incCallback, value}) => {
  const [zeroDisabled, setZeroDisabled] = useState(true)
  useEffect(() => {
    if (value === 1) { setZeroDisabled(true) }
    else {setZeroDisabled(false)}
  }, [value])
  return (
    <div style={divStyles}>
      <button disabled={zeroDisabled} onClick={decCallback} style={buttonStyles}>-</button>
      <p style={inputStyles}>{value}</p>
      <button onClick={incCallback} style={buttonStyles}>+</button>
    </div>
  )
}
export default NumInput;