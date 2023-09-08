import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Message center"
        onPress={() => {
          // Open Salesforce URL in WebView
          navigation.navigate('WebViewScreen', { url: 'https://d2t000000ixrbeak-dev-ed.develop.my.site.com/testSite31Aug2023' });
        }}
      />
      <Button
        title="MyCareTeam"
        onPress={() => {
          // Navigate to MyCarePage
          navigation.navigate('MyCarePage');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
