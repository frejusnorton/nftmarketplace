import clsx from "clsx";

interface Props {
  children : React.ReactNode;
  variant?  : "h1"| "h2"| "h3"| "h4"|"h5"| "base"|"body"| "caption";
  component?: "h1"| "h2"| "h3"| "h4"|"h5"|"span"|"div"|"p";
  font ? : "spaceMono"|"workSans";
  theme ? : "background"|"background-secondary"|"caption-text"|"cta"|"gradient1"|"gradient2"|"white"
  className? : string,

}
const Typography = ({
  children,
  variant = "h3",
  theme = "white",
  component: Component = 'div',
  font = "workSans",
  className, }: Props) => {
  let variantColors: string = "";

     const variantClasses = {
       h1:{
         'spaceMono': 'text-[28px] md:text-[38px] lg:text-[67px] font-bold leading-[73px]',
         'workSans':  'text-[28px] md:text-[38px] lg:text-[67px] font-semibold leading-[73px]',

       },
       h2:{
        'spaceMono': 'text-[28px] md:text-[38px] lg:text-[51px]  font-bold leading-[56px]',
        'workSans':  'text-[28px] md:text-[38px] lg:text-[51px] font-semibold leading-[56px]',

      } ,
      h3:{
        'spaceMono': 'text-[28px] md:text-[38px] lg:text-[38px]  font-bold leading-[45px]',
        'workSans':  'text-[28px] md:text-[38px] lg:text-[38px] font-semibold leading-[45px]',

      } ,
      h4:{
        'spaceMono': 'text-[28px] md:text-[38px] lg:text-[28px]  font-bold leading-[39px]',
        'workSans':  'text-[28px] md:text-[38px] lg:text-[28px] font-semibold leading-[39px]',

      } ,
      h5:{
        'spaceMono': 'text-[28px] md:text-[38px] lg:text-[22px]  font-bold leading-[35px]',
        'workSans':  'text-[28px] md:text-[38px] lg:text-[22px] font-semibold leading-[30px]',

      } ,
      body :{
        'spaceMono': 'text-[28px] md:text-[38px] lg:text-[22px]  font-normal leading-[35px]',
        'workSans':  'text-[28px] md:text-[38px] lg:text-[22px]  font-normal leading-[30px]',
      },
      base:{
        'spaceMono': 'text-[28px] md:text-[38px] lg:text-[16px] font-normal leading-[22px]',
        'workSans':  'text-[28px] md:text-[38px] lg:text-[16px] font-normal leading-[22px]',

      } ,
      caption:{
        'spaceMono': 'text-[28px] md:text-[38px] lg:text-[12px] font-normal leading-[13px]',
        'workSans':  'text-[28px] md:text-[38px] lg:text-[12px] font-normal leading-[13px] ',
      } ,
     }

      switch (theme){
        case "background":
          variantColors = "text-background"
          break;
          case "background-secondary":
            variantColors = "text-background-secondary"
            break;
            case "caption-text":
              variantColors = "text-caption-text"
              break;
              case "cta":
                variantColors = "text-cta"
                break;
                case "gradient1":
                  variantColors = "bg-gradient1"
                  break;
                  case "gradient2":
                    variantColors ="bg-gradient2"
                    break;
           default :
           variantColors = "text-white"

      }
  return (
   <Component className={clsx(variantClasses[variant][font],variantColors,className)}>
         {children} 
     </Component>
  )
}

export default Typography
