import Button from '@/src/components/Button';
import { defaultPizzaImage } from '@/src/components/ProductListItem';
import { useState } from 'react';
import {View, Text, StyleSheet, TextInput, Image } from 'react-native';
import Colors from '@/src/constants/Colors';

const CreateProductScreen =() => {

    const [name,setName] = useState('');
    const [price,setPrice] = useState('');
    const [errors, setErrors] = useState('');

    const resetFields = () => {
        setName('');
        setPrice('');
    }


    const validateInput = () => {
        setErrors('');        
        if(!name) {
            setErrors('Name is required');
            return false;
        }
        if(!price){
            setErrors('Price is required')
            return false;
        }
        if (isNaN(parseFloat(price))){
            setErrors('Price is not a number')
            return false;
        }
        return true;
    };


    const onCreate =() =>{

        if(!validateInput()){
            return;
        }

        console.warn('Creating Product',  name);

        //save in the database
        resetFields();
    }

    return(
        <View style={styles.container} >
            <Image source = {{uri: defaultPizzaImage}}  style = {styles.image} />
            <Text style={styles.textButton}> Select Image</Text>
            <Text style ={styles.label}> Name</Text>
            <TextInput 
                value = {name}
                onChangeText={ setName}  
                placeholder='Name'  
                style= {styles.input}/>
            <Text style ={styles.label}> Price($)</Text>
            <TextInput
                value = {price}
                onChangeText={setPrice}  
                placeholder='9.99'  
                style= {styles.input} 
                keyboardType='numeric'/>
            <Text style={{color: 'red'}}>{errors}</Text>
            <Button onPress={onCreate} text='Create'/>
        </View>
        
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1, //to make sure the objects spans the entire screen
        justifyContent:'center',
        padding:10,
    },
    image:{
        width: '50%',
        aspectRatio:1,
        alignSelf:'center',
    },
    textButton:{
        alignSelf:'center',
        fontWeight: 'bold',
        color: Colors.light.tint,
        marginVertical:10,
    },
    input:{
        backgroundColor:'white',
        padding:10,
        borderRadius:5,
        marginTop:5,
        marginBottom:20,
    },
    label:{
        color: 'gray',
        fontSize:16,
    },
});

export default CreateProductScreen;