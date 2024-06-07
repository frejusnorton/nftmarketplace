import clsx from 'clsx';
import Link from 'next/link';
import React from 'react'
import {useRouter} from 'next/router';
import { useMemo } from 'react';
interface Props {
    href : string;
    children : React.ReactNode;
    className?: string;
}

const ActiveLinks = ({href,children,className}:Props) => {
    const router = useRouter()
    const isActive:boolean = useMemo(()=>{
        return router.pathname === href
   
    },[router.pathname,href])
    
  return (
    <>
     <Link href={href} className={clsx(isActive && "font-bold text-cta")}>
         {children}
     </Link>
    </>
  
  )
}

export default ActiveLinks
