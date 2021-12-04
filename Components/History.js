import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Pressable, FlatList, TouchableOpacity, Modal } from 'react-native';
import { DataTable } from 'react-native-paper';

export default function History({navigation, route}) {
    const [item, setItem] = React.useState(route.params.historyObject);
    const [modalVisible, setModalVisible] = React.useState(false);

    const deleteItem = (key) => {
        setItem(item.filter(i => i.key != key));
    };

    const DeleteHistory = () => {
        setItem("")
    }

    return(
      <View style = {styles.container}>
        <Modal animationType="fade" transparent={true} visible={modalVisible}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Are you Sure?</Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: 10
                        }}>
                        <TouchableOpacity
                            style={styles.touchable}
                            onPress={() => {
                                DeleteHistory();
                                setModalVisible(false);
                            }}>
                            <Text style={{color: '#fff'}}>Yes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touchable}
                            onPress={() => {
                                setModalVisible(false);
                            }}>
                            <Text style={{color: '#fff'}}>No</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
        <DataTable style = {styles.table}>
            <DataTable.Header style = {styles.header}>
                <DataTable.Title><Text style = {styles.title}>Original Price</Text></DataTable.Title>
                <DataTable.Title numeric><Text style = {styles.title}>Discount</Text></DataTable.Title>
                <DataTable.Title numeric><Text style = {styles.title}>Final Price</Text></DataTable.Title>
                <DataTable.Title numeric><Text style = {styles.title}>Delete</Text></DataTable.Title>
            </DataTable.Header>

            <FlatList
                data={item}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        key = {item.key}
                    >
                        <DataTable.Row>
                            <DataTable.Cell>{item.Original}</DataTable.Cell>
                            <DataTable.Cell numeric>{item.Discount}</DataTable.Cell>
                            <DataTable.Cell numeric>{item.Final}</DataTable.Cell>
                            <DataTable.Cell numeric>
                                <TouchableOpacity 
                                    style = {styles.touchable2}
                                    onPress = {() => {
                                        deleteItem(item.key)
                                    }}
                                ><Text style = {styles.text}>X</Text></TouchableOpacity>
                            </DataTable.Cell>
                        </DataTable.Row>
                    </TouchableOpacity>
                )}
            />
        </DataTable>
        
        <Pressable 
          style = {styles.pressable}
          onPress = {() => {
            setModalVisible(true);
          }}
        >
          <Text style = {styles.text2}>Clear History</Text>
        </Pressable>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  pressable: {
    padding: 10,
    backgroundColor: 'green',
    margin: 10,
    width: 150,
    borderRadius: 2,
  },
  text2: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  touchable2: {
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 20
  },
  header: {
      backgroundColor: '#000',
  },
  title: {
      color: '#fff',
      fontWeight: 'bold'
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 280,
  },
  modalText: {
    marginBottom: 5,
    textAlign: 'center',
    fontSize: 20,
  },
  touchable: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    borderRadius: 5,
    padding: 10,
    width: 80,
    marginRight: 10
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  table: {
      marginTop: 30
  }
});
