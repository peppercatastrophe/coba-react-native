import { StatusBar } from 'expo-status-bar';
import { 
  FlatList,
  StyleSheet, 
  Text, 
  Button,
  View 
} from 'react-native';
import axios from 'axios';
import styles from '../styles/style';
import AnimeCard from '../components/AnimeCard';
import { useEffect, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';

export default function Home({ navigation }) {

  const [data, setData] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [pageUrl, setPageUrl] = useState('https://kitsu.io/api/edge/anime?page[limit]=18&page[offset]=0')
  const [buttonTrigger, setButtonTrigger] = useState(0)

  const forSize = []
  for (let i = 0; i < 99; i++) {
    forSize.push({
      id: i
    })
  }

  const ITEM_HEIGHT = 140

  async function fetchData() {
    if (isLoaded) return null
    try {
      const res = await axios.get(pageUrl)
      setData(res.data)
      // console.log(res.data.data);
      if (res.data) setIsLoaded(true)
      console.log('fetchData done with', res.data.data.length);
    } catch (error) {
      if(error.response) {
        console.log(error.response.data)
      } else console.log(error);
    }
  }

  function onPressAnimeDetail(animeId) {
    if (!data) return null
    const thisAnime = data.data.find( (d) => {
      return animeId == d.id
    })
    // navigation.setOptions({ title: thisAnime.attributes.titles.en_jp })
    navigation.push('AnimeDetail', {
      data: thisAnime
    })
  }

  function onPressFirst() {
    console.log('onPressFirst');
    if (data?.links) setPageUrl(data.links.first)
    setIsLoaded(false)
    // fetchData()
    setButtonTrigger( prev => prev+1)
  }
  function onPressPrev() {
    console.log('onPressPrev');
    if (data?.links) setPageUrl(data.links.prev)
    setIsLoaded(false)
    // fetchData()
    setButtonTrigger( prev => prev+1)
  }
  function onPressNext() {
    console.log('onPressNext');
    if (data?.links) setPageUrl(data.links.next)
    setIsLoaded(false)
    // fetchData()
    setButtonTrigger( prev => prev+1)
  }
  function onPressLast() {
    console.log('onPressLast');
    if (data?.links) setPageUrl(data.links.last)
    setIsLoaded(false)
    // fetchData()
    setButtonTrigger( prev => prev+1)
  }

  useFocusEffect(() => {
    navigation.setOptions({ title: 'Home'})

  })

  useEffect(() => {
    fetchData()
    console.log(data!==null);
    console.log(isLoaded, '<-- isLoaded');
  
    return () => {
      // setData(null)
      // setIsLoaded(false)
    }
  }, [])

  useEffect(() => {
    //
    console.log(isLoaded, '<-- isLoaded');
    fetchData()
  
    return () => {
      //
    }
  }, [buttonTrigger])
  
  

  return (
    <View 
      style={styles.container}
    >
      
      <View
        style={{
          flex: 1,
          flexBasis: 100,
          flexGrow: 1,
          flexShrink: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: "#111",
          borderColor: '#fff',
          width: '100%'
        }}
      >
        
        { (isLoaded) ? 
        <FlatList
          style={{
            width: '100%',
            backgroundColor: '#222'
          }}
          data={data.data}
          renderItem={({item}) => {
            return <AnimeCard 
              animeTitle={item.attributes.titles.en_jp} 
              animeImgUrl={item.attributes.posterImage.tiny} 
              animeId={item.id}
              onPressAnimeDetail={onPressAnimeDetail} 
            />
          }}
          keyExtractor={item => item.id}
          horizontal={false}
          getItemLayout={(data, index) => (
            {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index}
          )}
          numColumns={3}
        />
        : <Text style={{fontSize: 52, color: '#fff'}}>Loading ...</Text>}

      </View>

      <View style={styles.bottomButtons}>
        <Button 
          title="First"
          onPress={onPressFirst}
        />
        <Button 
          title="Prev"
          onPress={onPressPrev}
        />
        <Button 
          title="Next"
          onPress={onPressNext}
        />
        <Button 
          title="Last"
          onPress={onPressLast}
        />
      </View>
    </View>
  );
}
