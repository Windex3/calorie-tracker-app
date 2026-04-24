import {View, Text, Pressable, ScrollView} from 'react-native';
import { useNutritionStore } from '../store/useNutritionStore';
import {useState} from 'react';


export default function AllEntries({ navigation }: any) {
    const entries = useNutritionStore((state) => state.entries);
    const [isEditing, setIsEditing] = useState(false);
    const deleteEntry = useNutritionStore((state) => state.deleteEntry);

    return (
        <View style={{flex: 1, backgroundColor: '#000000'}}>
            <ScrollView contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 20, paddingBottom: 20}}>
                {/*Header*/}
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10}}>
                    <Text style={{color: '#f5f5f5', fontSize: 22, fontWeight: 'bold', marginBottom: 15, paddingVertical: 20}}>All Entries</Text>
                    <Pressable onPress={() => setIsEditing(!isEditing)}>
                        <Text style={{color: '#f5f5f5', fontSize: 22, marginBottom: 15, paddingVertical: 20}}>
                            {isEditing ? 'Done' : 'Edit'}
                        </Text>
                    </Pressable>
                </View>
                {/*Entries*/}
                {entries.length > 0 ? (
                    entries.map((entry, index) => (
                        <View key={entry.id}style={{backgroundColor: '#1a1a1a', padding: 10, borderRadius: 6, marginBottom: 8,}}>
                            <Text style={{ color: '#f5f5f5', fontWeight: '600' }}>
                                {entry.name || 'Unnamed Entry'}
                            </Text>

                            <View style={{flexDirection: 'row', marginBottom: 4, gap: 45}}>
                                <Text style={{color: '#bdbdbd'}}>Calories: {entry.calories}</Text>
                                <Text style={{color: '#bdbdbd'}}>Protein: {entry.protein}</Text>   
                            </View>

                            <View style={{flexDirection: 'row', marginBottom: 4, gap: 60}}>
                                <Text style={{color: '#bdbdbd'}}>Carbs: {entry.carbs}</Text>
                                <Text style={{color: '#bdbdbd'}}>Fat: {entry.fat}</Text>   
                            </View>

                            <View style={{flexDirection: 'row', marginBottom: 4, gap: 65}}>
                                <Text style={{color: '#bdbdbd'}}>Fiber: {entry.fiber}</Text>
                                <Text style={{color: '#bdbdbd'}}>Sodium: {entry.sodium}</Text>   
                            </View>

                            {isEditing && (<Pressable onPress={() => deleteEntry(entry.id)} style={{backgroundColor: '#FF3B30', paddingVertical: 8, paddingHorizontal: 12, borderRadius: 6, marginTop: 10, alignSelf: 'flex-start'}}>
                                <Text style={{color: '#ffffff', fontWeight: 'bold'}}>
                                    Delete
                                </Text>
                            </Pressable>
                            )}
                        </View>
                    ))
                ) : (
                        <Text style={{ color: '#bdbdbd' }}>No entries yet.</Text>
                    )}
                        
            </ScrollView>
            
        </View>
    )
}








