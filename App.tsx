import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { StripeProvider } from "@stripe/stripe-react-native";
import TabNav from "./navigation/tabNavigation";
import {
	DMSans_400Regular,
	DMSans_500Medium,
	DMSans_700Bold,
	useFonts,
} from "@expo-google-fonts/dm-sans";
import * as SplashScreen from "expo-splash-screen";
import Splash from "./components/splashScreen";
import AuthStack from "./navigation/authStack";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { getCachedAuthData } from "./utillity/storage";
import VendorStack from "./navigation/vendorStack";
const queryClient = new QueryClient();

let userToken: any = null;
(async () => {
	try {
		const token = await getCachedAuthData("user-token");
		userToken = token;
	} catch (err) {
		return (userToken = null);
	}
})();
SplashScreen.preventAutoHideAsync();

export default function App() {
	const [splash, setSplash] = useState(true);

	const [fontsLoaded] = useFonts({
		DMSans_400Regular,
		DMSans_500Medium,
		DMSans_700Bold,
	});

	if (!fontsLoaded) {
		SplashScreen.hideAsync();
	}

	useEffect(() => {
		setTimeout(() => setSplash(false), 5000);
		// clearAuthData("sign-up-token");
		// clearAuthData("user-token");

		// clearAuthData("step")
		// console.log("token",userToken);
	}, []);

	return (
		<>
			{splash ? (
				<Splash />
			) : (
				<StripeProvider publishableKey="pk_test_51MOsbZH3TrIYO24978Jq92qpMBd5MAOFm6VproVzyo3tlsJU6WUmK9GdtLzU4T7jNMCwIkfwV2zL16oxKvEJYMO200JKvMFIKv">
					<QueryClientProvider client={queryClient}>
						<NavigationContainer>
							{userToken ? <VendorStack /> : <AuthStack />}
						</NavigationContainer>
					</QueryClientProvider>
					<StatusBar style="dark" />
				</StripeProvider>
			)}
		</>
	);
}
