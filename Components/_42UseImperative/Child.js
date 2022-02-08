import { StyleSheet, Text, View } from 'react-native';
import React,{forwardRef, useEffect,useImperativeHandle, useState} from 'react';

const Child = ({count},ref) => {
    console.log(ref)
    const [childCount,setChildCount] = useState(0)
    useEffect(()=>{
        console.log("child");
    })
    useImperativeHandle(ref,()=>({
        incCount:()=>setChildCount(prev=>prev+1)
    }))
  return (
    <View>
      <Text>{childCount}</Text>
    </View>
  );
};

export default forwardRef(Child);

const styles = StyleSheet.create({});
 