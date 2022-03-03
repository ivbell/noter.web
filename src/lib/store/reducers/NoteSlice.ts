import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface AbilityState {
  player_name: string
  ability_id: string
}

export interface PlayerState {
  name: string
  class_id: string
  spec_id: string
}

export interface BossAbilityState {
  name: string
  id: string
  color?: string
}

export interface NoteState {
  name: string
  players: PlayerState[]
  boss_ability: BossAbilityState[]
}

const initialState: NoteState = {
  name: '',
  players: [],
  boss_ability: [],
}

export const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    nameChange(state, action: PayloadAction<string>) {
      state.name = action.payload
    },
    addNewPlayer(state, action: PayloadAction<PlayerState>) {
      state.players.push(action.payload)
    },
    addNewBossAbility(state, action: PayloadAction<BossAbilityState>) {
      state.boss_ability.push(action.payload)
    },
  },
})

export default noteSlice.reducer
