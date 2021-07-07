import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StartScreen from './components/StartScreen';

import AnimalRound from './components/RoundStartScreens/AnimalRound';
import ChoiceOne from './components/AnimalChoices/ChoiceOne';
import ChoiceTwo from './components/AnimalChoices/ChoiceTwo';
import ChoiceThree from './components/AnimalChoices/ChoiceThree';
import ChoiceFour from './components/AnimalChoices/ChoiceFour';
import ChoiceFive from './components/AnimalChoices/ChoiceFive';
import ChoiceSix from './components/AnimalChoices/ChoiceSix';
import ChoiceSeven from './components/AnimalChoices/ChoiceSeven';

import ArtRound from './components/RoundStartScreens/ArtRound';
import ChoiceEight from './components/ArtChoices/ChoiceEight';
import ChoiceNine from './components/ArtChoices/ChoiceNine';
import ChoiceTen from './components/ArtChoices/ChoiceTen';
import ChoiceEleven from './components/ArtChoices/ChoiceEleven';
import ChoiceTwelve from './components/ArtChoices/ChoiceTwelve';
import ChoiceThirteen from './components/ArtChoices/ChoiceThirteen';
import ChoiceFourteen from './components/ArtChoices/ChoiceFourteen';

import ExperienceRound from './components/RoundStartScreens/ExperienceRound';
import ChoiceFifteen from './components/ExperienceChoices/ChoiceFifteen';
import ChoiceSixteen from './components/ExperienceChoices/ChoiceSixteen';
import ChoiceSeventeen from './components/ExperienceChoices/ChoiceSeventeen';
import ChoiceEighteen from './components/ExperienceChoices/ChoiceEighteen';
import ChoiceNineteen from './components/ExperienceChoices/ChoiceNineteen';
import ChoiceTwenty from './components/ExperienceChoices/ChoiceTwenty';
import ChoiceTwentyOne from './components/ExperienceChoices/ChoiceTwentyOne';

import WildRound from './components/RoundStartScreens/WildRound';
import ChoiceTwentyTwo from './components/WildChoices.js/ChoiceTwentyTwo';
import ChoiceTwentyThree from './components/WildChoices.js/ChoiceTwentyThree';
import ChoiceTwentyFour from './components/WildChoices.js/ChoiceTwentyFour';
import ChoiceTwentyFive from './components/WildChoices.js/ChoiceTwentyFive';
import ChoiceTwentySix from './components/WildChoices.js/ChoiceTwentySix';
import ChoiceTwentySeven from './components/WildChoices.js/ChoiceTwentySeven';
import ChoiceTwentyEight from './components/WildChoices.js/ChoiceTwentyEight';

import SupremeRound from './components/RoundStartScreens/SupremeRound';
import ChoiceTwentyNine from './components/SupremeChoices/ChoiceTwentyNine';
import ChoiceThirty from './components/SupremeChoices/ChoiceThirty';
import ChoiceThirtyOne from './components/SupremeChoices/ChoiceThirtyOne';

import SupremeLikeFinal from './components/SupremeLikeFinal';
import Insights from './components/Insights';


import { NativeRouter, Route, Link, Switch } from "react-router-native";

