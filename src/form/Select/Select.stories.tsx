import React from 'react'
import { storiesOf } from '@storybook/react'
import Select from './Select'

const options = [
  {
    label: 'Azul',
    value: 'blue'
  },
  {
    label: 'Verde',
    value: 'green'
  }
]

storiesOf('Select', module).add('example', () => <Select options={options} />)
