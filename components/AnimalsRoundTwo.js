import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView  } from 'react-native';
import AnimalBracketThree from './AnimalBracketThree';

function AnimalsRoundTwo({animalOneA, animalOneB, animalOneC, animalOneD, setSupremeAnimal}) {

    const [animalTwoA, setAnimalTwoA] = useState("TBD")
    const [animalTwoB, setAnimalTwoB] = useState("TBD")

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Button
                    onPress={() => setAnimalTwoA(animalOneA)}
                    title={animalOneA}
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
                <Button
                    onPress={() => setAnimalTwoA(animalOneB)}
                    title={animalOneB}
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
                <Button
                    onPress={() => setAnimalTwoB(animalOneC)}
                    title={animalOneC}
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
                <Button
                    onPress={() => setAnimalTwoB(animalOneD)}
                    title={animalOneD}
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>

            <AnimalBracketThree animalTwoA={animalTwoA} animalTwoB={animalTwoB} setSupremeAnimal={setSupremeAnimal}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default AnimalsRoundTwo;