export default function App() {

  const [insightId, setInsightId] = useState()

  return (
    <NativeRouter>
      <View style={styles.container}>
        <Switch>

          <Route exact path="/" render={routerprops => 
            <StartScreen routerprops={routerprops} insightId={insightId} setInsightId={setInsightId}/>}/>

          <Route exact path="/round-one" render={routerprops => 
            <AnimalRound routerprops={routerprops} insightId={insightId} setInsightId={setInsightId}/>}/>
                <Route exact path="/choice-one" render={routerprops => 
                  <ChoiceOne routerprops={routerprops} insightId={insightId} setInsightId={setInsightId}/>}/>
                <Route exact path="/choice-two" render={routerprops => 
                  <ChoiceTwo routerprops={routerprops} insightId={insightId} setInsightId={setInsightId}/>}/>
                <Route exact path="/choice-three" render={routerprops => 
                  <ChoiceThree routerprops={routerprops} insightId={insightId} setInsightId={setInsightId}/>}/>
                <Route exact path="/choice-four" render={routerprops => 
                  <ChoiceFour routerprops={routerprops} insightId={insightId} setInsightId={setInsightId}/>}/>
                <Route exact path="/choice-five" render={routerprops => 
                  <ChoiceFive routerprops={routerprops} insightId={insightId} setInsightId={setInsightId}/>}/>
                <Route exact path="/choice-six" render={routerprops => 
                  <ChoiceSix routerprops={routerprops} insightId={insightId} setInsightId={setInsightId}/>}/>
                <Route exact path="/choice-seven" render={routerprops => 
                  <ChoiceSeven routerprops={routerprops} insightId={insightId} setInsightId={setInsightId}/>}/>

          <Route exact path="/round-two" render={routerprops => 
            <ArtRound routerprops={routerprops} insightId={insightId} setInsightId={setInsightId}/>}/>
                <Route exact path="/choice-eight" render={routerprops => 
                  <ChoiceEight routerprops={routerprops} insightId={insightId} setInsightId={setInsightId}/>}/>
                <Route exact path="/choice-nine" render={routerprops => 
                  <ChoiceNine routerprops={routerprops} insightId={insightId} setInsightId={setInsightId}/>}/>
                <Route exact path="/choice-ten" render={routerprops => 
                  <ChoiceTen routerprops={routerprops} insightId={insightId} setInsightId={setInsightId}/>}/>
                <Route exact path="/choice-eleven" render={routerprops => 
                  <ChoiceEleven routerprops={routerprops} insightId={insightId} setInsightId={setInsightId}/>}/>
                <Route exact path="/choice-twelve" render={routerprops => 
                  <ChoiceTwelve routerprops={routerprops} insightId={insightId} setInsightId={setInsightId}/>}/>
                <Route exact path="/choice-thirteen" render={routerprops => 
                  <ChoiceThirteen routerprops={routerprops} insightId={insightId} setInsightId={setInsightId}/>}/>
                <Route exact path="/choice-fourteen" render={routerprops => 
                  <ChoiceFourteen routerprops={routerprops} insightId={insightId} setInsightId={setInsightId}/>}/>

          
          <Route exact path="/round-three" render={routerprops => 
            <ExperienceRound routerprops={routerprops} insightId={insightId} setInsightId={setInsightId}/>}/>
                <Route exact path="/choice-fifteen" render={routerprops => 
                  <ChoiceFifteen routerprops={routerprops} insightId={insightId} setInsightId={setInsightId}/>}/>
                <Route exact path="/choice-sixteen" render={routerprops => 
                  <ChoiceSixteen routerprops={routerprops} insightId={insightId} setInsightId={setInsightId}/>}/>
                <Route exact path="/choice-seventeen" render={routerprops => 
                  <ChoiceSeventeen routerprops={routerprops} insightId={insightId} setInsightId={setInsightId}/>}/>
                <Route exact path="/choice-eighteen" render={routerprops => 
                  <ChoiceEighteen routerprops={routerprops} insightId={insightId} setInsightId={setInsightId}/>}/>
                <Route exact path="/choice-nineteen" render={routerprops => 
                  <ChoiceNineteen routerprops={routerprops} insightId={insightId} setInsightId={setInsightId}/>}/>
                <Route exact path="/choice-twenty" render={routerprops => 
                  <ChoiceTwenty routerprops={routerprops} insightId={insightId} setInsightId={setInsightId}/>}/>
                <Route exact path="/choice-twenty-one" render={routerprops => 
                  <ChoiceTwentyOne routerprops={routerprops} insightId={insightId} setInsightId={setInsightId}/>}/>

          <Route exact path="/round-four" render={routerprops => 
            <WildRound routerprops={routerprops} insightId={insightId} setInsightId={setInsightId}/>}/>
                <Route exact path="/choice-twenty-two" render={routerprops => 
                  <ChoiceTwentyTwo routerprops={routerprops} insightId={insightId} setInsightId={setInsightId}/>}/>
                <Route exact path="/choice-twenty-three" render={routerprops => 
                  <ChoiceTwentyThree routerprops={routerprops} insightId={insightId} setInsightId={setInsightId}/>}/>
                <Route exact path="/choice-twenty-four" render={routerprops => 
                  <ChoiceTwentyFour routerprops={routerprops} insightId={insightId} setInsightId={setInsightId}/>}/>
                <Route exact path="/choice-twenty-five" render={routerprops => 
                  <ChoiceTwentyFive routerprops={routerprops} insightId={insightId} setInsightId={setInsightId}/>}/>
                <Route exact path="/choice-twenty-six" render={routerprops => 
                  <ChoiceTwentySix routerprops={routerprops} insightId={insightId} setInsightId={setInsightId}/>}/>
                <Route exact path="/choice-twenty-seven" render={routerprops => 
                  <ChoiceTwentySeven routerprops={routerprops} insightId={insightId} setInsightId={setInsightId}/>}/>
                <Route exact path="/choice-twenty-eight" render={routerprops => 
                  <ChoiceTwentyEight routerprops={routerprops} insightId={insightId} setInsightId={setInsightId}/>}/>

          <Route exact path="/round-five" render={routerprops => 
            <SupremeRound routerprops={routerprops} insightId={insightId} setInsightId={setInsightId}/>}/>
                <Route exact path="/choice-twenty-nine" render={routerprops => 
                  <ChoiceTwentyNine routerprops={routerprops} insightId={insightId} setInsightId={setInsightId}/>}/>
                <Route exact path="/choice-thirty" render={routerprops => 
                  <ChoiceThirty routerprops={routerprops} insightId={insightId} setInsightId={setInsightId}/>}/>
                <Route exact path="/choice-thirty-one" render={routerprops => 
                  <ChoiceThirtyOne routerprops={routerprops} insightId={insightId} setInsightId={setInsightId}/>}/>

          <Route exact path="/supreme-like-final" render={routerprops => 
            <SupremeLikeFinal routerprops={routerprops} insightId={insightId} setInsightId={setInsightId}/>}/>
          <Route exact path="/insights" render={routerprops => 
            <Insights routerprops={routerprops} insightId={insightId} setInsightId={setInsightId}/>}/>
        </Switch>
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
