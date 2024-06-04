import Head from "next/head"

interface Props {
    children : React.ReactNode;
    title : string;
    description: string

}

const seo = ({
    children,
    title = "",
    description = ""
}:Props) => {
  return (
    <Head>
       <link rel="icon" type="image/svg+xml" href="/Storefront.svg" />
        <title>{title}</title>
        {description &&<meta name={description} content={description} />}
    </Head>
  )
}

export default seo
