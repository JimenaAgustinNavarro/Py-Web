import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Inicio from './vista/inicio';

const Stack = createStackNavigator()
function App() {
  
  return (
    <NavigationContainer>
      
        
        <Inicio/>
    
    </NavigationContainer>
  )
  }
export default App