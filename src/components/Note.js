import React from 'react';
import { ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import styled from 'styled-components/native';
import Markdown from 'react-native-markdown-renderer';
import { format } from 'date-fns';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const NoteView = styled.ScrollView`
    padding: 10px;
    color: #FFFFFF
`

const NoteLayout = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 100%;
`

const ImageView = styled.View`
    width: 50px;
    height: auto;
    margin-left: 0px;
`

const SecondCollumView = styled.View`
    width: auto;
    height: auto;
`

const ThirdCollumView = styled.View`
    width: auto;
    height: auto;
`

const LinkView = styled.View`
    width: auto;
    height: auto;
`

const StyledTitle = styled.Text`
    font-size: 17;
    font-weight: bold;
    color: #464e5c;
`

const StyledNumber = styled.Text`
    font-size: 12;
    color: #464e5c;
`
const StyledTime = styled.Text`
    color: #a8d9d5;
    justify-content: center;
`
const StyledType = styled.Text`
    color: #a8d9d5;
    justify-content: center;
`

const Note = props => {

    return (
        <NoteView>
            <NoteLayout>

                <ImageView>
                    <MaterialCommunityIcons color='#FFFFFF' name="checkbox-marked-circle-outline" size={40}/>
                </ImageView>

                <SecondCollumView>

                    <StyledTitle>{props.note.title}</StyledTitle>
                    <StyledNumber>{props.note.number}</StyledNumber>

                </SecondCollumView>

                <ThirdCollumView>

                    <StyledTime>{format(new Date(props.note.createdAt), 'H:mm MM/dd/yyyy')}</StyledTime>
                    <StyledType>{props.note.type}</StyledType>

                </ThirdCollumView>

                <LinkView>

                    <Text>Links</Text>
                
                </LinkView>

            </NoteLayout>
        </NoteView>
    )
}

export default Note;