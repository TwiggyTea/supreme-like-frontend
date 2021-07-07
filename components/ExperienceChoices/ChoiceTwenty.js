import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';

function ChoiceTwenty({routerprops, insightId}) {

    const [TwentyA, setTwentyA] = useState()
    const [TwentyB, setTwentyB] = useState()

    useEffect(() => {
        
        fetch(`https://calm-basin-84422.herokuapp.com/insights/insight-detail/${insightId}`)
            .then(res => res.json())
            .then((res) => {
                setTwentyA(res.choiceSeventeen)
                setTwentyB(res.choiceEighteen)
            })
            .then(() => console.log(insightId))
            .catch((error) => alert(error))
            // .finally(setIsLoading(false))
    }, [])

    const setChoiceTwenty = (data, id) => {

        const options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "choiceTwenty": data
            })
        
        }
        
        fetch(`https://calm-basin-84422.herokuapp.com/insights/insight-update/${id}/`, options)
            .then(res => res.json())
            .then(res => console.log(res))
            .then(() => routerprops.history.push("/choice-twenty-one"))
            .catch((error) => alert(error))
    } 

    if (TwentyA == undefined || TwentyB == undefined){
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
                onPress={() => setChoiceTwenty(TwentyA, insightId)}
                title={TwentyA}
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            <Text>
                or
            </Text>
            <Button
            onPress={() => setChoiceTwenty(TwentyB, insightId)}
                title={TwentyB}
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    );
}

export default ChoiceTwenty;