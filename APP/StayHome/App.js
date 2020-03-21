import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Card} from 'react-native-elements';
import {Stopwatch} from 'react-native-stopwatch-timer';

export default function App() {
  return (
    <View style={styles.container}>
      <Card title="Temps de confinement">
        <Stopwatch laps msecs />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
