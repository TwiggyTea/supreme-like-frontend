import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';

function SupremeLikeFinal({routerprops, insightId}) {

    const [userInsight, setUserInsight] = useState()
    const [globalInsight, setGlobalInsight] = useState()
    const [containerUpdate, setContainerUpdate] = useState("")
    
    const updateGlobal = (data) => {

        const options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        
        }
        
        fetch(`https://calm-basin-84422.herokuapp.com/global/global-update/1/`, options)
            .then(res => res.json())
            .then(res => console.log(res))
            .then(() => routerprops.history.push("insights"))
            .catch((error) => alert(error))
    }

    useEffect(() => {
        
        fetch(`https://calm-basin-84422.herokuapp.com/insights/insight-detail/${insightId}`)
            .then(res => res.json())
            .then((res) => {
                setUserInsight(res)
            })
            .then(() => console.log(insightId))
            .catch((error) => alert(error))
            // .finally(setIsLoading(false))
    }, [])

    useEffect(() => {
        
        fetch(`https://calm-basin-84422.herokuapp.com/global/global-detail`)
            .then(res => res.json())
            .then((res) => {
                setGlobalInsight(res)
            })
            .then(() => console.log(insightId))
            .catch((error) => alert(error))
            // .finally(setIsLoading(false))
    }, [])

    // let container = globalInsight

    // const options = {
    //     method: 'POST',
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(container)
    // }

    // useEffect(() => {
    //     fetch('https://calm-basin-84422.herokuapp.com/global/global-update/1', options)
    //         .then(res => res.json())
    //         .then((res) => {
    //             console.log(res)
    //         })
    //         .catch((error) => alert(error))
    //         .finally(setContainerUpdate(false))
    // }, [])
    


    if (userInsight == undefined || globalInsight == undefined){
        return <View>
            <Text>
                LOADING...
            </Text>
        </View>
    } else {


    let container = globalInsight

    if (container[0].choiceOneTotal[`${userInsight.choiceOne}`] == undefined) {
        container[0].choiceOneTotal[`${userInsight.choiceOne}`] = 1
    } else if (container[0].choiceOneTotal[`${userInsight.choiceOne}`] != undefined) {
        container[0].choiceOneTotal[`${userInsight.choiceOne}`] += 1
    }
    
    if (container[0].choiceTwoTotal[`${userInsight.choiceTwo}`] == undefined) {
        container[0].choiceTwoTotal[`${userInsight.choiceTwo}`] = 1
    } else if (container[0].choiceTwoTotal[`${userInsight.choiceTwo}`] != undefined) {
        container[0].choiceTwoTotal[`${userInsight.choiceTwo}`] += 1
    }

    if (container[0].choiceThreeTotal[`${userInsight.choiceThree}`] == undefined) {
        container[0].choiceThreeTotal[`${userInsight.choiceThree}`] = 1
    } else if (container[0].choiceThreeTotal[`${userInsight.choiceThree}`] != undefined) {
        container[0].choiceThreeTotal[`${userInsight.choiceThree}`] += 1
    }

    if (container[0].choiceFourTotal[`${userInsight.choiceFour}`] == undefined) {
        container[0].choiceFourTotal[`${userInsight.choiceFour}`] = 1
    } else if (container[0].choiceFourTotal[`${userInsight.choiceFour}`] != undefined) {
        container[0].choiceFourTotal[`${userInsight.choiceFour}`] += 1
    }

    if (container[0].choiceFiveTotal[`${userInsight.choiceFive}`] == undefined) {
        container[0].choiceFiveTotal[`${userInsight.choiceFive}`] = 1
    } else if (container[0].choiceFiveTotal[`${userInsight.choiceFive}`] != undefined) {
        container[0].choiceFiveTotal[`${userInsight.choiceFive}`] += 1
    }

    if (container[0].choiceSixTotal[`${userInsight.choiceSix}`] == undefined) {
        container[0].choiceSixTotal[`${userInsight.choiceSix}`] = 1
    } else if (container[0].choiceSixTotal[`${userInsight.choiceSix}`] != undefined) {
        container[0].choiceSixTotal[`${userInsight.choiceSix}`] += 1
    }

    if (container[0].choiceSevenTotal[`${userInsight.choiceSeven}`] == undefined) {
        container[0].choiceSevenTotal[`${userInsight.choiceSeven}`] = 1
    } else if (container[0].choiceSevenTotal[`${userInsight.choiceSeven}`] != undefined) {
        container[0].choiceSevenTotal[`${userInsight.choiceSeven}`] += 1
    }

    if (container[0].choiceEightTotal[`${userInsight.choiceEight}`] == undefined) {
        container[0].choiceEightTotal[`${userInsight.choiceEight}`] = 1
    } else if (container[0].choiceEightTotal[`${userInsight.choiceEight}`] != undefined) {
        container[0].choiceEightTotal[`${userInsight.choiceEight}`] += 1
    }

    if (container[0].choiceNineTotal[`${userInsight.choiceNine}`] == undefined) {
        container[0].choiceNineTotal[`${userInsight.choiceNine}`] = 1
    } else if (container[0].choiceNineTotal[`${userInsight.choiceNine}`] != undefined) {
        container[0].choiceNineTotal[`${userInsight.choiceNine}`] += 1
    }

    if (container[0].choiceTenTotal[`${userInsight.choiceTen}`] == undefined) {
        container[0].choiceTenTotal[`${userInsight.choiceTen}`] = 1
    } else if (container[0].choiceTenTotal[`${userInsight.choiceTen}`] != undefined) {
        container[0].choiceTenTotal[`${userInsight.choiceTen}`] += 1
    }

    if (container[0].choiceElevenTotal[`${userInsight.choiceEleven}`] == undefined) {
        container[0].choiceElevenTotal[`${userInsight.choiceEleven}`] = 1
    } else if (container[0].choiceElevenTotal[`${userInsight.choiceEleven}`] != undefined) {
        container[0].choiceElevenTotal[`${userInsight.choiceEleven}`] += 1
    }

    if (container[0].choiceTwelveTotal[`${userInsight.choiceTwelve}`] == undefined) {
        container[0].choiceTwelveTotal[`${userInsight.choiceTwelve}`] = 1
    } else if (container[0].choiceTwelveTotal[`${userInsight.choiceTwelve}`] != undefined) {
        container[0].choiceTwelveTotal[`${userInsight.choiceTwelve}`] += 1
    }

    if (container[0].choiceThirteenTotal[`${userInsight.choiceThirteen}`] == undefined) {
        container[0].choiceThirteenTotal[`${userInsight.choiceThirteen}`] = 1
    } else if (container[0].choiceThirteenTotal[`${userInsight.choiceThirteen}`] != undefined) {
        container[0].choiceThirteenTotal[`${userInsight.choiceThirteen}`] += 1
    }

    if (container[0].choiceFourteenTotal[`${userInsight.choiceFourteen}`] == undefined) {
        container[0].choiceFourteenTotal[`${userInsight.choiceFourteen}`] = 1
    } else if (container[0].choiceFourteenTotal[`${userInsight.choiceFourteen}`] != undefined) {
        container[0].choiceFourteenTotal[`${userInsight.choiceFourteen}`] += 1
    }

    if (container[0].choiceFifteenTotal[`${userInsight.choiceFifteen}`] == undefined) {
        container[0].choiceFifteenTotal[`${userInsight.choiceFifteen}`] = 1
    } else if (container[0].choiceFifteenTotal[`${userInsight.choiceFifteen}`] != undefined) {
        container[0].choiceFifteenTotal[`${userInsight.choiceFifteen}`] += 1
    }

    if (container[0].choiceSixteenTotal[`${userInsight.choiceSixteen}`] == undefined) {
        container[0].choiceSixteenTotal[`${userInsight.choiceSixteen}`] = 1
    } else if (container[0].choiceSixteenTotal[`${userInsight.choiceSixteen}`] != undefined) {
        container[0].choiceSixteenTotal[`${userInsight.choiceSixteen}`] += 1
    }

    if (container[0].choiceSeventeenTotal[`${userInsight.choiceSeventeen}`] == undefined) {
        container[0].choiceSeventeenTotal[`${userInsight.choiceSeventeen}`] = 1
    } else if (container[0].choiceSeventeenTotal[`${userInsight.choiceSeventeen}`] != undefined) {
        container[0].choiceSeventeenTotal[`${userInsight.choiceSeventeen}`] += 1
    }

    if (container[0].choiceEighteenTotal[`${userInsight.choiceEighteen}`] == undefined) {
        container[0].choiceEighteenTotal[`${userInsight.choiceEighteen}`] = 1
    } else if (container[0].choiceEighteenTotal[`${userInsight.choiceEighteen}`] != undefined) {
        container[0].choiceEighteenTotal[`${userInsight.choiceEighteen}`] += 1
    }

    if (container[0].choiceNineteenTotal[`${userInsight.choiceNineteen}`] == undefined) {
        container[0].choiceNineteenTotal[`${userInsight.choiceNineteen}`] = 1
    } else if (container[0].choiceNineteenTotal[`${userInsight.choiceNineteen}`] != undefined) {
        container[0].choiceNineteenTotal[`${userInsight.choiceNineteen}`] += 1
    }

    if (container[0].choiceTwentyTotal[`${userInsight.choiceTwenty}`] == undefined) {
        container[0].choiceTwentyTotal[`${userInsight.choiceTwenty}`] = 1
    } else if (container[0].choiceTwentyTotal[`${userInsight.choiceTwenty}`] != undefined) {
        container[0].choiceTwentyTotal[`${userInsight.choiceTwenty}`] += 1
    }

    if (container[0].choiceTwentyOneTotal[`${userInsight.choiceTwentyOne}`] == undefined) {
        container[0].choiceTwentyOneTotal[`${userInsight.choiceTwentyOne}`] = 1
    } else if (container[0].choiceTwentyOneTotal[`${userInsight.choiceTwentyOne}`] != undefined) {
        container[0].choiceTwentyOneTotal[`${userInsight.choiceTwentyOne}`] += 1
    }

    if (container[0].choiceTwentyTwoTotal[`${userInsight.choiceTwentyTwo}`] == undefined) {
        container[0].choiceTwentyTwoTotal[`${userInsight.choiceTwentyTwo}`] = 1
    } else if (container[0].choiceTwentyTwoTotal[`${userInsight.choiceTwentyTwo}`] != undefined) {
        container[0].choiceTwentyTwoTotal[`${userInsight.choiceTwentyTwo}`] += 1
    }

    if (container[0].choiceTwentyThreeTotal[`${userInsight.choiceTwentyThree}`] == undefined) {
        container[0].choiceTwentyThreeTotal[`${userInsight.choiceTwentyThree}`] = 1
    } else if (container[0].choiceTwentyThreeTotal[`${userInsight.choiceTwentyThree}`] != undefined) {
        container[0].choiceTwentyThreeTotal[`${userInsight.choiceTwentyThree}`] += 1
    }

    if (container[0].choiceTwentyFourTotal[`${userInsight.choiceTwentyFour}`] == undefined) {
        container[0].choiceTwentyFourTotal[`${userInsight.choiceTwentyFour}`] = 1
    } else if (container[0].choiceTwentyFourTotal[`${userInsight.choiceTwentyFour}`] != undefined) {
        container[0].choiceTwentyFourTotal[`${userInsight.choiceTwentyFour}`] += 1
    }

    if (container[0].choiceTwentyFiveTotal[`${userInsight.choiceTwentyFive}`] == undefined) {
        container[0].choiceTwentyFiveTotal[`${userInsight.choiceTwentyFive}`] = 1
    } else if (container[0].choiceTwentyFiveTotal[`${userInsight.choiceTwentyFive}`] != undefined) {
        container[0].choiceTwentyFiveTotal[`${userInsight.choiceTwentyFive}`] += 1
    }

    if (container[0].choiceTwentySixTotal[`${userInsight.choiceTwentySix}`] == undefined) {
        container[0].choiceTwentySixTotal[`${userInsight.choiceTwentySix}`] = 1
    } else if (container[0].choiceTwentySixTotal[`${userInsight.choiceTwentySix}`] != undefined) {
        container[0].choiceTwentySixTotal[`${userInsight.choiceTwentySix}`] += 1
    }

    if (container[0].choiceTwentySevenTotal[`${userInsight.choiceTwentySeven}`] == undefined) {
        container[0].choiceTwentySevenTotal[`${userInsight.choiceTwentySeven}`] = 1
    } else if (container[0].choiceTwentySevenTotal[`${userInsight.choiceTwentySeven}`] != undefined) {
        container[0].choiceTwentySevenTotal[`${userInsight.choiceTwentySeven}`] += 1
    }

    if (container[0].choiceTwentyEightTotal[`${userInsight.choiceTwentyEight}`] == undefined) {
        container[0].choiceTwentyEightTotal[`${userInsight.choiceTwentyEight}`] = 1
    } else if (container[0].choiceTwentyEightTotal[`${userInsight.choiceTwentyEight}`] != undefined) {
        container[0].choiceTwentyEightTotal[`${userInsight.choiceTwentyEight}`] += 1
    }

    if (container[0].choiceTwentyNineTotal[`${userInsight.choiceTwentyNine}`] == undefined) {
        container[0].choiceTwentyNineTotal[`${userInsight.choiceTwentyNine}`] = 1
    } else if (container[0].choiceTwentyNineTotal[`${userInsight.choiceTwentyNine}`] != undefined) {
        container[0].choiceTwentyNineTotal[`${userInsight.choiceTwentyNine}`] += 1
    }

    if (container[0].choiceThirtyTotal[`${userInsight.choiceThirty}`] == undefined) {
        container[0].choiceThirtyTotal[`${userInsight.choiceThirty}`] = 1
    } else if (container[0].choiceThirtyTotal[`${userInsight.choiceThirty}`] != undefined) {
        container[0].choiceThirtyTotal[`${userInsight.choiceThirty}`] += 1
    }

    if (container[0].choiceThirtyOneTotal[`${userInsight.choiceThirtyOne}`] == undefined) {
        container[0].choiceThirtyOneTotal[`${userInsight.choiceThirtyOne}`] = 1
    } else if (container[0].choiceThirtyOneTotal[`${userInsight.choiceThirtyOne}`] != undefined) {
        container[0].choiceThirtyOneTotal[`${userInsight.choiceThirtyOne}`] += 1
    }

    
    return (
        <View>
            <Text>
                Your Supreme Like is {userInsight.choiceThirtyOne}
            </Text>
            <Button
                onPress={() => updateGlobal(container[0])}
                title="See Insights"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    );
    }
}

export default SupremeLikeFinal;