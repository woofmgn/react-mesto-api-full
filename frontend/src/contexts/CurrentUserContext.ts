import { createContext } from "react";
import { ICurrentUser } from '../components/App';

export const CurrentUserContext = createContext({} as ICurrentUser);
