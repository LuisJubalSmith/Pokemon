import { Navbar } from '../ui';
import Head from 'next/head'
import React, { FC } from 'react'


interface Props{
    title: string;
    children: any;
}
const origin = (typeof window === 'undefined') ? '' : window.location.origin;
export const Layout: FC<Props>= ({children, title}) => {
 
  return (
    <>
        <Head>
            <title>{title || 'PokemonApp'}</title>
            <meta name="author" content="Luis Smith" />
            <meta name="description" content="Info about to pokemon <>Pokemon Name</>" />
            <meta name="Keyword" content="<>Pokemon Name</>, pokemom, pokedex" />

            <meta property="og:title" content={`Informacion sobre ${title}`} />
            <meta property="og:description" content={`Esta es la pagina sobre ${title}`} />
            <meta property="og:image" content={`${origin}/img/banner.png`} />
        </Head>
        <Navbar />
        <main style={{
            padding:'0px 20px'
        }}>{children}</main>
    </>
  )
}
