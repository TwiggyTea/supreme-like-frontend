import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView  } from 'react-native';

function AnimalBracketThree({animalTwoA, animalTwoB, setSupremeAnimal}) {
    return (
        <SafeAreaView>
            <View>
                <Button
                    onPress={() => setSupremeAnimal(animalTwoA)}
                    title={animalTwoA}
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
                <Button
                    onPress={() => setSupremeAnimal(animalTwoB)}
                    title={animalTwoB}
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        </SafeAreaView>
    );
}

export default AnimalBracketThree;