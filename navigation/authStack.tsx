import { createStackNavigator } from "@react-navigation/stack";
import SignupScreen from "../screen/auth/signup";
import VerificationScreen from "../screen/auth/Verification";
import Login from "../screen/auth/login";
import LoginVerificationScreen from "../screen/auth/VerificationLogin";

const Stack = createStackNavigator();

const AuthStack = () => {

	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="signUp" component={SignupScreen} />
			<Stack.Screen name="verify" component={VerificationScreen} />
			<Stack.Screen name="login" component={Login} />
			<Stack.Screen name="loginVerify" component={LoginVerificationScreen} />
		</Stack.Navigator>
	);
};
export default AuthStack;
