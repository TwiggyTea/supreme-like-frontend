import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import AnimalsRoundTwo from './AnimalsRoundTwo';

function AnimailBracket({setSupremeAnimal}) {

    const [animalOneA, setAnimalOneA] = useState('TBD')
    const [animalOneB, setAnimalOneB] = useState('TBD')
    const [animalOneC, setAnimalOneC] = useState('TBD')
    const [animalOneD, setAnimalOneD] = useState('TBD')

    return (
        <SafeAreaView style={styles.container}>
            <View>
            <Button
                onPress={() => setAnimalOneA("Cats")}
                title="Cats"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            <Button
            onPress={() => setAnimalOneA("Birds")}
                title="Birds"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            <Button
            onPress={() => setAnimalOneB("Dogs")}
                title="Dogs"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            <Button
                onPress={() => setAnimalOneB("Fish")}
                title="Fish"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            <Button
            onPress={() => setAnimalOneC("Reptiles")}
                title="Reptiles"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            <Button
            onPress={() => setAnimalOneC("Amphibians")}
                title="Amphibians"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            <Button
            onPress={() => setAnimalOneD("Horses")}
                title="Horses"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            <Button
            onPress={() => setAnimalOneD("Bears")}
                title="Bears"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            </View>
            <AnimalsRoundTwo animalOneA={animalOneA} animalOneB={animalOneB} animalOneC={animalOneC} animalOneD={animalOneD} setSupremeAnimal={setSupremeAnimal}/>
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

export default AnimailBracket;