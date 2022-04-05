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

export interface BossAbilityTable extends BossAbilityState {
  stack?: number
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
  boss_ability?: BossAbilityTable | string
  title?: string
  comment?: string
  players?: PlayerTable[]
}

export type TableItemName = 'id' | 'time' | 'boss_ability' | 'title' | 'comment' | 'players'

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

export interface AddNewItemInLine {
  type: TableItemName
  id: number
}

const initialState: NoteState = {
  name: '',
  players: [
    { name: 'Debora', class_id: '6214c7bb6308322b1735c1ce', spec_id: '' },
    { name: 'Ivan', class_id: '620f85133509f3fa588f28a2', spec_id: '' },
  ],
  boss_ability: [{ name: 'Chain', id: '347269' }],
  table: [
    {
      id: 1,
      time: { date: '00:00' },
      title: `New line 1`,
      boss_ability: { name: 'Chain', id: '347269' },
    },
  ],
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
      state.table.push({ id: index, ...payload })
    },
    tableItemAdd(state, { payload }: PayloadAction<AddNewItemInLine>) {
      state.table.map((tableItem) => {
        if (tableItem.id === payload.id) {
          switch (payload.type) {
            case 'time':
              tableItem['time'] = { date: `00:0${payload.id}` }
              break
            case 'title':
              tableItem['title'] = 'New title'
              break
            case 'comment':
              tableItem['comment'] = 'New comment'
              break
            case 'players':
              tableItem['players'] = [
                { player: { name: '', spec_id: '', class_id: '' }, ability: '' },
              ]
              break
            case 'boss_ability':
              tableItem['boss_ability'] = 'Boss ability'
              break
            default:
              console.log(tableItem)
              break
          }
        }
      })
    },
    tableItemSave(state, { payload }: PayloadAction<TableItem>) {
      state.table.forEach((item) => {
        if (item.id === payload.id) {
          item = payload
        }
      })
    },
  },
})

export const noteSelector = (state: RootState) => state.note

export default noteSlice.reducer
