import { createStackNavigator } from "@react-navigation/stack";
import TabNav from "./tabNavigation";
import RestaurantScreen from "../screen/home/resturant";

const Stack = createStackNavigator();

const VendorStack = () => {
	return (
		<Stack.Navigator
			// initialRouteName="addResturant"
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="dashboard" component={TabNav} />
			<Stack.Screen name="restaurant" component={RestaurantScreen} />
			{/* <Stack.Screen name="order-details{event}" component={EventOrderDetails} />

			<Stack.Screen name="order-accepted" component={OrderAccepted} />

			<Stack.Screen
				name="order-accepted{event}"
				component={EventOrderAccepted}
			/>

			<Stack.Screen name="schedule" component={OrderScheduleScreen} />

			<Stack.Screen name="createItem" component={CreateItemScreen} />

			<Stack.Screen name="createBulkItem" component={CreateBulkItemScreen} />

			<Stack.Screen name="create-category" component={CreateCategory} />

			<Stack.Screen name="payment-details" component={PaymentDetails} />

			<Stack.Screen name="payment-info" component={PaymentInfo} />

			<Stack.Screen name="get-payment-info" component={AddPayment} />

			<Stack.Screen name="profile-info" component={ProfileInfo} />

			<Stack.Screen name="operations" component={Opreations} />

			<Stack.Screen name="get-operations" component={GetOperations} /> */}
		</Stack.Navigator>
	);
};

export default VendorStack;
