import { Button, Text, Image, Grid, Card, Row } from '@nextui-org/react'
import { Layout } from '../components/layout'
import { GetStaticProps, NextPage } from 'next';
import { pokeApi } from '../api';
import { PokemonListResponse, SmallPokemon } from '../interfaces';
import { PokemonCard } from '../components/pokemon';

interface Props{
  pokemons: SmallPokemon[]
}
const Home: NextPage<Props> =({pokemons})=> {
  // console.log(pokemons);
  return (
    <Layout title="Listado de Pokemones">
      <h1>Pokemon App</h1>
      <Grid.Container gap={2} justify="flex-start">
          {
            pokemons.map((pokemon) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))
          }
      </Grid.Container>
    </Layout>
  )
}
// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
// import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async (ctx) => {
  const {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');  // your fetch function here
  // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg
  const pokemons: SmallPokemon[] = data.results.map((poke, index) => ({
     ...poke,
    id: index + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`
  }))
  return {
    props: {
      pokemons
    }
  }
}

export default Home;




// <Grid key={id} xs={6} sm={3} md={2} xl={1}>
              //   <Card isPressable isHoverable>
              //     <Card.Body css={{p: 1}}>
              //       <Card.Image 
              //         src={img}
              //         width='100%'
              //         height={140} 
              //       />
              //       <Card.Footer>
              //         <Row justify='space-between'>
              //           <Text transform='capitalize'>{name}</Text>
              //           <Text>#{id}</Text>
              //         </Row>
              //       </Card.Footer>
              //     </Card.Body>
              //   </Card>
              // </Grid>