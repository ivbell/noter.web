import { AppDispatch } from '..'
import { BossAbilityState, noteSlice, PlayerState } from '../reducers/NoteSlice'

export const noteNameChange = (noteName: string) => (dispatch: AppDispatch) => {
  dispatch(noteSlice.actions.nameChange(noteName))
}

export const notePlayerAdded = (player: PlayerState) => (dispatch: AppDispatch) => {
  dispatch(noteSlice.actions.addNewPlayer(player))
}

export const noteBossAbilityAdded = (ability: BossAbilityState) => (dispatch: AppDispatch) => {
  dispatch(noteSlice.actions.addNewBossAbility(ability))
}
