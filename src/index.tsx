import * as React from 'react'
import './styles.scss'

interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return <div className='test'>Example Component: {text} - HOLA</div>
}

export * from './form';
