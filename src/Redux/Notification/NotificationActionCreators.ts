
import {
  IFnAddNotification, INotification } from '../../Interfaces/NotificationInterfaces';
import * as actions from './NotificationActionTypes'

export const addNotification: IFnAddNotification = (type, message, id)
: actions.AddNotification => ({
  type: actions.ADD_NOTIFICATION,
  payload: { type, message, id }
})

export const removeNotification = (id: INotification['id'])
  : actions.RemoveNotification => ({
  type: actions.REMOVE_NOTIFICATION,
  payload: id
})
