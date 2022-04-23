export const CHAT_BOX_ICON_SIZE = 64
export const FONT_SIZE = 16
export const MESSAGE_STAMP_SIZE = 12
export const TITLE_FONT_SIZE = 30
export const SUB_TITLE_FONT_SIZE = 20

export const STORAGE_KEY_PHONE = '@save_phone'
export const STORAGE_KEY_USER = '@save_user'

type MessageType = {
  id: string,
  message: string,
  time: number,
  self?: boolean
}

export { MessageType }
