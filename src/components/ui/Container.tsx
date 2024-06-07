import React from 'react'
interface Props {
    children : React.ReactNode
}

const Container = ({children}:Props) => {
  return (
    <div className='p-10 md:p-32'>
       {children}
    </div>
  )
}

export default Container
