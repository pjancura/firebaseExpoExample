import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, View, Text } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useEffect, useState } from 'react';

// import the firebaseConfig.js file to connect to remote realtime database
import { db } from "../../firebaseConfig"
import { ref, set, child, get } from "firebase/database"

export default function TabTwoScreen() {
  const [data, setData] = useState({})

  // useEffect(() => {
  //   const dbRef = ref(db)
  //   get(child(dbRef, "plants/caenothusAmericanus")).then((snapshot) => {
  //     if (snapshot.exists()) {
  //       console.log(snapshot.val())
  //       setData(() => snapshot.val())
  //     } 
  //     else {
  //       console.log("No data available")
  //     }
  //   }).catch((error) => {
  //     console.error(error)
  //   })
  // }, [])

  useEffect(() => {
    const fetchPlants = async () => {
      const res = await fetch("https://nativeplantsgreatlakes-58e5b-default-rtdb.firebaseio.com/plants.json")
      const data = await res.json()
      setData(data)
    }

    fetchPlants()
  })

  function displayPlants(objObj) {
    if (objObj) {
      Object.entries(objObj).map(value => {
        console.log(value[1])
      })
  }}
  
  displayPlants(data)
  
  return (
    <View style={styles.container}>
      {/* {data ? (<Text>{Object.values(data).map(plant => {
        return plant
      })}</Text>) : null} */}
      {displayPlants(data).map(plant => {
        return <Text>{plant}</Text>
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 120,
    marginHorizontal: 20,
  },
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
