import React from 'react'
import { Card, Grid } from '@nextui-org/react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

interface Props {
    pokemonId: number;
}

export const FavoritesCardPokemons: NextPage<Props> = ({pokemonId}) => {
const router = useRouter();
const onclick =()=>{
    router.push(`/pokemon/${pokemonId}`)
}
  return (
   <Grid key={pokemonId} xs={6} sm={3} md={2}>
        <Card isHoverable isPressable css={{padding: 10}} onClick={onclick}>
            <Card.Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
                width={'100%'}
                height={140}
            />
        </Card>
    </Grid>
  )
}
