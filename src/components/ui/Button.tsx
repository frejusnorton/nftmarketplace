import clsx from "clsx";

interface Props {
   children : React.ReactNode;
   size? : "primary"|"secondary"|"tertiary";
   theme? : "primary"|"secondary";
   className? : string;
}



const Button = ({children,
  size = "primary",
  theme = "primary",

}:Props) => {
 let buttonStyle = "";
 let themeStyle = "primary";
  switch (size){
     case "primary" :
      buttonStyle = " w-[206px] h-[72px] pr-[50px] pl-[50px] gap-[12px] rounded-primary bg-cta"
      break;
      case "secondary" :
        buttonStyle = " w-[186px] h-[60px] pr-[50px] pl-[50px] gap-[12px] rounded-primary bg-cta"
        break;
        case "tertiary" :
        buttonStyle = " w-[186px] h-[46px] pr-[50px] pl-[50px] gap-[12px] rounded-primary bg-cta"
        break;
  }
  switch(theme){
       case "primary":
        themeStyle = "bg-cta";
        break;
        case "secondary":
          themeStyle = "bg-background border-2 border-cta";
  }
  return (
    <>
      <button className={clsx(buttonStyle,themeStyle)}> 
        {children}
      </button>
    </>
  )
}

export default Button
