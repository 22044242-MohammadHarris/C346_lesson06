import React, {useState} from 'react'
import { TextInput, View, Text, Button } from 'react-native'
import RNPickerSelect from 'react-native-picker-select'
import { datasource } from './Data';

function Add({navigation}) {

    const [letter, setLetter] = useState("");
    const [letterType, setLetterType] = useState('');

  return (
    <View>
        <Text>Letter:</Text>
        <TextInput style={{borderWidth:1}} onChangeText={(val)=>setLetter(val)}/>

        <RNPickerSelect
            onValueChange={(val)=>setLetterType(val)}
            items={[
                {
                    label: 'Vowels',
                    value: 'vowels'
                },
                {
                    label: 'Consonants',
                    value: 'consonants'
                },
                
            ]} 
        />

        <Button title='submit' onPress={()=>{
            const item = {"key": letter}
            let indexNum = 1;
            
            if(letterType == 'vowels'){
                indexNum = 0;
            }else if(letterType == 'consonants'){
                indexNum = 1;
            }

            datasource[indexNum].data.push(item)

            // go back to home
            navigation.navigate('home')
        }}/>

        <Text>{letter}</Text>
        <Text>{letterType}</Text>
        {/* {letterType} */}
    </View>
  )
}

export default Add