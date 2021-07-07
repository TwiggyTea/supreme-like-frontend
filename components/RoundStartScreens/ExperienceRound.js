import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';

function ExperienceRound({routerprops}) {
    return (
        <View>
            <Text>
                ROUND 3 OF 5:
            </Text>
            <Text>
                EXPERIENCES
            </Text>
            <Button
                onPress={() => routerprops.history.push("/choice-fifteen")}
                title="GO!"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    );
}

export default ExperienceRound;