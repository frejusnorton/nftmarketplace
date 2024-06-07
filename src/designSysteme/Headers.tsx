import Image from "next/image"
import Typography from "@/components/ui/Typography"
import Button from "@/components/ui/Button"
import { LiaUserSolid } from "react-icons/lia";
import { CgMenuLeft } from "react-icons/cg";
import ActiveLinks from "@/components/ui/ActiveLinks";


const Headers = () => {
  return (

         <nav className="flex  h-[100px]  items-center justify-around text-white sticky top-0  z-50">
            <ActiveLinks href="/">
                <div className="flex gap-[10px] items-center h-[32px] text-2xl">
                        <div>
                        <Image
                            src="/Storefront.svg"
                            alt="Logo NFT Marketplace"
                            height={32}
                            width={32}
                            layout="responsive"/>
                        </div>
                    
                        <div className="font-work-sans  w-[200px] text-xl md:text-2xl">
                            <p className="">NFT Marketplace</p>
                        </div>
                    </div>
            </ActiveLinks>
                 

                 <div>
                     <ul className=" hidden lg:flex space-x-10 items-center justify-center ">

                         <ActiveLinks href="/site/marketplace" className="font-work-sans  leading-4 font-semibold">Marketplace</ActiveLinks>
                         <ActiveLinks href="/site/ranking" className="font-work-sans leading-4 font-semibold">Ranking</ActiveLinks>
                         <ActiveLinks href="/site/connect_wallet" className="font-work-sans leading-4 font-semibold">Connect a wallet</ActiveLinks>
                         <ActiveLinks href="/site/sign_up">
                         <Button size="primary" icons={{icons:LiaUserSolid }} iconstheme="white">
                           <Typography variant="base" className="font-work-sans font-semibold">
                                 Sign Up
                           </Typography>
                         </Button>
                         </ActiveLinks>
                     </ul>
                     <CgMenuLeft className="lg:hidden text-[40px] text-white"/>
                 </div>
         </nav>

  )
}

export default Headers
