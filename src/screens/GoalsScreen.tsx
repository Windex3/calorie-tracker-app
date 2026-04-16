import { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useNutritionStore } from '../store/useNutritionStore';

export default function GoalsScreen({ navigation }: any) {
  const goals = useNutritionStore((state) => state.goals);
  const setGoals = useNutritionStore((state) => state.setGoals);

  const [calories, setCalories] = useState(goals.calories.toString());
  const [protein, setProtein] = useState(goals.protein.toString());
  const [carbs, setCarbs] = useState(goals.carbs.toString());
  const [fat, setFat] = useState(goals.fat.toString());
  const [fiber, setFiber] = useState(goals.fiber.toString());
  const [sodium, setSodium] = useState(goals.sodium.toString());

  const handleSave = async () => {
    await setGoals({
      calories: Number(calories) || 0,
      protein: Number(protein) || 0,
      carbs: Number(carbs) || 0,
      fat: Number(fat) || 0,
      fiber: Number(fiber) || 0,
      sodium: Number(sodium) || 0,
    });

    navigation.goBack();
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Daily Goals</Text>

      <TextInput
        placeholder="Calories"
        value={calories}
        onChangeText={setCalories}
        keyboardType="numeric"
      />

      <TextInput
        placeholder="Protein"
        value={protein}
        onChangeText={setProtein}
        keyboardType="numeric"
      />

      <TextInput
        placeholder="Carbs"
        value={carbs}
        onChangeText={setCarbs}
        keyboardType="numeric"
      />

      <TextInput
        placeholder="Fat"
        value={fat}
        onChangeText={setFat}
        keyboardType="numeric"
      />

      <TextInput
        placeholder="Fiber"
        value={fiber}
        onChangeText={setFiber}
        keyboardType="numeric"
      />

      <TextInput
        placeholder="Sodium"
        value={sodium}
        onChangeText={setSodium}
        keyboardType="numeric"
      />

      <Button title="Save Goals" onPress={handleSave} />
    </View>
  );
}