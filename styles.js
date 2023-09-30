import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input:{
        height: 45,
        width: 330,
        borderWidth: 1,
        borderColor: '#222',
        margin: 15,
        fontSize: 20,
        padding: 10,
    },
    title:{
        color: 'orange',
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 75,
    },
    calcular:{
        title: 'CALCULAR',
        width: 330,
        height: 50,
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightblue',
    },
    resultado:{
        color: 'green',
        fontSize: 30,
        fontWeight: 'bold',
        margin: 15,
    }
});

export {styles};