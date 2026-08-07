import { useDispatch, useSelector } from 'react-redux'
import type { RootReducer, AppDispatch } from './index'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootReducer>()
