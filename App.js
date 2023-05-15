import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import TaskList from './components/TaskList';

const App = () => {
  const [titulo, setTitle] = useState('');
  const [descricao, setDescription] = useState('');
  const [DataCon, setDueDate] = useState('');
  const [tarefa, setTasks] = useState([]);

  const addTarefa = () => {
    if (!titulo.trim() || !descricao.trim() || !DataCon.trim()) {
      return;
    }

    const novaTarefa = {
      id: Date.now(),
      titulo: titulo,
      descricao: descricao,
      DataCon: DataCon,
      completed: false,
    };

    setTasks([...tarefa, novaTarefa]);


    setTitle('');
    setDescription('');
    setDueDate('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>ToDoList_React</Text>
      <TextInput
        placeholder="Tarefa"
        value={titulo}
        onChangeText={(text) => setTitle(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Descrição"
        value={descricao}
        onChangeText={(text) => setDescription(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Data de Conclusão (DD/MM/AAAA)"
        value={DataCon}
        onChangeText={(text) => setDueDate(text)}
        style={styles.input}
      />
      <Button title="Criar Tarefa" onPress={addTarefa} color = '#05fc63'/>
      <TaskList tasks={tarefa} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 25,
    marginBottom: 15,
    marginTop: 10,
  },
  input: {
    borderWidth: 2,
    borderColor: 'green',
    borderRadius: 20,
    padding: 10,
    marginBottom: 15,
  },
});

export default App;
