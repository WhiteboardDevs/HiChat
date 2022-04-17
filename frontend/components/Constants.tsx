export const CHAT_BOX_ICON_SIZE = 64
export const FONT_SIZE = 16
export const MESSAGE_STAMP_SIZE = 12

type MessageType = {
  id: string,
  message: string,
  time: number,
  self?: boolean
}

export { MessageType }
