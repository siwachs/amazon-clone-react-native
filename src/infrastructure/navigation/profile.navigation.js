import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ProfileScreen from "../../screens/Profile.screen";

const StackNavigation = createNativeStackNavigator();

const ProfileNavigation = () => {
  return (
    <StackNavigation.Navigator>
      <StackNavigation.Screen name="Profile" component={ProfileScreen} />
    </StackNavigation.Navigator>
  );
};

export default ProfileNavigation;
