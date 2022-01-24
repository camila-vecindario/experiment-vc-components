import React, { HTMLProps, FC } from 'react'
import './Select.css'

type Option = {
  label?: string
  value: string
}

interface Props extends HTMLProps<HTMLSelectElement> {
  options: Array<Option>
}

const Select: FC<Props> = ({ options = [] }) => (
  <select>
    {options.map((option) => (
      <option key={`${option.value}`} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
)

export default Select
