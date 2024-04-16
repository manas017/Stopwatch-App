
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, TouchableHighlight } from 'react-native'
import {Entypo,MaterialCommunityIcons} from '@expo/vector-icons'
const Screen2 = ({ navigation }) => {
    const [hour, setHour] = useState(0)
    const [minute, setMinute] = useState(0)
    const [second, setSecond] = useState(0)
    const [interv, setInterv] = useState()
    const [timeron, settimeron] = useState(0)
    const [stopped, setStopped] = useState(0)

  

    const starttimer = () => {
        settimeron(1)
        setStopped(0)
        // console.log('start timer')
        updatetimer()
        setInterv(setInterval(updatetimer, 1000))

    }

    let currsecond = second
    let currminute = minute
    let currhour = hour

    const updatetimer = () => {
        // console.log('update timer')
        if (currsecond == 60) {
            currsecond = 0
            currminute++
        }
        if (currminute == 60) {
            currminute = 0
            currhour++
        }
        currsecond++

        setSecond(currsecond)
        setMinute(currminute)
        setHour(currhour)
    }
    const stoptimer = () => {
        console.log('stop timer')
        clearInterval(interv)
        setStopped(1)
    }

    const resettimer = () => {
        console.log('reset timer')
        setSecond(0)
        setMinute(0)
        setHour(0)
        settimeron(0)
        clearInterval(interv)
    }
    return (
        <View style={styles.container}>
            <Text style={styles.number}>{hour > 9 ? hour : "0" + hour}
                <Text style={styles.small}>HR</Text>
            </Text>
            <Text style={styles.number}>{minute > 9 ? minute : "0" + minute}
                <Text style={styles.small}>MIN</Text>
            </Text>
            <Text style={styles.number}>{second > 9 ? second : "0" + second}
                <Text style={styles.small}>SEC</Text>
            </Text>

            {timeron == 0 ?
                <View style={styles.startstop}>
                    <TouchableOpacity onPress={starttimer}>
                        <Text style={styles.start}>Start</Text>
                    </TouchableOpacity>
    
                </View>
                :
                <View style={styles.startstop}>
                    <TouchableOpacity onPress={resettimer}>
                        <Text style={styles.reset}>Reset</Text>
                    </TouchableOpacity>

                    {stopped == 0 ? <TouchableOpacity>
                        <Text style={styles.stop} onPress={stoptimer}>Stop</Text>
                    </TouchableOpacity>
                        :
                        <TouchableOpacity onPress={starttimer}>
                            <Text style={styles.stop}>Continue</Text>
                        </TouchableOpacity>
                    }
                </View>
            }
            <View style={styles.bottomnav}>
        <TouchableOpacity onPress={()=>{navigation.navigate('Clock')}}>
        <MaterialCommunityIcons name="clock-digital" size={54} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate('Stopwatch')}}>
           <Entypo name="stopwatch" size={34} color="white" />
        </TouchableOpacity>
        </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'black',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomnav:{display:'flex',flexDirection:'row',position:'absolute',width:'100%',bottom:0,alignItems:'center',justifyContent:'space-evenly',marginBottom:10},
    bottomtextnav:{color:'white',fontSize:40,height:50,width:150,borderRadius:2,textAlign:'center',marginBottom:20},

    number: {
        color: 'white',
        fontSize: 180,
        fontWeight: 'bold',
        height: 180,
        lineHeight: 180,
        // backgroundColor: 'red'
    },

    small: {
        fontSize: 20,
        color:'grey'
    },
    startstop: {
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 20,
    }
    ,
    start: {
        backgroundColor: '#57B002',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 20,
    },
    reset: {
        backgroundColor: 'white',
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        marginRight: 2,
    },
    stop: {
        backgroundColor: 'white',
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        marginLeft: 2,
    }
})
export default Screen2

