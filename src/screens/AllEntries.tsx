import {View, Text, Pressable, ScrollView, TextInput, Alert} from 'react-native';
import { useNutritionStore } from '../store/useNutritionStore';
import {useState} from 'react';

export default function AllEntries({ navigation }: any) {
    const entries = useNutritionStore((state) => state.entries);
    const deleteEntry = useNutritionStore((state) => state.deleteEntry);
    const updateEntry = useNutritionStore((state) => state.updateEntry);
    const [isEditing, setIsEditing] = useState(false);
    const [editedValues, setEditedValues] = useState<{ [key: string]: any }>({});

    return (
        <View style={{flex: 1, backgroundColor: '#000000'}}>
            <ScrollView contentContainerStyle={{paddingHorizontal: 20, paddingTop: 20, paddingBottom: 20}}>
                
                {/*Header*/}
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10}}>
                    <Text style={{color: '#f5f5f5', fontSize: 22, fontWeight: 'bold', marginBottom: 15, paddingVertical: 20}}>
                        All Entries
                    </Text>

                    <Pressable onPress={() => setIsEditing(!isEditing)}>
                        <Text style={{color: '#f5f5f5', fontSize: 22, marginBottom: 15, paddingVertical: 20}}>
                            {isEditing ? 'Done' : 'Edit'}
                        </Text>
                    </Pressable>
                </View>

                {/*Entries*/}
                {entries.length > 0 ? (
                    entries.map((entry) => {
                        const currentEdit = editedValues[entry.id];

                        return (
                            <View key={entry.id} style={{backgroundColor: '#1a1a1a', padding: 10, borderRadius: 6, marginBottom: 8}}>
                                <Text style={{color: '#f5f5f5', fontWeight: '600', marginBottom: 8}}>
                                    {entry.name || 'Unnamed Entry'}
                                </Text>

                                {isEditing ? (
                                    <>
                                        {/*Overall card*/}
                                        <Text style={{color: '#bdbdbd', marginBottom: 4}}>Calories</Text>
                                        <TextInput
                                            style={{backgroundColor: '#2a2a2a', color: '#f5f5f5', padding: 8, borderRadius: 4, marginBottom: 8}}
                                            keyboardType="numeric"
                                            value={String(currentEdit?.calories ?? entry.calories)}
                                            onChangeText={(text) => setEditedValues({...editedValues, [entry.id]: {...currentEdit, calories: Number(text) || 0}})}
                                        />

                                        {/*Protein*/}
                                        <Text style={{color: '#bdbdbd', marginBottom: 4}}>Protein</Text>
                                        <TextInput
                                            style={{backgroundColor: '#2a2a2a', color: '#f5f5f5', padding: 8, borderRadius: 4, marginBottom: 8}}
                                            keyboardType="numeric"
                                            value={String(currentEdit?.protein ?? entry.protein)}
                                            onChangeText={(text) => setEditedValues({...editedValues, [entry.id]: {...currentEdit, protein: Number(text) || 0}})}
                                        />

                                        {/*Carbs*/}
                                        <Text style={{color: '#bdbdbd', marginBottom: 4}}>Carbs</Text>
                                        <TextInput
                                            style={{backgroundColor: '#2a2a2a', color: '#f5f5f5', padding: 8, borderRadius: 4, marginBottom: 8}}
                                            keyboardType="numeric"
                                            value={String(currentEdit?.carbs ?? entry.carbs)}
                                            onChangeText={(text) => setEditedValues({...editedValues, [entry.id]: {...currentEdit, carbs: Number(text) || 0}})}
                                        />

                                        {/*Fat*/}
                                        <Text style={{color: '#bdbdbd', marginBottom: 4}}>Fat</Text>
                                        <TextInput
                                            style={{backgroundColor: '#2a2a2a', color: '#f5f5f5', padding: 8, borderRadius: 4, marginBottom: 8}}
                                            keyboardType="numeric"
                                            value={String(currentEdit?.fat ?? entry.fat)}
                                            onChangeText={(text) => setEditedValues({...editedValues, [entry.id]: {...currentEdit, fat: Number(text) || 0}})}
                                        />

                                        {/*Fiber*/}
                                        <Text style={{color: '#bdbdbd', marginBottom: 4}}>Fiber</Text>
                                        <TextInput
                                            style={{backgroundColor: '#2a2a2a', color: '#f5f5f5', padding: 8, borderRadius: 4, marginBottom: 8}}
                                            keyboardType="numeric"
                                            value={String(currentEdit?.fiber ?? entry.fiber)}
                                            onChangeText={(text) => setEditedValues({...editedValues, [entry.id]: {...currentEdit, fiber: Number(text) || 0}})}
                                        />

                                        {/*Sodium*/}
                                        <Text style={{color: '#bdbdbd', marginBottom: 4}}>Sodium</Text>
                                        <TextInput
                                            style={{backgroundColor: '#2a2a2a', color: '#f5f5f5', padding: 8, borderRadius: 4, marginBottom: 8}}
                                            keyboardType="numeric"
                                            value={String(currentEdit?.sodium ?? entry.sodium)}
                                            onChangeText={(text) => setEditedValues({...editedValues, [entry.id]: {...currentEdit, sodium: Number(text) || 0}})}
                                        />

                                        {/*Save Button*/}
                                        <View style={{flexDirection: 'row', gap: 10, marginTop: 10}}>
                                            <Pressable
                                                onPress={() => {
                                                    updateEntry(entry.id, {...entry, ...currentEdit});
                                                    Alert.alert('Saved', 'Entry updated successfully.');
                                                }}
                                                style={{backgroundColor: '#007AFF', paddingVertical: 8, paddingHorizontal: 12, borderRadius: 6}}
                                            >
                                                <Text style={{color: '#ffffff', fontWeight: 'bold'}}>Save</Text>
                                            </Pressable>

                                            {/*Delete Button*/}
                                            <Pressable
                                                onPress={() => {
                                                    deleteEntry(entry.id);
                                                    Alert.alert('Deleted', 'Entry deleted successfully.');
                                                }}
                                                style={{backgroundColor: '#FF3B30', paddingVertical: 8, paddingHorizontal: 12, borderRadius: 6}}
                                            >
                                                <Text style={{color: '#ffffff', fontWeight: 'bold'}}>Delete</Text>
                                            </Pressable>
                                        </View>
                                    </>
                                ) : (
                                    <>
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
                                    </>
                                )}
                            </View>
                        );
                    })
                ) : (
                    <Text style={{color: '#bdbdbd'}}>No entries yet.</Text>
                )}
            </ScrollView>
        </View>
    );
}