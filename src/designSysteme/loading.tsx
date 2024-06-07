import React, { useEffect } from 'react'
interface Props {
    setLoading : any;
}

const Loading = ({setLoading}:Props) => {
   useEffect(()=>{
    const timer = setTimeout(()=>{
        setLoading(false);
    },3000)

    return()=> clearTimeout(timer)

    },[setLoading])
  return (
  <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
     <h1 className=" text-[20px] md:text-[50px] font-bold font-work-sans text-cta animate-pulse">NFT MarketPlace...</h1>
  </div>
  )
}

export default Loading
