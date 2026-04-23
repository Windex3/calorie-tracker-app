import {View, Text, Pressable, ScrollView} from 'react-native';
import { useNutritionStore } from '../store/useNutritionStore';


export default function AllEntries({ navigation }: any) {
    const entries = useNutritionStore((state) => state.entries);

    return (
        <View style={{flex: 1, backgroundColor: '#000000'}}>
            <ScrollView contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 20, paddingBottom: 20 }}>
                <Text style={{color: '#f5f5f5', fontSize: 22, fontWeight: 'bold', marginBottom: 15, paddingVertical: 20}}>All Entries</Text>
                {entries.length > 0 ? (
                    entries.map((entry, index) => (
                        <View key={index}style={{backgroundColor: '#1a1a1a', padding: 10, borderRadius: 6, marginBottom: 8,}}>
                            <Text style={{ color: '#f5f5f5', fontWeight: '600' }}>
                                {entry.name || 'Unnamed Entry'}
                            </Text>

                            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4}}>
                                <Text style={{color: '#f5f5f5'}}>Calories: {entry.calories}</Text>
                                <Text style={{color: '#f5f5f5'}}>Protein: {entry.protein}</Text>   
                            </View>

                            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4}}>
                                <Text style={{color: '#f5f5f5'}}>Carbs: {entry.carbs}</Text>
                                <Text style={{color: '#f5f5f5'}}>Fat: {entry.fat}</Text>   
                            </View>

                            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4}}>
                                <Text style={{color: '#f5f5f5'}}>Fiber: {entry.fiber}</Text>
                                <Text style={{color: '#f5f5f5'}}>Sodium: {entry.sodium}</Text>   
                            </View>

                        </View>
                    ))
                ) : (
                        <Text style={{ color: '#bdbdbd' }}>No entries yet.</Text>
                    )}
            </ScrollView>
        </View>
    )
}








