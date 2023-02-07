import {  StatusBar,  } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, FlatList } from 'react-native';


export default function App() {
  const [todo, setTodo] = React.useState('');
  const [todos, setTodos] = React.useState([]);

  const listSeparator = () => {
    return (
      <View style={{height: 1, backgroundColor: 'blue'}}/>
    )
  }

  return (
    <View style={styles.container}>
      <TextInput
      style={{width: 200, borderColor: 'gray', borderWidth: 1}}
      value={todo}
      onChangeText={text => setTodo(text)}
      />
      <View style={styles.button}>
      <Button
      title='Add todo'
      onPress={() => setTodos([...todos, todo])}
      />
      <Button
      title='Clear'
      onPress={() => setTodos([])}
      />
      </View>
      <FlatList
      data={todos}
      renderItem={({item}) => <Text style={{fontSize: 20}}>{item}</Text>}
      ItemSeparatorComponent={listSeparator}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, button: {
    display: 'flex',
    flexDirection: 'row'
  }
});
