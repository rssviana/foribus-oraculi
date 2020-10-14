import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from 'react-redux';
import { AppState } from 'store/types';

const useSelector: TypedUseSelectorHook<AppState> = useReduxSelector;

export default useSelector;
