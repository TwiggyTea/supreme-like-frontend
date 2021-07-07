import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";

function StartScreen({ routerprops , setInsightId, insightId}) {
    // https://botw-compendium.herokuapp.com/api/v2/entry/${selection.id}
    // http://localhost:8000/insights/insight-create
    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify()
    }

    const [isLoading, setIsLoading] = useState(true)
    // const [insightId, setInsightId] = useState([])

    useEffect(() => {
        fetch('https://calm-basin-84422.herokuapp.com/insights/insight-create', options)
            .then(res => res.json())
            .then((res) => {
                setInsightId(res.id)
                console.log(res)
                console.log(`insightId: ${insightId}`)
            })
            .then(() => console.log(insightId))
            .catch((error) => alert(error))
            // .finally(setIsLoading(false))
    }, [])

    const createInsight = () => {
        const options = {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify()   
        }
        
        fetch('http://localhost:8000/insights/insight-list', options)
            .then(res => console.log(res))
            .then(res => {
                setInsightId(res.id)
                console.log(res.id)
                console.log()
            })
            .then(() => history.push("round-one"))
    }


    return (
        <SafeAreaView>
            <Text>
                SUPREME LIKE
            </Text>
            <Link to="/round-one">
            <Button
                    onPress={() => routerprops.history.push("round-one")}
                    title="START"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </Link>
        </SafeAreaView>
    );
}

export default StartScreen;