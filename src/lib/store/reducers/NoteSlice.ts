import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '..'

export interface AbilityState {
  player_name: string
  ability_id: string
}

export interface PlayerState {
  name: string
  class_id: string | undefined
  spec_id: string | undefined
}

export interface BossAbilityState {
  name: string
  id: string
  color?: string
}

export interface TimeTable {
  date: string
  phase?: string
}

export interface PlayerTable {
  player: PlayerState
  ability: string
}
export interface TableItem {
  id: number
  time?: TimeTable
  boss_ability?: string
  title?: string
  comment?: string
  players?: PlayerTable[]
}

export type TableItemCreate = Omit<TableItem, 'id'>

export interface NoteState {
  name: string
  players: PlayerState[]
  boss_ability: BossAbilityState[]
  table: TableItem[]
}
type OldName = {
  old_name: string
}

export type UpdatePlayer = PlayerState & OldName

const initialState: NoteState = {
  name: '',
  players: [
    { name: 'Debora', class_id: '6214c7bb6308322b1735c1ce', spec_id: '' },
    { name: 'Ivan', class_id: '620f85133509f3fa588f28a2', spec_id: '' },
  ],
  boss_ability: [{ name: 'Chain', id: '347269' }],
  table: [],
}

export const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    nameChange(state, { payload }: PayloadAction<string>) {
      state.name = payload
    },
    addNewPlayer(state, action: PayloadAction<PlayerState>) {
      state.players.push(action.payload)
    },
    deletePlayer(state, action: PayloadAction<string>) {
      const candidate = state.players.find((p) => p.name === action.payload)
      if (candidate) {
        const index = state.players.indexOf(candidate)
        state.players.splice(index, 1)
      }
    },
    updatePlayer(state, action: PayloadAction<UpdatePlayer>) {
      const candidate = state.players.find((p) => p.name === action.payload.old_name)
      if (candidate) {
        state.players.forEach((element) => {
          if (element.name === action.payload.old_name) {
            element.name = action.payload.name
            element.class_id = action.payload.class_id
            element.spec_id = action.payload.spec_id
          }
        })
      }
    },
    addNewBossAbility(state, action: PayloadAction<BossAbilityState>) {
      state.boss_ability.push(action.payload)
    },
    deleteBossAbility(state, action: PayloadAction<string>) {
      const candidate = state.boss_ability.find((p) => p.name === action.payload)
      if (candidate) {
        const index = state.boss_ability.indexOf(candidate)
        state.boss_ability.splice(index, 1)
      }
    },
    tableLineAdd(state, { payload }: PayloadAction<TableItemCreate>) {
      const index = state.table.length + 1
      state.table.push({ ...payload, id: index })
    },
  },
})

export const noteSelector = (state: RootState) => state.note

export default noteSlice.reducer
