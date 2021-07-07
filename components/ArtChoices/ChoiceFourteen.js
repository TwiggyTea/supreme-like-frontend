import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';

function ChoiceFourteen({routerprops, insightId}) {

    const [FourteenA, setFourteenA] = useState()
    const [FourteenB, setFourteenB] = useState()

    useEffect(() => {
        
        fetch(`https://calm-basin-84422.herokuapp.com/insights/insight-detail/${insightId}`)
            .then(res => res.json())
            .then((res) => {
                setFourteenA(res.choiceTwelve)
                setFourteenB(res.choiceThirteen)
            })
            .then(() => console.log(insightId))
            .catch((error) => alert(error))
            // .finally(setIsLoading(false))
    }, [])

    const setChoiceFourteen = (data, id) => {

        const options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "choiceFourteen": data
            })
        
        }
        
        fetch(`https://calm-basin-84422.herokuapp.com/insights/insight-update/${id}/`, options)
            .then(res => res.json())
            .then(res => console.log(res))
            .then(() => routerprops.history.push("/round-three"))
            .catch((error) => alert(error))
    } 

    if (FourteenA == undefined || FourteenB == undefined){
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
                onPress={() => setChoiceFourteen(FourteenA, insightId)}
                title={FourteenA}
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            <Text>
                or
            </Text>
            <Button
            onPress={() => setChoiceFourteen(FourteenB, insightId)}
                title={FourteenB}
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    );
}

export default ChoiceFourteen;