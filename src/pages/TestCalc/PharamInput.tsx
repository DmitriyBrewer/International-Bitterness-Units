import React from 'react'

interface IProps {
    name: string,
    value: string,
    onChange: (e: any)=>void,
    onBlur?: (e:any)=>void,
    validation?: boolean,
    types?: string
}



const PharamInput: React.FC<IProps> = ({name, value,onChange,onBlur, validation, types}) => {

    const Validation = ()=>{
        if (validation === false) {
        return <span style={{color:'red'}}>error</span>
        } else return <span></span>
      }

    return (
        <React.Fragment>
        <label htmlFor="">
        {Validation()}
            <input type={types? types:'number'} name={name} value={value} onChange={onChange} onBlur={onBlur}/>
        </label>
        </React.Fragment>
    )
}

export default PharamInput;