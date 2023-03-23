import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import NewsCard from './components/NewsCard';
import news_data from './news_data.json';
import news_banner_data from './news_banner_data.json';

function App() {
  const renderNews = ({item}) => <NewsCard news={item} />;
  const renderKeyExtractor = item => item.u_id.toString();
  const renderBanner = (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {news_banner_data.map(bannerNews => (
        <Image
          style={styles.banner_image}
          source={{uri: bannerNews.imageUrl}}
        />
      ))}
    </ScrollView>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>~NEWS~</Text>
      <FlatList
        ListHeaderComponent={renderBanner}
        keyExtractor={renderKeyExtractor}
        data={news_data}
        renderItem={renderNews}></FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
    // paddingVertical: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#dc143c',
    textAlign: 'center',
    margin: 10,
  },
  banner_image: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 2,
  },
});

export default App;
