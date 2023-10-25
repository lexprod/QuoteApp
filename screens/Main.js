import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import axios from 'axios';
import { useState } from 'react';
import { QUOTES } from "../shared/quotes";

const Main = () => {

    const [quotes, setQuotes] = useState(QUOTES);
    console.log(quotes);
    const [displayQuote, setDisplayQuote] = useState(quotes[0]);
    console.log(displayQuote);

    return (
        <View style={styles.supercontainer}>
            {displayQuote && (
                <View style={styles.quotecontainer}>

                    <Text style={styles.quotetext}>{displayQuote.text} </Text>
                    <Text style={styles.credittext}>{displayQuote.author}</Text>
                </View>
            )}
            <Pressable
                onPress={() => {
                    const newQuoteId = (displayQuote.id + 1) % quotes.length;
                    setDisplayQuote(quotes[newQuoteId]);
                    console.log(`trying to switch to quote ${newQuoteId}`);
                }}
                style={({ pressed }) => [pressed ? styles.buttonpressed : styles.buttonup
                ]} >
                <Text style={styles.buttontext}>
                    New one plz
                </Text>
            </Pressable>
        </View >
    )

    // return (

    //     <View style={styles.supercontainer}>
    //         <View style={styles.quotecontainer}>
    //             <Text style={styles.quotetext}> "Adversity causes some men to break, others to break records." </Text>
    //             <Text style={styles.credittext}>--- William Arthur Ward</Text>
    //         </View>
    //         <Pressable
    //             style={({ pressed }) => [pressed ? styles.buttonpressed : styles.buttonup
    //             ]} >
    //             <Text style={styles.buttontext}>
    //                 New quote plz
    //             </Text>
    //         </Pressable>
    //     </View >


    // <Card.Title style={styles.cardTitle}>All Routines</Card.Title>
    // <Card.Divider />
    // <FlatList
    //     data={routines}
    //     renderItem={RenderRoutine}
    //     keyExtractor={(item) => item.id}

    // );
}


const styles = StyleSheet.create({
    quotecontainer: {
        backgroundColor: '#ffeaa7',
        marginVertical: 20,
        marginHorizontal: 10,
        borderRadius: 30
    },
    supercontainer: {
        paddingHorizontal: 20,
        paddingVertical: 50,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fdcb6e'
    },
    quotetext: {
        fontFamily: 'serif',
        fontSize: 30,
        fontWeight: 'light',
        marginTop: 10,
        marginBottom: 10,
        marginHorizontal: 20
    },
    credittext: {
        fontStyle: 'italic',
        fontSize: 14,
        marginBottom: 15,
        marginHorizontal: 20
    },
    buttoncontainer: {
        width: '100%',
        justifyContent: 'center',
        margin: 10,
        backgroundColor: '#ffeaa7',
        height: 100,
        borderRadius: 100,
        borderWidth: 1
    },
    buttontext: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonpressed: {
        backgroundColor: '#ffeaa7',
        borderColor: '#2d3436',
        borderTopWidth: 8,
        borderLeftWidth: 6,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        width: '100%',
        justifyContent: 'center',
        margin: 10,
        height: 100,
        borderRadius: 100,
        marginTop: 14,
        marginLeft: 12
    },
    buttonup: {
        width: '100%',
        justifyContent: 'center',
        margin: 10,
        marginBottom: 20,
        marginRight: 12,
        backgroundColor: '#ffeaa7',
        height: 100,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#222',
        borderBottomWidth: 10,
        borderRightWidth: 10
    },

});


export default Main;