import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';

function SupremeRound({routerprops}) {
    return (
        <View>
            <Text>
                ROUND 5 OF 5:
            </Text>
            <Text>
                SUPREME LIKE
            </Text>
            <Button
                onPress={() => routerprops.history.push("/choice-twenty-nine")}
                title="GO!"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    );
}

export default SupremeRound;