import React, { useEffect, useState } from 'react'
import { 
    SafeAreaView, 
    View, 
    Text, 
    TouchableOpacity, 
    FlatList } from 'react-native'
import database from '../../config/firebaseconfig'
import style from './styles'


export default function Task() {
    const [task, setTask] = useState([])

    useEffect(() =>{
        database.automaticDataCollectionEnabled
    }, [])

    return (
        <View>
            <Text>Pagina de Tarefas</Text>
        </View>
    )
}