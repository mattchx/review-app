import React from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native'
import { globalStyles } from '../styles/global'
import Card from '../shared/card'

export default function ReviewDetails({ route, navigation }) {
  const { title, body, rating } = route.params

  const ratingIcons = () => {
    let images = []
    for (let i = 0; i < rating; i++) {
      let heart = []
      heart.push(<Image source={require('../assets/rating-1.png')} />)
      images.push(heart)
    }
    return images
  }

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{title}</Text>
        <Text>{body}</Text>
        <Text>{ratingIcons()}</Text>
      </Card>
    </View>
  )
}

const style = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  icons: {},

  icon: {},
})
