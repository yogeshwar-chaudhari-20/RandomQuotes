import { StyleSheet, View, ActivityIndicator } from 'react-native'
import React from 'react'
import { useTheme } from 'react-native-paper'

type Props = {}

const LoadingView = (props: Props) => {
  const theme = useTheme()
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
      }}
    >
      <ActivityIndicator size='large' color={theme.colors.primary} />
    </View>
  )
}

export default LoadingView

const styles = StyleSheet.create({})
