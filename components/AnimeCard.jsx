import { useEffect } from "react";
import { 
  Image, 
  Text,
  TouchableHighlight,
  View 
} from "react-native";

export default function AnimeCard({
  animeTitle, 
  animeImgUrl, 
  animeId,
  onPressAnimeDetail
}) {

  

  function onPressImage(animeId) {
    onPressAnimeDetail(animeId)
  }

  
  
  
  return (
    <>
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#000',
        alignItems: 'center',
        minWidth: 110,
        paddingBottom: 15,
      }}
    >
      <TouchableHighlight onPress={ () => onPressImage(animeId) } underlayColor='white'>
        <Image 
          style={{
            height: 156,
            width: 110,
          }}
          source={{
            uri: animeImgUrl
          }}
        />
      </TouchableHighlight>
        <Text
          style={{
            color: '#fff',
            // marginBottom: 5
          }}
        >
          {animeTitle}
        </Text>
    </View>
    </>
  )
}