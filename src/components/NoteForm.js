import React, {  useState } from 'react';
import { Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-community/picker'
import styled from 'styled-components/native';


const FormView = styled.View`
    margin: 12px;
    margin-top: 30px


    width: 300px;
    height: 65%;


    padding-top: 10px;
    padding-bottom: 20px;
    padding-left: 10px;
    padding-right: 1.5px;

    border-right-width: 1px;
    border-right-color: #ced0ce;

    border-top-width: 1px;
    border-top-color: #ced0ce;

    border-left-width: 1px;
    border-left-color: #ced0ce;

    border-bottom-width: 1px;
    border-bottom-color: #ced0ce;

    border-radius: 10px;

    background-color: #FFFFFF;

    elevation: 2
`;

const StyledInput = styled.TextInput`
    border: 1px solid #9eb1cf;
    border-radius: 5px;
    font-size: 18px;
    padding: 8px;
    margin-top: 24px;
    background-color: #ffffff
    elevation: 2
`;

const FormButton = styled.TouchableOpacity`
    background: #67bdb6;
    width: 40%;
    padding: 8px;
    margin-left: 30%;
    border-radius: 25px;
    elevation:2
`
const ButtonText = styled.Text`
    text-align: center;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
`

const NoteForm = props => {
    const id = props.id;

    const [title, setTitle] = useState();
    const [number, setNumber] = useState();
    const [content, setContent] = useState();
    const [type, setType] = useState();

    const handleSubmit = () => {
        props.action({
            variables: {
                title: title,
                number: number,
                content: content,
                type: type
            }
        })
    }

    return (
        <FormView>

            <Text>Title</Text>
            <StyledInput 
                onChangeText={setTitle}
                value={title}
                placeholder="Title"
            />

            <Text>Number</Text>
            <StyledInput 
                onChangeText={setNumber}
                value={number}
                placeholder="Number"
            />

            <Text>Content</Text>
            <StyledInput 
                onChangeText={setContent}
                value={content}
                placeholder="Content"
            />

            <Text>Type</Text>
            <Picker
                style={{ height: 50, width: 150 }}
                onValueChange={(itemValue, itemIndex) =>setType(itemValue)}
                selectedValue={type}
                itemStyle={{ backgroundColor: "grey", color: "blue", fontFamily:"Ebrima", fontSize:17 }}
            >        
                <Picker.Item label="Manga" value="Manga" />
                <Picker.Item label="Anime" value="Anime" />
                <Picker.Item label="None" value="" />

            </Picker>

            <FormButton onPress={handleSubmit}>
                <ButtonText>Submit</ButtonText>
            </FormButton>


        </FormView>
    )
}

export default NoteForm;