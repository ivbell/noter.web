import { Box } from '@chakra-ui/react'
import React, { FC, useState } from 'react'
import TimeEdit from './TimeEdit'

type Props = {
  date: string
  phase?: string
}

const TimeTableLine: FC<Props> = (props) => {
  const [edit, setEdit] = useState<boolean>(false)

  const TimeNotEdit = () => (
    <Box onClick={() => setEdit(true)}>
      {props.date}
      {props.phase && ` , ${props.phase}`}
    </Box>
  )

  return <>{edit ? <TimeEdit date={props.date} phase={props.phase} /> : <TimeNotEdit />}</>
}

export default TimeTableLine
