import React from 'react'
import Seo from "@/seo/seo"
import Typography from '@/components/ui/Typography'
import Button from '@/components/ui/Button'


const HomePage = () => {
  return (
    <>
      <Seo title="Page d'acceuil" description="Page d'acceuil NFT Marketplace"> </Seo>
  <div className='flex flex-col space-y-10'>
          <Typography variant='h1' theme='background' component='div'>
                Bonjour 
          </Typography>
          <Typography variant='h2'  theme='background-secondary' component='div'>
                Bonjour 
          </Typography>
          <Typography variant='h3'  theme='caption-text'  component='div'>
                Bonjour 
          </Typography>
          <Typography variant='h4' theme='cta'  component='div'>
                Bonjour 
          </Typography>
          <Typography variant='h5' theme='gradient1'  component='div'>
                Bonjour 
          </Typography>
          <Typography variant='base' component='div' theme='gradient2' >
                Bonjour 
          </Typography>
          <Typography variant='caption'  component='div' theme='gradient2'>
              okkkkkkkkkkkkk
          </Typography>

          <Button size='primary' theme='secondary'>
                 <Typography variant='h5'>
                   Bienvenu
                 </Typography>
          </Button>
          <Button size='secondary' theme='primary' >
                 <Typography variant='h5'>
                   Bienvenu
                 </Typography>
          </Button>
          <Button size='tertiary'>
                 <Typography variant='h5'>
                   Bienvenu
                 </Typography>
          </Button>
  </div>
     
    </>
  )
}

export default HomePage
