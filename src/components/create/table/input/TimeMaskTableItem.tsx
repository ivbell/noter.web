import { Input } from '@chakra-ui/react'
import React, { FC } from 'react'
import InputMask from 'react-input-mask'
import { InputProps } from '../../../../lib/type'

const TimeMaskTableItem: FC<InputProps> = (props) => {
  return (
    <InputMask mask='99:99' value={props.value} onChange={props.onChange}>
      {(inputProps: any) => <Input pl={0.5} pr={0.5} {...inputProps} />}
    </InputMask>
  )
}

export default TimeMaskTableItem
