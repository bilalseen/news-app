## NEWSAPP uygulama

Bu repo json dosyasından veri çekerek yapmış olduğum haber sayfasıdır. Ayrıca custom component kullanarak kod fazlalığından kurtuldum.

Flatlist componenti kullanımı ile şu anda ki veri sayısı için pek bir şey değiştirmese de cihaz sağlığını iyileştirmeyi hedefledim.

```javascript
    <FlatList
        ListHeaderComponent={renderBanner}
        keyExtractor={renderKeyExtractor}
        data={news_data}
        renderItem={renderNews}>
    </FlatList>
```
