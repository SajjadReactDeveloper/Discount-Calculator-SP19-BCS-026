import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';

export default function Calculator({navigation}) {
    const [original, setOriginal] = React.useState(0);
    const [discount, setDiscount] = React.useState(0);
    const [save, setSave] = React.useState(0);
    const [disable, setDisable] = React.useState(false);
    const [item, setItem] = React.useState([])
  
    React.useEffect(() => {
      setSave(original / 100 * discount)
    })
  
    return(
      <View style = {styles.container}>
        <Text style = {styles.text}>Discount Calculator</Text>
        <View>
          <Text>Original Price:</Text>
          <TextInput 
            placeholder = "Enter Original Price"
            placeholderTextColor = "green"
            style = {styles.input}
            onChangeText = {(val) => {
              let newText = '';
              let numbers = '0123456789-.';
              for (var i=0; i < val.length; i++) 
              {
                if(numbers.indexOf(val[i]) > -1 ) 
                {
                  newText = newText + val[i];
                }
                else 
                {
                  alert("Please Enter numbers only")
                }
              }
              if(val < 0){
                alert("You cannot Enter Negative Value")
              }
              else
              {
                setDisable(false);
                setOriginal(val)
              }
            }}
          />
        </View>
  
        <View style = {{marginTop: 20}}>
          <Text>Discount Percentage:</Text>
          <TextInput 
            placeholder = "Enter Discount Percentage"
            placeholderTextColor = "green"
            style = {styles.input}  
            onChangeText = {(val) => {
              let newText = '';
              let numbers = '0123456789-.';
  
              for (var i=0; i < val.length; i++) 
              {
                if(numbers.indexOf(val[i]) > -1 ) 
                {
                  newText = newText + val[i];
                }
                else {
                  alert("Please Enter numbers only")
                }
              }
              if(val < 0){
                alert("You cannot Enter Negative Value")
              }
              else if(val > 100){
                alert("You cannot Enter Value Greater than 100")
              }
              else{
                setDisable(false)
                setDiscount(val)
              }
            }}
          />
        </View>
        {
          original != 0 && discount != 0 ?  
            <View style = {styles.result}>
              <Text style = {styles.text1}>You Save: {save.toFixed(2)}</Text>
              <Text style = {styles.text1}>Final Price: {(original - save).toFixed(2)}</Text> 
            </View>
          : null
        }
  
        <View style = {styles.buttons}>
          <Pressable 
            disabled = {original != 0 && discount != 0 && disable == false ? false: true} 
            style = {{
              padding: 10,
              backgroundColor: original != 0 && discount != 0 && disable == false ? 'green' : '#666666',
              margin: 10,
              width: 80,
              borderRadius: 2,
            }}
            onPress = {() => {
              var obj = {}
              obj["key"] = Math.random();
              obj["Original"] = original;
              obj["Discount"] = discount + " %";
              obj["Final"] = original-save;
              setItem([...item, obj]);
              setDisable(true);
            }}
          >
            <Text style = {styles.text2}>Save</Text>
          </Pressable>
          <Pressable 
            style = {styles.pressable}
            onPress = {() => {
              navigation.navigate('History', {
                historyObject: item,
              })
            }}
          ><Text style = {styles.text2}>History</Text></Pressable>
        </View>
      </View>
    )
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      container1: {
        flex: 1,
        backgroundColor: '#58D68D',
        alignItems: 'center',
        justifyContent: 'center',
      },
      input: {
        borderBottomWidth: 1,
        color: 'green'
      },
      text: {
        marginBottom: 30, 
        fontWeight: 'bold', 
        fontSize: 24
      },
      result: {
        backgroundColor: 'green',
        marginTop: 30,
        padding: 20,
        borderWidth: 1
      },
      text1: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20
      },
      buttons: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'center'
      },
      pressable: {
        padding: 10,
        backgroundColor: 'green',
        margin: 10,
        width: 80,
        borderRadius: 2,
      },
      text2: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
      }
});
