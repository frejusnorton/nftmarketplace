import clsx from "clsx";

interface Props {
  children : React.ReactNode;
  variant?  : "h1"| "h2"| "h3"| "h4"|"h5"| "base"| "caption"| string;
  component?: "h1"| "h2"| "h3"| "h4"|"h5"|"span"|"div"|"p";
  font ? : "spaceMono"|"workSans";
  theme ? : "background"|"background-secondary"|"caption-text"|"cta"|"gradient1"|"gradient2"|"white"
  className? : string,

}
const Typography = ({
    children,
    variant = "h3",
    theme = "white",
    component:Component = 'div',
    font = "workSans", 
    className, }:Props) => {

     let variantStyles:string = "";
     let variantColors:string = "";

      switch(variant){
        case "h1" : 
       variantStyles = "text-h1";
        break;
        case "h2" : 
        variantStyles = "text-h2";
        break;
        case "h3" : 
        variantStyles = "text-h3";
        break;
        case "h4" : 
        variantStyles = "text-h4";
        break;
        case "h5" : 
        variantStyles = "text-h5";
        break;
        case "base" : 
        variantStyles = "text-base";
        break;
        case "caption" : 
        variantStyles = "text-caption";
        break;
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
   <Component className={clsx(variantStyles,variantColors,className)}>
         {children} 
     </Component>
  )
}

export default Typography
