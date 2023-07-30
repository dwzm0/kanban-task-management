import React from 'react'
import img from '../../assets/icon-cross.svg'

interface CrossIconProps {
  handelInputDelete: (index: number) => void
  index: number
}

const CrossIcon = ({ handelInputDelete, index }: CrossIconProps): JSX.Element => {
  return (
        <>
            <img style={{ cursor: 'pointer' }} src={img} onClick={() => { handelInputDelete(index) }}/>
        </>
  )
}

export default CrossIcon
