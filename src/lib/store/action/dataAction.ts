import { AppDispatch } from '..'
import { Classes } from '../../type'
import { dataSlice } from '../reducers/DataSlice'

export const loadClass = (classes: Classes[]) => (dispatch: AppDispatch) => {
  dispatch(dataSlice.actions.loadClass(classes))
}
