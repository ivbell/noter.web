import { AppDispatch } from '..'
import {
  AddNewItemInLine,
  BossAbilityState,
  noteSlice,
  PlayerState,
  TableItemCreate,
  UpdatePlayer,
} from '../reducers/NoteSlice'

export const noteNameChange = (noteName: string) => (dispatch: AppDispatch) => {
  dispatch(noteSlice.actions.nameChange(noteName))
}

export const notePlayerAdded = (player: PlayerState) => (dispatch: AppDispatch) => {
  dispatch(noteSlice.actions.addNewPlayer(player))
}

export const notePlayerDelete = (name: string) => (dispatch: AppDispatch) => {
  dispatch(noteSlice.actions.deletePlayer(name))
}

export const notePlayerUpdate = (player: UpdatePlayer) => (dispatch: AppDispatch) => {
  dispatch(noteSlice.actions.updatePlayer(player))
}

export const noteBossAbilityAdded = (ability: BossAbilityState) => (dispatch: AppDispatch) => {
  dispatch(noteSlice.actions.addNewBossAbility(ability))
}

export const noteBossAbilityDelete = (name: string) => (dispatch: AppDispatch) => {
  dispatch(noteSlice.actions.deleteBossAbility(name))
}

export const noteTableAdd = (tableItem: TableItemCreate) => (dispatch: AppDispatch) => {
  dispatch(noteSlice.actions.tableLineAdd(tableItem))
}

export const tableItemAddNewFeature = (tableItem: AddNewItemInLine) => (dispatch: AppDispatch) => {
  dispatch(noteSlice.actions.tableItemAdd(tableItem))
}
