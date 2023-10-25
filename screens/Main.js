import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import axios from 'axios';
import { useState } from 'react';
import { QUOTES } from "../shared/quotes";

const Main = () => {

    const [quotes, setQuotes] = useState(QUOTES);
    const [displayQuote, setDisplayQuote] = useState(quotes[0]);

    const handleAddQuotes = () => {

    }

    return (
        <View style={styles.supercontainer}>
            {displayQuote && (
                <View style={styles.quotecontainer}>

                    <Text style={styles.quotetext}>{displayQuote.text} </Text>
                    <Text style={styles.credittext}>{displayQuote.author}</Text>
                </View>
            )}
            <View style={styles.buttonpanel}>
                <Pressable
                    onPress={() => {
                        const newQuoteId = (displayQuote.id + 1) % quotes.length;
                        setDisplayQuote(quotes[newQuoteId]);
                    }}
                    style={({ pressed }) => [pressed ? styles.buttonpressed : styles.buttonup
                    ]} >
                    <Text style={styles.buttontext}>
                        New one plz
                    </Text>
                </Pressable>
                <Pressable
                    onPress={() => {

                    }}
                    style={({ pressed }) => [pressed ? styles.buttonpressed : styles.buttonup
                    ]} >
                    <Text style={styles.buttontext}>
                        from api
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    supercontainer: {
        paddingHorizontal: 20,
        paddingTop: 50,
        paddingBottom: 15,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fdcb6e'
    },
    quotecontainer: {
        backgroundColor: '#ffeaa7',
        marginVertical: 20,
        marginHorizontal: 10,
        borderRadius: 30,
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
    buttonpanel: {
        width: '100%',
        padding: 20,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    },
    buttontext: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonup: {
        width: '100%',
        justifyContent: 'center',
        backgroundColor: '#ffeaa7',
        height: 100,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#222',
        borderBottomWidth: 10,
        borderRightWidth: 10,
        marginVertical: 10
    },
    buttonpressed: {
        backgroundColor: '#ffeaa7',
        borderColor: '#2d3436',
        borderWidth: 1,
        borderTopWidth: 8,
        borderLeftWidth: 6,
        width: '100%',
        justifyContent: 'center',
        height: 100,
        borderRadius: 100,
        marginVertical: 10,
    }
});


export default Main;