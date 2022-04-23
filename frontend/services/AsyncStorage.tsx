import AsyncStorage from '@react-native-async-storage/async-storage'

async function readData (key: string){
  try {
    const data = await AsyncStorage.getItem(key)

    if (data !== null) {
      console.log("in read data")
      console.log(data)
      alert('Login successfull.')
      return data
    }
  } catch (e) {
    alert('Failed to fetch the data from storage.')
  }
}

async function saveData(key: string, value: string){
  try {
    await AsyncStorage.setItem(key, value)
    alert('Data successfully saved')
  } catch (e) {
    alert('Failed to save the data to the storage')
  }
}

async function removeData(key: string) {
  try {
    await AsyncStorage.removeItem(key)
    alert('Item successfully removed from async storage!')
  } catch (e) {
    alert('Failed to remove item from async storage.')
  }
}

async function clearStorage() {
  try {
    await AsyncStorage.clear()
    alert('Storage successfully cleared!')
  } catch (e) {
    alert('Failed to clear the async storage.')
  }
}

export { readData, saveData, removeData, clearStorage };