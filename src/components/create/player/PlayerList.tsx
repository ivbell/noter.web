import { Wrap, WrapItem } from '@chakra-ui/react'
import React, { FC } from 'react'
import { useAppSelector } from '../../../lib/hooks/redux'
import PlayerItem from './PlayerItem'

const PlayerList: FC = () => {
  const { players } = useAppSelector((state) => state.noteReducer)
  const playersList = players.map((p) => (
    <WrapItem key={p.name}>
      <PlayerItem name={p.name} class_id={p.class_id} spec_id={p.spec_id} />
    </WrapItem>
  ))
  return <Wrap direction={['column', 'row']}>{playersList}</Wrap>
}

export default PlayerList
