import { View, Text, Button } from 'react-native';
import { useNutritionStore } from '../store/useNutritionStore';

export default function TrackerScreen({ navigation }: any) {
  const goals = useNutritionStore((state) => state.goals);
  const entries = useNutritionStore((state) => state.entries);

  // calculate totals
  const totals = entries.reduce(
    (acc, entry) => ({
      calories: acc.calories + entry.calories,
      protein: acc.protein + entry.protein,
      carbs: acc.carbs + entry.carbs,
      fat: acc.fat + entry.fat,
      fiber: acc.fiber + entry.fiber,
      sodium: acc.sodium + entry.sodium,
    }),
    {
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      fiber: 0,
      sodium: 0,
    }
  );

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tracker Screen</Text>

        {goals.protein > 0 && (
            <Text>Protein: {totals.protein} / {goals.protein}</Text>
        )}

        {goals.carbs > 0 && (
            <Text>Carbs: {totals.carbs} / {goals.carbs}</Text>
        )}

        {goals.fat > 0 && (
            <Text>Fat: {totals.fat} / {goals.fat}</Text>
        )}

        {goals.fiber > 0 && (
            <Text>Fiber: {totals.fiber} / {goals.fiber}</Text>
        )}

        {goals.sodium > 0 && (
        <Text>Sodium: {totals.sodium} / {goals.sodium}</Text>
        )}

        <Button
            title="Go to Goals"
            onPress={() => navigation.navigate('Goals')}
        />

        <Button
            title="Add Entry"
            onPress={() => navigation.navigate('AddEntry')}
        />
    </View>
  );
}