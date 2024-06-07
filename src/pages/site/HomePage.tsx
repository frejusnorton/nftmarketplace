import React, { useState } from 'react'
import Seo from "@/seo/seo"
import Loading from '@/designSysteme/loading'
import Headers from "@/designSysteme/Headers"
import Container from "@/components/ui/Container"
import HeroSection from '@/designSysteme/HeroSection'



const HomePage = () => {
      const [loadingScreen,setLoadingScreen] = useState(true)
  return (
    <>
    {loadingScreen && <Loading setLoading={setLoadingScreen}/>}
    {!loadingScreen && (
      <>
            <Seo title="Acceuil" description="Page d'acceuil NFT Marketplace"> </Seo>
            
            <Headers/>
            {/* <Container>
                <HeroSection/>
            </Container> */}
 
      </>
    )}

    </>
  )
}

export default HomePage
