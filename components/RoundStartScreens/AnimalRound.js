import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';

function AnimalRound({routerprops}) {
    return (
        <View>
            <Text>
                ROUND 1 OF 5:
            </Text>
            <Text>
                ANIMALS
            </Text>
            <Button
                onPress={() => routerprops.history.push("/choice-one")}
                title="GO!"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    );
}

export default AnimalRound;