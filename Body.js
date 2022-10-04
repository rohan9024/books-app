import React from 'react'
import { View, Text, Image, StyleSheet, TouchableWithoutFeedbackBase, TouchableOpacity, ScrollView } from 'react-native'
import tw from 'twrnc';
import { USERS } from './data/users';

const Body = () => {
    return (
        <View style={tw`mt-6 ml-5 mr-5`}>

            <View style={tw`flex-row justify-between`}>
                <Text style={tw`text-white font-bold text-lg`}>My Book</Text>
                <Text style={tw`text-gray-500 underline `}>See more</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>

                {USERS.map((book, index) => (
                    <View style={tw`mt-5 mr-5 `} key={index}>
                        <Image source={{ uri: book.image }} style={styles.image} resizeMode='contain' />

                        <View style={tw`flex-row justify-evenly mt-3 mr-8`}>
                            <View style={tw`flex-row `}>
                                <Image
                                    style={{ width: 15, height: 15, tintColor: 'orange' }}
                                    resizeMode='contain'
                                    source={require('./assets/time.png')} />

                                <Text style={tw`text-white ml-1`}>{book.timeTakenToRead}</Text>
                            </View>
                            <View style={tw`flex-row justify-evenly ml-3 `}>
                                <Image
                                    style={{ width: 15, height: 15, tintColor: 'orange' }}
                                    resizeMode='contain'
                                    source={require('./assets/copy.png')} />

                                <Text style={tw`text-white ml-1`}>{book.completionPercent}</Text>
                            </View>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>


    )
}

export default Body

const styles = StyleSheet.create({
    image: {
        height: 230,
        width: 150,
        borderRadius: 10,
    },
    timeIcon: {
        height: 10,
        width: 20,
        color: 'red'
    }
})