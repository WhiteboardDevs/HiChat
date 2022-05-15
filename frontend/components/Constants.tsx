export const CHAT_BOX_MIN_HEIGHT = 64
export const ICON_SIZE = 36
export const FONT_SIZE = 16
export const MESSAGE_STAMP_SIZE = 12
export const TITLE_FONT_SIZE = 30
export const SUB_TITLE_FONT_SIZE = 20

export const STORAGE_KEY_PHONE = '@save_phone'
export const STORAGE_KEY_USER = '@save_user'

export type MessageType = {
  id: string,
  message: string,
  time: number,
  self?: boolean,
  status?: MessageStatus
}

export enum MessageStatus {
  Sending,
  Sent,
  Seen
}


const API_GATEWAY_EP = "https://gner4se1je.execute-api.ap-south-1.amazonaws.com/Prod" 
const LOCAL_EP = "http://localhost:3000"

/* Resources */
const GET_RECIPIENT_MESSAGES_RESOURCE = "/getRecipientMessages"
const SEND_MESSAGE_RESOURCE = "/sendMessage"

/* FQ Gateway endpoints */
export const GET_RECIPIENT_MESSAGES_URL = API_GATEWAY_EP + GET_RECIPIENT_MESSAGES_RESOURCE
export const SEND_MESSAGE_URL = API_GATEWAY_EP + SEND_MESSAGE_RESOURCE

/* FQ Local endpoints */
export const GET_RECIPIENT_MESSAGES_LOCAL_URL = LOCAL_EP + GET_RECIPIENT_MESSAGES_RESOURCE
export const SEND_MESSAGE_LOCAL_URL = LOCAL_EP + SEND_MESSAGE_RESOURCE
