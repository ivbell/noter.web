import {
  Box,
  Button, FormControl, FormLabel,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Stack, Switch, Text
} from '@chakra-ui/react'
import React, {FC, useState} from 'react'

type AbilityState = {
  name: string
  id: string
}

const AddAbility: FC = () => {
  const [link, setLink] = useState<boolean>(false)

  const [whLink, setWhLink] = useState<string>('')
  const initialAbilityState = {
    name: '',
    id: ''
  }
  const [ability, setAbility] = useState<AbilityState>(initialAbilityState)

  const addAbilityLink = () => {
    console.log('link')
  }

  const addAbilityNameId = () => {
    console.log('name id')
  }

  const handleAbility = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAbility({...ability, [e.target.name]: e.target.value})
  }

  return (
    <Box m={1}>
      <Popover>
        <PopoverTrigger>
          <Box>
            <Button variant={'ghost'}>Add ability</Button>
          </Box>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow/>
          <PopoverCloseButton/>
          <PopoverHeader>
            <Text>Add ability!</Text>
            <FormControl display={'flex'} alignItems={'center'}>
              <FormLabel mb={0} htmlFor="email-alerts">Wowhead link</FormLabel>
              <Switch isChecked={link} onChange={() => setLink(!link)} id={'email-alerts'}/>
            </FormControl>
          </PopoverHeader>
          <PopoverBody>
            <Stack spacing={2}>
              {!link
                ?
                <>
                  <Input onChange={handleAbility} value={ability.name} name={'name'} placeholder={'Ability name'}/>
                  <Input onChange={handleAbility} value={ability.id} name={'id'} placeholder={'Ability id WH'}/>
                  <Stack direction={['column', 'row']}>
                    <Box>
                      <Button onClick={addAbilityLink} variant={'ghost'}>Save</Button>
                    </Box>
                    <Box>
                      <Button colorScheme={'blue'}>Close</Button>
                    </Box>
                  </Stack>
                </>
                :
                <>
                  <Input placeholder={'Wowhead link'}/>
                  <Stack direction={['column', 'row']}>
                    <Box>
                      <Button onClick={addAbilityNameId} variant={'ghost'}>Save</Button>
                    </Box>
                    <Box>
                      <Button colorScheme={'blue'}>Close</Button>
                    </Box>
                  </Stack>
                </>
              }
            </Stack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  )
}

export default AddAbility