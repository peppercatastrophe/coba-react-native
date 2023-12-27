import { 
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import styles from "../styles/style";
import { useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";

export default function AnimeDetail({ route, navigation }){

  // useEffect(() => {
  //   // if (navigation?.setOptions)
  //   // setTimeout(() => {
  //   //   navigation.setOptions({ title: route.params.data.id })
  //   //   console.log('header title changed to', route.params.data.id);
  //   // }, 1000);
  
  //   return () => {
  //     navigation.setOptions({ title: 'Home' })
  //   }
  // }, [])

  // useFocusEffect(() => {
  //   navigation.setOptions({ title: route.params.data.attributes.titles.en_jp })
  // })
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  useFocusEffect(()=>{
    console.log(route.params.data.attributes.synopsis);
  })

  return (
    <>
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={{
            width: windowWidth * 0.8,
            height: windowHeight * 0.5,
            resizeMode: "contain"
          }}
          source={{
            uri: route.params.data.attributes.posterImage.original
          }}
        />
        <Text style={{color: '#fff', fontSize:18 , padding: 24, paddingBottom: windowHeight*0.5, textAlign:'justify'}}>{ route.params.data.attributes.synopsis }</Text>
      </View>
    </ScrollView>
    </>
  )
}