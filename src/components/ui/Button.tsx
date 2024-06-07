import clsx from "clsx";

interface Props {
   children : React.ReactNode;
   size? : "primary"|"secondary"|"tertiary";
   theme? : "primary"|"secondary"|"tertiary";
   icons? :{icons:React.ElementType};
   iconstheme? : "white"|"cta";
   className? : string;
}



const Button = ({
  children,
  size = "primary",
  theme = "primary",
  icons,
  iconstheme = "cta",
  className,

}:Props) => {
 let buttonStyle = "";
 let themeStyle = "primary";
 let iconsStyle = "";
 let sizeStyle = "";


  switch (size){
     case "primary" :
      buttonStyle = `w-[152px] h-[60px] pr-[30px] pl-[30px] gap-[12px] 
      rounded-primary hover:bg-cta/80 transition-all duration-500`
      break;
      case "secondary" :
        buttonStyle = `w-[224px] h-[60px] pr-[50px] pl-[50px] gap-[12px] 
        rounded-primary hover:bg-cta/80 transition-all duration-500`
      break;
        case "tertiary" :
        buttonStyle = `w-[100px] h-[100px] pt-[32px] pr-[15px] pb-[32px] 
        pl-[15px] gap-[12px] rounded-primary hover:bg-cta/80 transition-all duration-500`
      break;
  }
  switch(theme){
       case "primary":
        themeStyle = "bg-cta";
        break;
        case "secondary":
          themeStyle = "bg-background border-2 border-cta";
          break;
          case "tertiary":
            themeStyle = "bg-white border-2 border-cta";
            break;
  }
  switch(iconstheme){
    case "cta":
    iconsStyle = "text-cta";
    break;
    case "white":
      iconsStyle = "text-white";
  }

  return (
    <>
      <button type="button"  className={clsx(buttonStyle,themeStyle,icons,
        iconsStyle,sizeStyle,className="flex items-center")}>
           {icons && <icons.icons size={20}/>}  {children}
      </button>
    </>
  )
}

export default Button
