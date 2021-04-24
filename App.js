import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RoutersStacks from './Componentes/RoutersStacks';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <RoutersStacks />
      </NavigationContainer>
    </>
  );
}
export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     fontSize: 35,
//     fontWeight: "bold",
//   },
//   image: {
//     marginBottom: 40,
//   },
//   inputView: {
//     backgroundColor: "#87CEFA",
//     borderRadius: 30,
//     width: "70%",
//     height: 45,
//     marginBottom: 20,
//     alignItems: "center",
//   },

//   TextInput: {
//     height: 50,
//     flex: 1,
//     padding: 10,
//     marginLeft: 20,
//   },
//   forgot_button: {
//     height: 30,
//     marginBottom: 30,
//   },
//   loginBtn:
//   {
//     width: "80%",
//     borderRadius: 25,
//     height: 50,
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 40,
//     backgroundColor: "#87CEEB",
//   }
// });
