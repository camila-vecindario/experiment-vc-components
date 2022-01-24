import React from 'react'
import './Button.css'

interface Props extends React.HTMLProps<HTMLButtonElement> {
  text: string
}

const Button: React.FC<Props> = ({ text }) => <button>{text}</button>

export default Button
