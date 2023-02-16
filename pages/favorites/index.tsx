import { Card, Grid } from '@nextui-org/react';
import React, { useState, useEffect } from 'react'
import { FavoritesPokemons } from '../../components/pokemon';
import { Layout } from '../../components/layout';
// import { Container, Text, Image } from '@nextui-org/react';
import { NoFavorites } from '../../components/ui/NoFavorites';
import { localFavorites } from '../../utils';

const FavoritesPage = () => {
  const [favoritePokemon, setFavoritePokemon] = useState<number[]>([]);
  useEffect(() => {
    setFavoritePokemon(localFavorites.pokemons)
  }, [])
  console.log(favoritePokemon);
  
  return (
   <Layout title='Pokemon - Favoritos'>
    {
      favoritePokemon.length === 0
      ? (<NoFavorites />) 
      : (
          <FavoritesPokemons pokemons={favoritePokemon} />
        )
    }
   </Layout>
  )
}

export default FavoritesPage;






 // <Grid.Container gap={2} direction='row' justify='flex-start'>
        //   {
        //   favoritePokemon.map(id => (
        //     <Grid key={id} xs={6} sm={3} md={2}>
        //       <Card isHoverable isPressable css={{padding: 10}}>
        //         <Card.Image
        //             src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
        //             width={'100%'}
        //             height={140}
        //         />
        //       </Card>
        //     </Grid>
        //   ))
        // }
        // </Grid.Container>
        // <FavoritesPokemons favoritePokemon={favoritePokemon} />
