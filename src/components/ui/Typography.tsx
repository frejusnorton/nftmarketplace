import clsx from "clsx";

interface Props {
  children : React.ReactNode;
  variant?  : "h1"| "h2"| "h3"| "h4"|"h5"| "base"| "caption"| string;
  component?: "h1"| "h2"| "h3"| "h4"|"h5"|"span"|"div"|"p";
  weight ?: "bold"|"semibold"|"normal";
  font ? : "spaceMono"|"workSans";
  leading ?: "extra"|"large"|"medium"|"small"|"big-small";
  className? : string,

}
const Typography = ({
    children,
    variant = "h3",
    component:Component = 'div',
    weight = "normal",
    font = "workSans",
    leading = "large",
    className, }:Props) => {

     let variantStyles:string = "";

      switch(variant){
        case "h1" : 
       variantStyles = "text-red-500";
        break;
        case "h2" : 
       variantStyles = "text-green-500";
        break;
        case "h3" : 
       variantStyles = "text-yellow-500";
        break;
        case "h4" : 
       variantStyles = "";
        break;
        case "h5" : 
       variantStyles = "";
        break;
        case "base" : 
       variantStyles = "";
        break;
        case "caption" : 
       variantStyles = "";
        break;
      }
  return (
   <Component className={clsx(variantStyles,
    font === "workSans"? "font-work-sans":"font-space-mono",
    className,weight,leading) }>

      
         {children} 
     </Component>
  )
}

export default Typography
