import React from 'react'
import img from '../../assets/icon-cross.svg'

interface CrossIconProps {
  handelInputDelete: (id: string) => void
  id: string
}

const CrossIcon = ({ handelInputDelete, id }: CrossIconProps): JSX.Element => {
  return (
        <>
            <img style={{ cursor: 'pointer' }} src={img} onClick={() => { handelInputDelete(id) }}/>
        </>
  )
}

export default CrossIcon
