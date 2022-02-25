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
  Stack, Switch, Text, useToast
} from '@chakra-ui/react'
import React, {FC, useState} from 'react'
import axios from 'axios'
import useTokenCookie from '../../../lib/hooks/userTokenCookie'
import {useParams} from 'react-router-dom'

type Ability = {
  name: string,
  spell_id: string,
  link: string
  icon: string
}
type PostAbility = {
  class_id: string | undefined
  link_wowhead: string
  icon: string
  name: string
  wowhead_id: string
}
type AbilityState = Omit<Ability, 'link'>
type AbilityParser = Omit<Ability, 'icon'>

const AddAbility: FC = () => {
  const [link, setLink] = useState<boolean>(false)
  const toast = useToast()
  const {id} = useParams()

  const [whLink, setWhLink] = useState<string>('')
  const initialAbilityState: AbilityState = {
    name: '',
    spell_id: '',
    icon: ''
  }
  const [ability, setAbility] = useState<AbilityState>(initialAbilityState)

  function wowheadLinkParser(link: string): AbilityParser {
    const linkSplit = link.split('/')
    const name = linkSplit[4].split('-').join(' ')
    const spell_id = linkSplit[3].split('=')[1]
    return {
      link, name, spell_id
    }
  }

  function postAbility(data: PostAbility) {
    const {token} = useTokenCookie()

    axios({
      method: 'post',
      url: `${import.meta.env.VITE_SERVER}/ability`,
      headers: {
        Authorization: `Bearer ${token}`
      },
      data: data
    }).then(res => {
      toast({
        status: 'success',
        title: 'Ability added',
        duration: 5000,
        isClosable: true
      })
      setAbility(initialAbilityState)
      setWhLink('')
    }).catch(err => {
      toast({
        status: 'error',
        title: 'Error',
        description: err.message,
        isClosable: true,
        duration: 5000
      })
    })
  }

  const addAbilityLink = () => {
    if (whLink && ability.icon.length > 0) {
      const {link, name, spell_id} = wowheadLinkParser(whLink)
      const data: PostAbility = {
        class_id: id,
        link_wowhead: link,
        name: name,
        icon: ability.icon,
        wowhead_id: spell_id
      }
      postAbility(data)
    } else {
      toast({
        status: 'error',
        title: 'Error',
        description: 'Link not null',
        isClosable: true,
        duration: 5000
      })
    }
  }


  const addAbilityNameId = () => {
    console.log('name id')
  }

  const handleAbility = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAbility({...ability, [e.target.name]: e.target.value})
  }

  const handleWowheadLink = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWhLink(e.target.value)
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
                  <Input onChange={handleAbility} value={ability.spell_id} name={'spell_id'}
                         placeholder={'Ability id WH'}/>
                  <Input onChange={handleAbility} value={ability.icon} name={'icon'} placeholder={'Icon ability'}/>
                  <Stack direction={['column', 'row']}>
                    <Box>
                      <Button onClick={addAbilityNameId} variant={'ghost'}>Save</Button>
                    </Box>
                    <Box>
                      <Button colorScheme={'blue'}>Close</Button>
                    </Box>
                  </Stack>
                </>
                :
                <>
                  <Input onChange={handleWowheadLink} value={whLink} placeholder={'Wowhead link'}/>
                  <Input onChange={handleAbility} name={'icon'} value={ability.icon} placeholder={'Icon'}/>
                  <Stack direction={['column', 'row']}>
                    <Box>
                      <Button onClick={addAbilityLink} variant={'ghost'}>Save</Button>
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