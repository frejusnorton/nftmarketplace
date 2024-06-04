import React from 'react'
import Seo from "@/seo/seo"
import Typography from '@/components/ui/Typography'


const HomePage = () => {
  return (
    <>
      <Seo title="Page d'acceuil" description="Page d'acceuil NFT Marketplace"> </Seo>

      <Typography variant='h1' component='span' font="spaceMono">
            Bonjour 
      </Typography>
    </>
  )
}

export default HomePage
