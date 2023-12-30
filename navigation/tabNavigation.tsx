import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { StyleSheet, View } from "react-native";
import TextComponent from "../components/reusables/Text.component";
import colors from "../utillity/colors";
import HomeScreen from "../screen/home";
import Home from "../assets/home.svg"

const Tab = createBottomTabNavigator();

const TabNav = () => {
	return (
		<Tab.Navigator
			backBehavior="initialRoute"
			initialRouteName="home"
			screenOptions={{
				headerShown: false,
				tabBarLabelStyle: { fontSize: hp("1.5%") },
				tabBarStyle: { height: hp("10%"), paddingBottom: 28 },
			}}
		>
			<Tab.Screen
				name="home"
				options={{
					tabBarIcon: ({ focused }: { focused: boolean }) => {
						return (
							<View
								style={{
									...styles.active,
									paddingTop: 6,
									borderBlockColor: focused ? colors.yellow : colors.white1,
								}}
							>
								{/* {focused ? <Home /> : <Home/>} */}
							</View>
						);
					},
					tabBarLabel: ({ focused, children }) => {
						return (
							<TextComponent
								type="text12"
								sx={{ color: focused ? colors.yellow1 : colors.grey }}
							>
								{children}
							</TextComponent>
						);
					},
				}}
				component={HomeScreen}
			/>

			{/* 	<Tab.Screen
				name="order"
				options={{
					tabBarIcon: ({ focused }: { focused: boolean }) => {
						return (
							<View
								style={{
									...styles.active,
									borderBlockColor: focused
										? colors.yellow
										: colors.white1,
								}}
							>
								{focused ? <Orderfill /> : <Order />}
							</View>
						);
					},
					tabBarLabel: ({ focused, children }) => {
						return (
							<TextComponent
								type="text12"
								sx={{ color: focused ? colors.yellow1 : colors.grey }}
							>
								{children}
							</TextComponent>
						);
					},
				}}
				component={OrderScreen}
			/>

			<Tab.Screen
				name="menu"
				options={{
					tabBarIcon: ({ focused }: { focused: boolean }) => {
						return (
							<View
								style={{
									...styles.active,
									borderBlockColor: focused
										? colors.yellow
										: colors.white1,
								}}
							>
								{focused ? <Menufill /> : <Menu />}
							</View>
						);
					},
					tabBarLabel: ({ focused, children }) => {
						return (
							<TextComponent
								type="text12"
								sx={{ color: focused ? colors.yellow1 : colors.grey }}
							>
								{children}
							</TextComponent>
						);
					},
					headerShown: false,
				}}
				component={MenuScreen}
			/>

			<Tab.Screen
				name="Payments"
				options={{
					tabBarIcon: ({ focused }: { focused: boolean }) => {
						return (
							<View
								style={{
									...styles.active,
									borderBlockColor: focused
										? colors.yellow
										: colors.white1,
								}}
							>
								{focused ? <Paymentfill /> : <Payment />}
							</View>
						);
					},
					tabBarLabel: ({ focused, children }) => {
						return (
							<TextComponent
								type="text12"
								sx={{ color: focused ? colors.yellow1 : colors.grey }}
							>
								{children}
							</TextComponent>
						);
					},
					headerShown: false,
				}}
				component={PaymentScreen}
			/>
			<Tab.Screen
				name="Profile"
				options={{
					tabBarIcon: ({ focused }: { focused: boolean }) => {
						return (
							<View
								style={{
									...styles.active,
									paddingTop: 6,
									borderBlockColor: focused
										? colors.yellow
										: colors.white1,
								}}
							>
								<View
									style={{
										...styles.profile,
										borderColor: focused ? colors.yellow : colors.grey,
									}}
								>
									<Profile />
								</View>
							</View>
						);
					},
					tabBarLabel: ({ focused, children }) => {
						return (
							<TextComponent
								type="text12"
								sx={{ color: focused ? colors.yellow1 : colors.grey }}
							>
								{children}
							</TextComponent>
						);
					},
					headerShown: false,
				}}
				component={ProfileScreen}
			/> */}
		</Tab.Navigator>
	);
};

const styles = StyleSheet.create({
	profile: {
		borderWidth: 1,
		borderRadius: 20,
		marginBottom: 5,
		width: 25,
		height: 25,
		alignItems: "center",
		justifyContent: "center",
	},
	active: {
		borderTopWidth: 2,
		height: "90%",
		width: "50%",
		paddingTop: 10,
		alignItems: "center",
	},
});

export default TabNav;
