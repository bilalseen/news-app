## NEWSAPP uygulama

Bu repo json dosyasından veri çekerek yapmış olduğum haber sayfasıdır. Ayrıca custom component yapısını kullanarak kod fazlalığından kurtuldum.

Flatlist componenti kullanımı ile şu anda ki veri sayısı için pek bir şey değiştirmese de cihaz sağlığını iyileştirme amacı ile kullandım.

```javascript
    <FlatList
        ListHeaderComponent={renderBanner}
        keyExtractor={renderKeyExtractor}
        data={news_data}
        renderItem={renderNews}>
    </FlatList>
```

![Application screenshot](./src/figured/Screenshot_1.png)
![Application screenshot](./src/figured/Screenshot_2.png)
