import { useDispatch } from 'react-redux'

import {
  swapLoadingState,
  storeErrors,
  storeData
} from '../store/apiDataSlice'

const dispatch = useDispatch()

export const fetchSimulations = ({ indexing, revenue }) => {
  dispatch(swapLoadingState(true))
  fetch(`http://localhost:3000/simulacoes?tipoIndexacao=${indexing}&tipoRendimento=${revenue}`)
    .then(response => response.json())
    .then(data => dispatch(storeData(data)))
    .then(() => dispatch(swapLoadingState(false)))
    .catch(err => dispatch(storeErrors(err)))
}
