import { StyleSheet } from "react-native";
import { 
  Platform, 
  StatusBar,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
    height: "100%",
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 
    // paddingBottom: 100
  },
  cards: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    flexGrow: 1,
    gap: 12,
    padding: 12,
    backgroundColor: '#000',
  },
  bottomButtons: {
    flex: 1,
    flexBasis: 64,
    flexShrink: 1,
    flexGrow: 0,
    width: "100%",
    paddingTop: 12,
    paddingBottom: 12,
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
});

export default styles