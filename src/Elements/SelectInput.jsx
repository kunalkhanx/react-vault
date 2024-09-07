import React, { useId } from 'react'

const SelectInput = ({className, label, placeholder, error, value, setValue, data = []}) => {

    const inputId = useId()

    const onChangeHandler = (e) => {
        if (!setValue) {
            return
        }
        setValue(e.target.value)
    }

  return (
    <div className={`${className} w-full`}>
        {label ? <label htmlFor={inputId} className='block'>{label}</label> : null}
        <select onChange={onChangeHandler} value={value} className='py-1.5 px-3 rounded bg-zinc-100 focus:bg-white border text-gray-800 focus:outline-none focus:border-rose-500 block w-full' id={inputId}>
            {placeholder ? <option value="">{placeholder}</option> : null}
            {data.map(item => <option key={item.value} value={item.value}>{item.label}</option>)}
        </select>
        {error ? <p className='text-red-600'>{error}/</p> : null}
    </div>
  )
}

export default SelectInput