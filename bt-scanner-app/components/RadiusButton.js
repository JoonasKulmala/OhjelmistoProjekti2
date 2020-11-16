import React, { useState } from 'react'
import { Button, StyleSheet, View } from 'react-native'

const RadiusButton = ({ showRadius, setShowRadius }) => {
  const [buttonTitle, setButtonTitle] = useState('hide radius')

  const toggleRadius = () => {
    setShowRadius(!showRadius)
    if (buttonTitle === 'show radius') {
      setButtonTitle('hide radius') 
    } else {
      setButtonTitle('show radius')
    }
  }

  return (
    <View style={styles.radiusButton}>
      <Button 
        onPress={toggleRadius}
        title={buttonTitle}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  radiusButton: {
    position: 'absolute',
    top: '7%',
    left: '2%',
  }
})

export default RadiusButton