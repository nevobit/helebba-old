import { StyleSheet } from '@react-pdf/renderer';

export const styles = StyleSheet.create({
    page: {
        paddingHorizontal: 15,
        paddingVertical: 20,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    logo: {
        width: 60,
        height: 60,
    },
    client_information: {
        display: 'flex',
        flexDirection: 'row',
        // justifyContent: 'space-between',
        margin: '5px',
        marginTop: 20,
        height: 60,
        borderRadius: '3px',
        borderWidth: '0.3px',
        borderColor: 'rgba(0,0,0,0.001)',
        borderStyle: 'solid',
    },

    info: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        flex: 3,
    },
    field: {
        height: 90,
        borderRightWidth: '0.1px',
        borderRightColor: 'rgba(0,0,0,0.01)',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 8,
        backgroundColor: 'rgba(0,0,0,0.1)',
        padding: 5,
        height: 20,
        width: 60,
        fontFamily: 'Helvetica-Bold'
    },
    date: {
        // alignItems: 'center',
        textAlign: 'center',
        flex: 1,
    },
    sings: {
        display: 'flex',
        flexDirection: 'row',
        gap: 50,
        paddingHorizontal:20,
        paddingVertical: 50 
    },
    line: {
        display: 'flex',
        height: '.05px',
        width: 250,
        backgroundColor: '#333',
        marginBottom: 5
    },
    signs_text: {
        textAlign: 'center',
        fontSize: 8
    },
    author: {
        // fontFamily: 'cursive'
        fontSize: 10
    }
});