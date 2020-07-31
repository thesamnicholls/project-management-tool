import React from 'react'

export interface InputProps {
  label: string
  id: string
  type: string
  onChange: (event: any) => void
}

const Input = ({ label, id, type, onChange }: InputProps) => {
  return (
    <div className='c-input'>
      <label className='c-input__label' htmlFor={id}>
        {label}
      </label>
      <input
        className='c-input__input'
        onChange={onChange}
        type={type}
        id={id}
      />
    </div>
  )
}

export default Input
