import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from './index'
storiesOf('Button', module)
  .add('Blue', () => <Button text='Azul' />)
  .add('Green', () => <Button text='Green' />)
