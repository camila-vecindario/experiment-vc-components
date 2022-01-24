import React from 'react'

import { ExampleComponent, Input } from '@vecindario/vecindario-suite-components'
import '@vecindario/vecindario-suite-components/dist/index.css'

const App = () => {
  return (
    <>
      <ExampleComponent text="Create React Library Example 😄" />
      <Input type='text' />
    </>
  )
}

export default App
