import React from 'react'
import { StyleSheet, View, FlatList, Image, Text, TouchableOpacity} from 'react-native'
import Card from '../Component/Card'
import {ARTICLES} from '../Data/dataBase2'


export default function Categorie(props) {
    // console.log(props.navigation.getParam('catId'))
const catId = props.navigation.getParam('catId')
const currentArticles = ARTICLES.filter(articles => articles.catId === catId)
// console.log(currentArticles)
const selectItem = (itemData) => {
    props.navigation.navigate('DetailScreen', {
        itemId : itemData.item.id
    })
}
const renderItem = (itemData) => {
// console.log(itemData)

    return (
            <Card itemData={itemData} selectItem = {selectItem} />
    )
}
    return (
        <View>
        <FlatList
        style={css.listItem}
        data={currentArticles}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

        </View>
    )
}

Categorie.navigationOptions = (props) => {
    return {
        title : props.navigation.getParam('catName'),
    };
        
}
const css=StyleSheet.create({
    listItem : {
        paddingHorizontal : 15,
    }
})