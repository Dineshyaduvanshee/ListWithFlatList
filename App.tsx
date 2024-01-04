import React from "react";
import { FlatList, Text, View } from 'react-native';

const App = () => {
  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Dinesh" },
    { id: 3, name: "dineshyaduvanshee" },
    { id: 4, name: "dinesh yadav" },
    { id: 5, name: "Ramil" }
  ];

  const renderItem = ({ item }) => (
    <View>
      <Text style={{fontSize:25}}>{item.name}</Text>
    </View>
  );

  return (
    <View>
      <Text style={{ fontSize: 31 }}>List with Flat List Component</Text>
      <FlatList 
        data={users}
//renderItem={renderItem}  // Provide the renderItem prop
        keyExtractor={(item) => item.id.toString()}
        renderItem = {({item})=><Text style={{ fontSize: 25 }}> {item.name}</Text> }
      />
    </View>
  );
};

export default App;
