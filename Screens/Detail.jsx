import React from 'react'
import { StyleSheet, View, Text,  Button, ImageBackground } from 'react-native'
import {ARTICLES,CATEGORIES} from '../Data/dataBase2'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import CustomHeaderButton from '../Component/HeaderButton'

export default function Detail(props) {   
const articleId = props.navigation.getParam('itemId')
const currentArticle = ARTICLES.find(art => art.id === articleId)
const currentCategorie = CATEGORIES.find(cat => cat.id === currentArticle.catId)
// console.log(currentArticle)
console.log(currentCategorie)


return (
        <View style={css.container}>
        <View style={css.containerImage}>
        <ImageBackground source={{uri : currentArticle.image}} resizeMode="cover" style={css.image}>
      <Text style={css.text}>{currentArticle.name.toUpperCase()}</Text>
        </ImageBackground>
        </View>
        <Text style={{...css.categorie, ...css.myPadding}}> Categorie : {currentCategorie.name}</Text>
        <Text style={{...css.description, ...css.myPadding}}> Description : {currentArticle.description} </Text>
        <Text style={{...css.price, ...css.myPadding}}> Price : {currentArticle.price} </Text>
        </View>
    )
}

Detail.navigationOptions = (props) => {
const articleId = props.navigation.getParam('itemId')
const currentArticle = ARTICLES.find(art => art.id === articleId)
    return {
        title : currentArticle.name,
        headerRight: () =>
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title='Favorites' iconName='heart' onPress={()=>{console.log('you pressed here')}} />
      </HeaderButtons>

       
    };
        
}




const css=StyleSheet.create({
    container : {
        width : '100%',
        margin : 5,
        backgroundColor : '#FFF'

    },

    containerImage : {
        flexDirection : 'row',
        height : 200,
        // flex : 1,
    },

    image : {
        width : '100%',
        height : '100%',
        justifyContent : 'flex-end'

    },

    text : {
        fontFamily : 'bold',
        // textTranform : 'uppercase',
        textAlign : 'center',
        backgroundColor : 'rgba(0,0,0,0.3)',
    },

    price : {
        textAlign : 'center',
    },

    myPadding : {
        paddingHorizontal : 10,
        paddingTop : 20
    },
    categorie : {
        // padding : 10
    }
})