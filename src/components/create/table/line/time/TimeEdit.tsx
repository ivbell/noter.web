import { Box, Input, Stack } from '@chakra-ui/react'
import React, { FC, useState } from 'react'

type Props = {
  date: string
  phase?: string
}

const TimeEdit: FC<Props> = (props) => {
  const initialTimeTableLine: Props = {
    date: props.date,
    phase: props.phase || '',
  }
  const [timeTable, setTimeTable] = useState<Props>(initialTimeTableLine)

  const handleDateTimeTable = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTimeTable({ ...timeTable, [e.target.name]: e.target.value })
  }
  console.log(timeTable)

  return (
    <Stack spacing={0.5} direction={['column', 'row']}>
      <Box w={'47px'}>
        <Input
        size={'sm'}
          pl={0.5}
          pr={0.5}
          placeholder={'Time'}
          value={timeTable.date}
          onChange={handleDateTimeTable}
          name={'date'}
        />
      </Box>
      <Input
        pl={0.5}
        pr={0.5}
        size={'sm'}
        w={10}
        value={timeTable.phase}
        onChange={handleDateTimeTable}
        name={'phase'}
      />
    </Stack>
  )
}

export default TimeEdit
