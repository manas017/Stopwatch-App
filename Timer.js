import React, { useEffect, useState } from 'react'
import { Component } from 'react';
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Entypo,MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
export default function Timer() {
    
    const navigation=useNavigation()
    let [hour,Sethour]=useState("00");
    let [min,Setmin]=useState("00");
    let [sec,Setsec]=useState("00");
    let [ampm,Setampm]=useState("AM");

    useEffect(()=>{
        gethour(),
        getmin(),getsec()
    },[])
    const gethour=()=>{
        let date=new Date();
        let hours=date.getHours();
        Sethour(hours)
       
    }
    const getmin=()=>{
        let date=new Date();
        let minutes=date.getMinutes();
        minutes>9?Setmin(minutes):Setmin('0'+minutes)
    }
    const getsec=()=>{
        let date=new Date();
        let secs=date.getSeconds();
        secs>9?Setsec(secs):Setsec('0'+secs)
    
    }

    const getampm=()=>{
        let date=new Date();
        let ampm=date.getHours()>12?'PM':'AM'
        Setampm(ampm)
    }
    setInterval(()=>{
        gethour()
        getmin()
        getsec()
        getampm()
    },1000);
  return (
    <View style={styles.container}>
        <StatusBar hidden/>
        
      <Text style={styles.hour}>{hour}</Text>
      <Text style={styles.min}>{min}</Text>
      <Text style={styles.sec}>{sec}</Text>
      <View style={styles.ampmbx}><Text style={styles.ampm}>{ampm}</Text></View>
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

const styles=StyleSheet.create({
    container:{width:'100%',display:'flex',flexDirection:"column",
                justifyContent:"center",alignItems:'center',height:'100%',backgroundColor:'black'},
    hour:{color: 'white',
    fontSize: 180,
    fontWeight: 'bold',
    height: 180,
    lineHeight: 180,},

    min:{color: 'grey',
    fontSize: 180,
    fontWeight: 'bold',
    height: 180,
    lineHeight: 180,},

    sec:{color: 'white',
    fontSize: 180,
    fontWeight: 'bold',
    height: 180,
    lineHeight: 180,},
    ampm:{color:'black',fontSize:30,fontWeight:'normal',alignSelf:'center'},
    ampmbx:{backgroundColor:'#57B212',width:80,borderRadius:10,margin:15},
    bottomnav:{display:'flex',flexDirection:'row',position:'absolute',width:'100%',bottom:0,alignItems:'center',justifyContent:'space-evenly',marginBottom:10},
    bottomtextnav:{color:'white',fontSize:40,height:50,width:150,borderRadius:2,textAlign:'center',marginBottom:20},
    
})
