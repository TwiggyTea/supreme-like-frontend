import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';

function WildRound({routerprops}) {
    return (
        <View>
            <Text>
                ROUND 4 OF 5:
            </Text>
            <Text>
                WILD CARD
            </Text>
            <Button
                onPress={() => routerprops.history.push("/choice-twenty-two")}
                title="GO!"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    );
}

export default WildRound;