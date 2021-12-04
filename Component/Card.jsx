import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import colors from '../Global/colors'
import BoxShadow from './BoxShadow'

export default function Card(props) {
    // console.log(props.itemData)
    return (
<TouchableOpacity
            activeOpacity={0.7}
            style={css.box}
            onPress={() => props.selectItem(props.itemData)
            }
            >
            <BoxShadow>
            <View>
            <Image
            style={css.tinyLogo}
            source={{
            uri: props.itemData.item.image,
            }}
            resizeMode='contain'/>
            </View>
            <View style={css.description}>
            <Text style={css.item}> {props.itemData.item.name}</Text>
            <Text style={css.price}> {props.itemData.item.price}</Text>
            </View>

            </BoxShadow>
            </TouchableOpacity>
    )
}

const css=StyleSheet.create({
    tinyLogo : {
        height : 110,
        width : '100%',
    },
    description : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        padding : 8,
        alignItems : 'center'   
    },
    item : {
        // textAlign : 'center'
    },
    price : {
        // textAlign : 'center',
        fontFamily : 'bold',
        color : colors.primary
    },

})