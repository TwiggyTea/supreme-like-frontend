import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';

function ChoiceTwentyOne({routerprops, insightId}) {

    const [TwentyOneA, setTwentyOneA] = useState()
    const [TwentyOneB, setTwentyOneB] = useState()

    useEffect(() => {
        
        fetch(`https://calm-basin-84422.herokuapp.com/insights/insight-detail/${insightId}`)
            .then(res => res.json())
            .then((res) => {
                setTwentyOneA(res.choiceNineteen)
                setTwentyOneB(res.choiceTwenty)
            })
            .then(() => console.log(insightId))
            .catch((error) => alert(error))
            // .finally(setIsLoading(false))
    }, [])

    const setChoiceTwentyOne = (data, id) => {

        const options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "choiceTwentyOne": data
            })
        
        }
        
        fetch(`https://calm-basin-84422.herokuapp.com/insights/insight-update/${id}/`, options)
            .then(res => res.json())
            .then(res => console.log(res))
            .then(() => routerprops.history.push("/round-four"))
            .catch((error) => alert(error))
    } 

    if (TwentyOneA == undefined || TwentyOneB == undefined){
        return <View>
            <Text>
                LOADING...
            </Text>
        </View>
    }

    return (
        <View>
            <Text>
                Which do you like more?
            </Text>
            <Button
                onPress={() => setChoiceTwentyOne(TwentyOneA, insightId)}
                title={TwentyOneA}
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            <Text>
                or
            </Text>
            <Button
            onPress={() => setChoiceTwentyOne(TwentyOneB, insightId)}
                title={TwentyOneB}
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    );
}

export default ChoiceTwentyOne;