import { IArrayOfNotifications } from '../../Interfaces/NotificationInterfaces'
import * as types from './NotificationActionTypes'

interface IGeneralState {
  notifications: IArrayOfNotifications
}

const INITIAL_STATE: IGeneralState = {
  notifications: []
}

const NotificationReducer = (
    state = INITIAL_STATE, action: types.NotificationTypes) => {
  switch (action.type) {
    case types.ADD_NOTIFICATION:
      return {
        ...state,
        notifications: [...state.notifications, {...action.payload}]
      }

    case types.REMOVE_NOTIFICATION:
      return {
        ...state,
        notifications: state.notifications.filter((note) => note.id !== action.payload)
      }

    default:
      return state
  }
}

export default NotificationReducer
