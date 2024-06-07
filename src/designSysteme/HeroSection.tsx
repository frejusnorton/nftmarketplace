import React from 'react'
import Image from "next/image"
import Button from "@/components/ui/Button"
import Typography from '@/components/ui/Typography'
import { GoRocket } from "react-icons/go";

const HeroSection = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between'>

        <div  className='flex flex-col space-y-10 '>
              
          <Typography component='h1' variant='h1'>
              Discover digital Art & Collect NFTs
          </Typography>
        </div>

        <div>
          
        </div>
    </div>
  )
}

export default HeroSection

{/* <div className='flex flex-col space-y-10 '>
        
        <Typography component='h1' variant='h1' className='w-[510px]'>
            Discover digital Art & Collect NFTs
        </Typography>
        <Typography variant='h5' font='workSans' className='w-[510px] font-normal' >
              NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.
        </Typography>
        <Button theme='primary' size='secondary' icons={{icons:GoRocket}} iconstheme='white'>
             <Typography variant='base' className='w-[92px] font-semibold'>
                Get started
             </Typography>
        </Button>
        <div className='grid  grid-cols-3 gap-[30px] pt-10 '>
            <div>
                <Typography variant='h4' component='h4' font='spaceMono'>
                   240k+ 
                </Typography>
                <Typography variant='base'  font='spaceMono'>
                  Total Sale
                </Typography>
            </div>
            <div>
                <Typography variant='h4' component='h4' font='spaceMono'>
                   100k+ 
                </Typography>
                <Typography variant='base'  font='spaceMono'>
                  Auctions
                </Typography>
            </div>
            <div>
                <Typography variant='h4' component='h4' font='spaceMono'>
                   240k+ 
                </Typography>
                <Typography variant='base'  font='spaceMono'>
                  Artists
                </Typography>
            </div>
        </div>

      </div>

      <div>
        <div className='h-[401px] w-[510px] relative'>
        <Image
          src="/images/heroSection/Placeholder.png"
          alt="Image d'un astraunaute"
           layout='fill'
           objectFit='contain'
        />
        </div>
       
        <div className='bg-background-secondary p-[20px] gap-[10px] rounded rounded-b-primary'>

          <Typography variant='h5' component='h5'>
               Space Walking
          </Typography>
          <div className='flex gap-5 pt-2'>
            <Image
                src="images/avatars/Avatar1.png"
                alt='Avatar'
                height={24}
                width={24}
                />
                <Typography variant='base'>
                        Animakid
                </Typography>
          </div>
        </div>
      </div> */}