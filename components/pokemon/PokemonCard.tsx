import React, {FC} from 'react'
import { Button, Text, Image, Grid, Card, Row } from '@nextui-org/react'
import { SmallPokemon } from '../../interfaces/pokemon-list';
import { useRouter } from 'next/router';
interface Props{
    pokemon: SmallPokemon
}
export const PokemonCard: FC<Props> = ({pokemon}:Props) => {
const {img, name, id} = pokemon;
const router = useRouter();
const onclick =()=>{
    router.push(`/name/${name}`)
}
  return (
    <>
    <Grid xs={6} sm={3} md={2} xl={1}>
        <Card isPressable isHoverable onClick={onclick}>
            <Card.Body css={{p: 1}}>
                <Card.Image 
                    src={img}
                    width='100%'
                    height={140} 
                />
                <Card.Footer>
                    <Row justify='space-between'>
                    <Text transform='capitalize'>{name}</Text>
                    <Text>#{id}</Text>
                    </Row>
                </Card.Footer>
            </Card.Body>
        </Card>
    </Grid>
    </>
  )
}
