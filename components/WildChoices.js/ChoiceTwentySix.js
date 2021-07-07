import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';

function ChoiceTwentySix({routerprops, insightId}) {

    const [TwentySixA, setTwentySixA] = useState()
    const [TwentySixB, setTwentySixB] = useState()

    useEffect(() => {
        
        fetch(`https://calm-basin-84422.herokuapp.com/insights/insight-detail/${insightId}`)
            .then(res => res.json())
            .then((res) => {
                setTwentySixA(res.choiceTwentyTwo)
                setTwentySixB(res.choiceTwentyThree)
            })
            .then(() => console.log(insightId))
            .catch((error) => alert(error))
            // .finally(setIsLoading(false))
    }, [])

    const setChoiceTwentySix = (data, id) => {

        const options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "choiceTwentySix": data
            })
        
        }
        
        fetch(`https://calm-basin-84422.herokuapp.com/insights/insight-update/${id}/`, options)
            .then(res => res.json())
            .then(res => console.log(res))
            .then(() => routerprops.history.push("/choice-twenty-seven"))
            .catch((error) => alert(error))
    } 

    if (TwentySixA == undefined || TwentySixB == undefined){
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
                onPress={() => setChoiceTwentySix(TwentySixA, insightId)}
                title={TwentySixA}
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            <Text>
                or
            </Text>
            <Button
            onPress={() => setChoiceTwentySix(TwentySixB, insightId)}
                title={TwentySixB}
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    );
}

export default ChoiceTwentySix;