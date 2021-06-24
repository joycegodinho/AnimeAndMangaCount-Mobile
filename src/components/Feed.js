import React, { useState, useCallback } from 'react';
import { FlatList, View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Note from './Note'

const Separator = styled.View`
    height: 0px;
    width: 100%;
    background-color: #ced0ce
`

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

const Feed = props => {
    const [refreshing, setRefreshing] = useState(false);
    
    const onRefresh = () => {
        setRefreshing(true);
        wait(3000).then(() => setRefreshing(false));     
    };

    return (
        <View>

            <FlatList 
            
                data={props.notes}
                keyExtractor={({ id }) => id.toString()}
                ItemSeparatorComponent={() => <Separator />}
                refreshing={refreshing}
                onRefresh={onRefresh}
                renderItem={({ item, index }) =>  (

                    <Note note={item} id={item.id}/>
                )}           
            
            />

        </View>
)}

export default Feed;