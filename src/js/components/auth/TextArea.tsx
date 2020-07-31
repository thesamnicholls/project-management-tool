import React from 'react'

export interface InputProps {
  label: string
  id: string
  onChange: (event: any) => void
}

const TextArea = ({ label, id, onChange }: InputProps) => {
  return (
    <div className='c-input'>
      <label className='c-input__label' htmlFor={id}>
        {label}
      </label>
      <textarea className='c-input__area' onChange={onChange} id={id} />
    </div>
  )
}

export default TextArea
