import React from "react";
import './input.css'

type Props = {
  type: string;
}

const Input = ({ type }: Props) => {
  return <input type={type} className='input' />
};

export default Input;
