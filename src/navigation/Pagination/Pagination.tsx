import React, { FC } from 'react'

interface Props {
  current: number
}

const Pagination: FC<Props> = ({ children }) => {
  return <div>{children}</div>
}

export default Pagination
