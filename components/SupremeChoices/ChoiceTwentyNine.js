import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';

function ChoiceTwentyNine({routerprops, insightId}) {

    const [TwentyNineA, setTwentyNineA] = useState()
    const [TwentyNineB, setTwentyNineB] = useState()

    useEffect(() => {
        
        fetch(`https://calm-basin-84422.herokuapp.com/insights/insight-detail/${insightId}`)
            .then(res => res.json())
            .then((res) => {
                setTwentyNineA(res.choiceSeven)
                setTwentyNineB(res.choiceFourteen)
            })
            .then(() => console.log(insightId))
            .catch((error) => alert(error))
            // .finally(setIsLoading(false))
    }, [])

    const setChoiceTwentyNine = (data, id) => {

        const options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "choiceTwentyNine": data
            })
        
        }
        
        fetch(`https://calm-basin-84422.herokuapp.com/insights/insight-update/${id}/`, options)
            .then(res => res.json())
            .then(res => console.log(res))
            .then(() => routerprops.history.push("/choice-thirty"))
            .catch((error) => alert(error))
    } 

    if (TwentyNineA == undefined || TwentyNineB == undefined){
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
                onPress={() => setChoiceTwentyNine(TwentyNineA, insightId)}
                title={TwentyNineA}
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            <Text>
                or
            </Text>
            <Button
            onPress={() => setChoiceTwentyNine(TwentyNineB, insightId)}
                title={TwentyNineB}
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    );
}

export default ChoiceTwentyNine;