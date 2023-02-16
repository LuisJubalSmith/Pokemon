import { Card, Grid } from '@nextui-org/react';
import { NextPage } from 'next';
import React, { useState, useEffect } from 'react'
import { FavoritesCardPokemons } from './FavoritesCardPokemons';
interface Props{
    pokemons: number[]
}

export const FavoritesPokemons: NextPage<Props> = ({pokemons}) => {
  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
          {
          pokemons.map((id) => (
            <FavoritesCardPokemons
                key={id}
                pokemonId={id} 
            />
          ))
        }
        </Grid.Container>
  )
}






 // <Grid key={id} xs={6} sm={3} md={2}>
            //   <Card isHoverable isPressable css={{padding: 10}}>
            //     <Card.Image
            //         src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            //         width={'100%'}
            //         height={140}
            //     />
            //   </Card>
            // </Grid>