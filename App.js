import { NavigationContainer } from '@react-navigation/native';


import HomeScreen from './screens/HomeScreen';
import ContactScreen from './screens/ContactScreen';
import ShopScreen from './screens/ShopScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={({route}) => ({
      tabBarIcon: ({color, size}) =>{
        let iconName = '';

        if (route.name === 'Shop'){
          iconName = 'shopping-cart';
        }else if(route.name === 'Contact'){
          iconName = 'comment';
        }

        return <FontAwesome name={iconName} size={size} color={color} />;
      },

      tabBarActiveTintColor: 'orange',
      tabBarActiveTintColor: 'gold',
      headerShown: false,
    })}
    >
      <Tab.Screen name='Shop' component={ShopScreen} />
      <Tab.Screen name='Contact' component={ContactScreen} />

    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={ {headerShown: false}}>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='TabNavigator' component={TabNavigator}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



