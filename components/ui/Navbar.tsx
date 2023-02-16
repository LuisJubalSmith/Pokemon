import React from 'react'
import Image from 'next/image'
import { useTheme,Text, Spacer, Link } from '@nextui-org/react'
import NextLink from 'next/link'


export const Navbar = () => {
const {theme} = useTheme()
// console.log(theme);

  return (
    <div style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '0px 20px 0px 20px',
        backgroundColor: theme?.colors.blue100.value
        // backgroundColor: 'blue'
    }}>
        <Image 
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" 
            alt="Icono de la App"
            width={80}
            height={80} 
        />
        <Link href='/'>
            <Text color='#fff' h2>P</Text>
            <Text color='#fff' h3>okémon</Text>
        </Link>
        <Spacer css={{flex: 1}} />
        <Link href='/favorites'>
            <Text color='#fff'>Favoritos</Text>
        </Link>
        
    </div>
  )
}




{/* <Text color='#fff' h2>P</Text>
        <Text color='#fff' h3>okémon</Text> */}

{/* <NextLink href='/' passHref>
          <Link>
            <Text color='#fff' h2>P</Text>
            <Text color='#fff' h3>okémon</Text>
          </Link>
        </NextLink>
        <Spacer css={{flex: 1}} />
        <NextLink href='/favorites' passHref>
            <Link>
            <Text color='#fff'>Favoritos</Text>
            </Link>
        </NextLink> */}

