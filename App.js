import React from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput  } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Todays tasks</Text>

        <View style={styles.items}>
          <Task text={'Task 1'}/>
          <Task text={'Task 2'}/>
        </View>

    </View>


    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={styles.tasksWrapper}
    >
      <TextInput style={styles.input} placeholder={'Write a task'} />
    </KeyboardAvoidingView>
    
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
  },
});
