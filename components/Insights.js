import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';

function Insights({routerprops, insightId}) {

    const [userInsight, setUserInsight] = useState()
    const [globalInsight, setGlobalInsight] = useState()

useEffect(() => {
        
    fetch(`https://calm-basin-84422.herokuapp.com/insights/insight-detail/${insightId}`)
        .then(res => res.json())
        .then((res) => {
            setUserInsight(res)
        })
        .catch((error) => alert(error))
        // .finally(setIsLoading(false))
}, [])

useEffect(() => {
    
    fetch(`https://calm-basin-84422.herokuapp.com/global/global-detail`)
        .then(res => res.json())
        .then((res) => {
            setGlobalInsight(res)
        })
        .catch((error) => alert(error))
        // .finally(setIsLoading(false))
}, [])

if (userInsight == undefined || globalInsight == undefined){
    return <View>
        <Text>
            LOADING...
        </Text>
    </View>
}

const total = (globalInsight[0].choiceOneTotal.Fish + globalInsight[0].choiceOneTotal.Reptiles)

return (
    <View>
        <Text>
            Your favorite animal was {(userInsight.choiceThirtyOne).toLowerCase()} along with {Math.ceil((globalInsight[0].choiceSevenTotal[`${userInsight.choiceSeven}`])*100/total)}% of other users.
        </Text>
        <Text>
            Your favorite art form was {(userInsight.choiceFourteen).toLowerCase()} along with {Math.ceil((globalInsight[0].choiceFourteenTotal[`${userInsight.choiceFourteen}`])*100/total)}% of other users.
        </Text>
        <Text>
            Your favorite experience was {(userInsight.choiceTwentyOne).toLowerCase()} along with {Math.ceil((globalInsight[0].choiceTwentyOneTotal[`${userInsight.choiceTwentyOne}`])*100/total)}% of other users.
        </Text>
        <Text>
            Your favorite wild card was {(userInsight.choiceTwentyEight).toLowerCase()} along with {Math.ceil((globalInsight[0].choiceTwentyEightTotal[`${userInsight.choiceTwentyEight}`])*100/total)}% of other users.
        </Text>
        <Text>
            Your supreme like was {(userInsight.choiceThirtyOne).toLowerCase()} along with {Math.ceil((globalInsight[0].choiceThirtyOneTotal[`${userInsight.choiceThirtyOne}`])*100/total)}% of other users.
        </Text>
        <Button
            onPress={() => routerprops.history.push("/")}
            title="Play Again?"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
        />
    </View>
);
}

export default Insights;