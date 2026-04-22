import {View, Text, Pressable, ScrollView} from 'react-native';
import { useNutritionStore } from '../store/useNutritionStore';


export default function TrackerScreen({ navigation }: any) {
  const goals = useNutritionStore((state) => state.goals);
  const entries = useNutritionStore((state) => state.entries);

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

  const recentEntries = entries.slice(-3).reverse();

  const calorieProgress =
    goals.calories > 0 ? Math.min(totals.calories / goals.calories, 1) : 0;
  const proteinProgress =
    goals.protein > 0 ? Math.min(totals.protein / goals.protein, 1) : 0;
  const carbsProgress =
    goals.carbs > 0 ? Math.min(totals.carbs / goals.carbs, 1) : 0;
  const fatProgress =
    goals.fat > 0 ? Math.min(totals.fat / goals.fat, 1) : 0;
  const fiberProgress =
    goals.fiber > 0 ? Math.min(totals.fiber / goals.fiber, 1) : 0;
  const sodiumProgress =
    goals.sodium > 0 ? Math.min(totals.sodium / goals.sodium, 1) : 0;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#000000',
      }}
    >
      {/* Top content */}
      <ScrollView contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 20, paddingBottom: 20 }}>
        <Text
          style={{
            color: '#f5f5f5',
            fontSize: 22,
            fontWeight: 'bold',
            marginBottom: 15,
          }}
        >
          Today's Progress
        </Text>

        {goals.calories > 0 && (
          <View
            style={{
              backgroundColor: '#1a1a1a',
              padding: 12,
              borderRadius: 8,
              marginBottom: 12,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 8,
              }}
            >
              <Text style={{ color: '#f5f5f5' }}>Calories</Text>
              <Text style={{ color: '#f5f5f5' }}>
                {totals.calories} / {goals.calories}
              </Text>
            </View>

            <View
              style={{
                height: 10,
                backgroundColor: '#2a2a2a',
                borderRadius: 5,
              }}
            >
              <View
                style={{
                  height: 10,
                  width: `${calorieProgress * 100}%`,
                  backgroundColor: '#007AFF',
                  borderRadius: 5,
                }}
              />
            </View>
          </View>
        )}

        {goals.protein > 0 && (
          <View
            style={{
              backgroundColor: '#1a1a1a',
              padding: 12,
              borderRadius: 8,
              marginBottom: 12,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 8,
              }}
            >
              <Text style={{ color: '#f5f5f5' }}>Protein</Text>
              <Text style={{ color: '#f5f5f5' }}>
                {totals.protein} / {goals.protein}
              </Text>
            </View>

            <View
              style={{
                height: 10,
                backgroundColor: '#2a2a2a',
                borderRadius: 5,
              }}
            >
              <View
                style={{
                  height: 10,
                  width: `${proteinProgress * 100}%`,
                  backgroundColor: '#34C759',
                  borderRadius: 5,
                }}
              />
            </View>
          </View>
        )}

        {goals.carbs > 0 && (
          <View
            style={{
              backgroundColor: '#1a1a1a',
              padding: 12,
              borderRadius: 8,
              marginBottom: 12,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 8,
              }}
            >
              <Text style={{ color: '#f5f5f5' }}>Carbs</Text>
              <Text style={{ color: '#f5f5f5' }}>
                {totals.carbs} / {goals.carbs}
              </Text>
            </View>

            <View
              style={{
                height: 10,
                backgroundColor: '#2a2a2a',
                borderRadius: 5,
              }}
            >
              <View
                style={{
                  height: 10,
                  width: `${carbsProgress * 100}%`,
                  backgroundColor: '#FF9500',
                  borderRadius: 5,
                }}
              />
            </View>
          </View>
        )}

        {goals.fat > 0 && (
          <View
            style={{
              backgroundColor: '#1a1a1a',
              padding: 12,
              borderRadius: 8,
              marginBottom: 12,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 8,
              }}
            >
              <Text style={{ color: '#f5f5f5' }}>Fat</Text>
              <Text style={{ color: '#f5f5f5' }}>
                {totals.fat} / {goals.fat}
              </Text>
            </View>

            <View
              style={{
                height: 10,
                backgroundColor: '#2a2a2a',
                borderRadius: 5,
              }}
            >
              <View
                style={{
                  height: 10,
                  width: `${fatProgress * 100}%`,
                  backgroundColor: '#FF3B30',
                  borderRadius: 5,
                }}
              />
            </View>
          </View>
        )}

        {goals.fiber > 0 && (
          <View
            style={{
              backgroundColor: '#1a1a1a',
              padding: 12,
              borderRadius: 8,
              marginBottom: 12,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 8,
              }}
            >
              <Text style={{ color: '#f5f5f5' }}>Fiber</Text>
              <Text style={{ color: '#f5f5f5' }}>
                {totals.fiber} / {goals.fiber}
              </Text>
            </View>

            <View
              style={{
                height: 10,
                backgroundColor: '#2a2a2a',
                borderRadius: 5,
              }}
            >
              <View
                style={{
                  height: 10,
                  width: `${fiberProgress * 100}%`,
                  backgroundColor: '#AF52DE',
                  borderRadius: 5,
                }}
              />
            </View>
          </View>
        )}

        {goals.sodium > 0 && (
          <View
            style={{
              backgroundColor: '#1a1a1a',
              padding: 12,
              borderRadius: 8,
              marginBottom: 20,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 8,
              }}
            >
              <Text style={{ color: '#f5f5f5' }}>Sodium</Text>
              <Text style={{ color: '#f5f5f5' }}>
                {totals.sodium} / {goals.sodium}
              </Text>
            </View>

            <View
              style={{
                height: 10,
                backgroundColor: '#2a2a2a',
                borderRadius: 5,
              }}
            >
              <View
                style={{
                  height: 10,
                  width: `${sodiumProgress * 100}%`,
                  backgroundColor: '#FFD60A',
                  borderRadius: 5,
                }}
              />
            </View>
          </View>
        )}

        {/* Recent entries */}
        <View style={{ marginTop: 10 }}>
          <Text
            style={{
              color: '#ffffff',
              fontSize: 18,
              fontWeight: 'bold',
              marginBottom: 10,
            }}
          >
            Recent Entries
          </Text>

          {recentEntries.length > 0 ? (
            recentEntries.map((entry, index) => (
              <View
                key={index}
                style={{
                  backgroundColor: '#1a1a1a',
                  padding: 10,
                  borderRadius: 6,
                  marginBottom: 8,
                }}
              >
                <Text style={{ color: '#f5f5f5', fontWeight: '600' }}>
                  {entry.name || 'Unnamed Entry'}
                </Text>
                <Text style={{ color: '#bdbdbd', marginTop: 2 }}>
                  {entry.calories} cal
                </Text>
              </View>
            ))
          ) : (
            <Text style={{ color: '#bdbdbd' }}>No entries yet.</Text>
          )}

          <Pressable
            onPress={() => console.log('View all entries later')}
            style={{
              backgroundColor: '#4a4a4a',
              paddingVertical: 12,
              paddingHorizontal: 18,
              borderRadius: 8,
              alignSelf: 'flex-start',
              marginTop: 10,
            }}
          >
            <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>
              VIEW ALL ENTRIES
            </Text>
          </Pressable>
        </View>
      </ScrollView>

      {/* Bottom bar */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          borderTopWidth: 1,
          borderTopColor: '#555',
          paddingTop: 15,
          paddingBottom: 20,
          backgroundColor: '#353232',
          paddingHorizontal: 20,
        }}
      >
        <Pressable
          onPress={() => navigation.navigate('Goals')}
          style={{
            backgroundColor: '#4a4a4a',
            paddingVertical: 12,
            paddingHorizontal: 18,
            borderRadius: 8,
            marginRight: 10,
          }}
        >
          <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>
            GO TO GOALS
          </Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate('AddEntry')}
          style={{
            backgroundColor: '#4a4a4a',
            paddingVertical: 12,
            paddingHorizontal: 18,
            borderRadius: 8,
          }}
        >
          <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>
            ADD ENTRY
          </Text>
        </Pressable>
      </View>
    </View>
  );
}