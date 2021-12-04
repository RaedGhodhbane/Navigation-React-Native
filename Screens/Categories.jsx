import React from 'react'
import { StyleSheet, View, Text, Button, FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import BoxShadow from '../Component/BoxShadow'
import {CATEGORIES} from '../Data/dataBase2'
function Categories(props) {
    // console.log(CATEGORIES)
const renderItem = (itemData) => {
    // console.log(itemData)

    return (
            <TouchableOpacity
            activeOpacity={0.7}
            style={css.box}
            onPress={() => props.navigation.navigate('CategorieScreen', {
                catId : itemData.item.id,
                catName : itemData.item.name,
            })}
            >
            <BoxShadow otherStyle={css.shadow}>
           <Text> {itemData.item.name} </Text>
            </BoxShadow>
            </TouchableOpacity>
    )
}
    return (
        <View style={css.container}>
        <FlatList
        data={CATEGORIES}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />
        </View>
    )
}

Categories.navigationOptions = () => {
    return {
        title: 'Home',
      };
}

const css=StyleSheet.create({
    container : {
        margin: 10,
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
    },
    box : {
        height: 150,
        width: '100%',
        margin: 2,
        flex: 1,
    },
    shadow : {
        width: '100%',
        height: '100%',
    }

})

export default Categories