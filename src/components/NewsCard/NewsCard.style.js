import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    image: {
        height: Dimensions.get('window').height / 4,
        margin: 10,
        marginBottom: 0,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    title: {
        backgroundColor: 'white',
        padding: 5,
        margin: 10,
        marginBottom: 0,
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
        borderWidth: 1,
        borderBottomWidth: 0,
    },
    description: {
        backgroundColor: 'white',
        color: 'black',
        textAlign: 'center',
        padding: 5,
        margin: 10,
        marginTop: 0,
        marginBottom: 0,
        borderWidth: 1,
        borderTopWidth: 0,
        borderBottomWidth: 0,
    },
    author: {
        backgroundColor: 'white',
        fontStyle: 'italic',
        textAlign: 'right',
        paddingRight: 10,
        margin: 10,
        marginTop: 0,
        marginBottom: 30,
        borderWidth: 1,
        borderTopWidth: 0,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    }
});