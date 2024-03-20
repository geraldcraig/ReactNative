import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AuthContextProvider } from './context/AuthContext';
import { useAuthContext } from './hooks/useAuthContext';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Logout from './pages/Logout';

const Tab = createBottomTabNavigator();

function MyTabs() {
  const { user, authIsReady } = useAuthContext();

  return (
    <NavigationContainer>
      {authIsReady && (
        <Tab.Navigator>
          {user ? (
            <>
              <Tab.Screen name="Home" component={Home} />
              <Tab.Screen name="Logout" component={Logout} />
            </>
          ) : (
            <>
              <Tab.Screen name="Login" component={Login} />
              <Tab.Screen name="Signup" component={Signup} />
            </>
          )}
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
}

function App() {
  return (
    <AuthContextProvider>
      <MyTabs />
    </AuthContextProvider>

  );
}

export default App;