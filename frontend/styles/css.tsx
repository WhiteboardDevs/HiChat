import { StyleSheet } from "react-native";
export const regStyles = StyleSheet.create({
  input: {
    height: 40,
    padding: 10
  },
  row: {
    marginTop: 10,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    maxWidth: 150,
    alignSelf: "center",
    margin: 20
  },
  text: {
    letterSpacing: 0.25,
    fontWeight: "bold",
    textAlign: "center"
  }
});