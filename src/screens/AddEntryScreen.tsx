import { View, Text, TextInput, Button } from 'react-native';
import { useState } from 'react';
import { useNutritionStore } from '../store/useNutritionStore';

export default function AddEntryScreen({ navigation }: any) {
  const addEntry = useNutritionStore((state) => state.addEntry);
  const goals = useNutritionStore((state) => state.goals);

  const [name, setName] = useState('');
  const [calories, setCalories] = useState('');
  const [protein, setProtein] = useState('');
  const [carbs, setCarbs] = useState('');
  const [fat, setFat] = useState('');
  const [fiber, setFiber] = useState('');
  const [sodium, setSodium] = useState('');

  const handleAdd = () => {
    addEntry({
      id: Date.now().toString(),
      name,
      calories: Number(calories) || 0,
      protein: Number(protein) || 0,
      carbs: Number(carbs) || 0,
      fat: Number(fat) || 0,
      fiber: Number(fiber) || 0,
      sodium: Number(sodium) || 0,
      createdAt: new Date().toISOString(),
    });

    navigation.goBack();
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Add Entry</Text>

      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />

      {goals.calories > 0 && (
        <TextInput
          placeholder="Calories"
          value={calories}
          onChangeText={setCalories}
          keyboardType="numeric"
        />
      )}

      {goals.protein > 0 && (
        <TextInput
          placeholder="Protein"
          value={protein}
          onChangeText={setProtein}
          keyboardType="numeric"
        />
      )}

      {goals.carbs > 0 && (
        <TextInput
          placeholder="Carbs"
          value={carbs}
          onChangeText={setCarbs}
          keyboardType="numeric"
        />
      )}

      {goals.fat > 0 && (
        <TextInput
          placeholder="Fat"
          value={fat}
          onChangeText={setFat}
          keyboardType="numeric"
        />
      )}

      {goals.fiber > 0 && (
        <TextInput
          placeholder="Fiber"
          value={fiber}
          onChangeText={setFiber}
          keyboardType="numeric"
        />
      )}

      {goals.sodium > 0 && (
        <TextInput
          placeholder="Sodium"
          value={sodium}
          onChangeText={setSodium}
          keyboardType="numeric"
        />
      )}

      <Button title="Add Entry" onPress={handleAdd} />
    </View>
  );
}