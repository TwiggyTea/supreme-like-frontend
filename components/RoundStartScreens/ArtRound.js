import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';

function ArtRound({routerprops}) {
    return (
        <View>
            <Text>
                ROUND 2 OF 5:
            </Text>
            <Text>
                ART
            </Text>
            <Button
                onPress={() => routerprops.history.push("/choice-eight")}
                title="GO!"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    );
}

export default ArtRound;