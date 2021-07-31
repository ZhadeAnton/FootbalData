export interface INotification {
  id: string,
  type: 'ERROR' | 'SUCCESS',
  message: string
}

export type IArrayOfNotifications = Array<INotification>

export interface IFnRemoveNotification {
  (id: INotification['id']): void
}

export interface IFnAddNotification {
  (type: 'ERROR' | 'SUCCESS', message: string, id: string): any
}
