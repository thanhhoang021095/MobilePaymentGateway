import React from 'react';
import {StyleSheet, View} from 'react-native';
import {WebView} from 'react-native-webview';

const App = () => {
  const [url, setUrl] = React.useState('https://heimerdinger.alopay.net');

  return (
    <View style={styles.container}>
      <WebView
        source={{uri: url}}
        style={styles.webView}
        onNavigationStateChange={navState => {
          setUrl(navState.url);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webView: {
    flex: 1,
  },
});

export default App;
