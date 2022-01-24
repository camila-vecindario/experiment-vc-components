import React, { HTMLProps } from 'react'
import './Input.scss'

interface Props extends HTMLProps<HTMLInputElement> {
  type: string
}

const Input = (props: Props) => <input className='input' {...props} />

export default Input
