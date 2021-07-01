import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import ArtBracket from './ArtBracket';
import AnimailBracket from './AnimailBracket';

function FullBracket(props) {

    const [supremeAnimal, setSupremeAnimal] = useState("TBD")
    const [supremeArt, setSupremeArt] = useState("TBD")

    return (
        <SafeAreaView>
            <View>
                <ArtBracket setSupremeArt={setSupremeArt}/>
                <AnimailBracket setSupremeAnimal={setSupremeAnimal}/>
            </View>
            
        </SafeAreaView>
    );
}

export default FullBracket;