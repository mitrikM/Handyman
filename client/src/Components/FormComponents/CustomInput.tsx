import React, { ChangeEvent } from 'react'
interface CustomInputProps {
  value: string
  label: string
  name: string
  placeholder: string
  type: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  className: string
}
export const CustomInput: React.FC<CustomInputProps> = ({
  value,
  label,
  name,
  placeholder,
  type,
  onChange,
  className,
}) => {
  return (
    <div className={'form-group'}>
      {label && <label htmlFor={'input-field'}>{label}</label>}
      <input
        className={className}
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  )
}
