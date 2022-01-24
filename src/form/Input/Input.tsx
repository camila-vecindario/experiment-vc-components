import React from "react";
import './Input.scss'

type Props = {
  type: string;
}

const Input = ({ type }: Props) => {
  return <input  className='input' />
};

export default Input;
