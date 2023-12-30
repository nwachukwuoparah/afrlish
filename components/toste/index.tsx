import { View, Animated, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Assuming you're using Expo
import { useEffect, useState } from "react";
import colors from "../../utillity/colors";
import { font } from "../../utillity/font";
import TextComponent from "../reusables/Text.component";
const Toast = ({ success, error }: { success?: string; error?: string }) => {
	const [slideAnim] = useState(new Animated.Value(-100)); // Initial position above the screen

	useEffect(() => {
		// Slide down animation
		Animated.timing(slideAnim, {
			toValue: 50,
			duration: 500,
			useNativeDriver: false, // Add this line for non-native driver support
		}).start();

		// Slide up animation after a delay (e.g., 3000 milliseconds)
		const slideUpTimeout = setTimeout(() => {
			Animated.timing(slideAnim, {
				toValue: -500,
				duration: 500,
				useNativeDriver: false, // Add this line for non-native driver support
			}).start();
		}, 3000); // Adjust the delay as needed

		// Clear timeout on component unmount
		return () => clearTimeout(slideUpTimeout);
	}, [success, error]);

	return (
		<Animated.View
			style={{
				width: "70%",
				// height: "10%",
				position: "absolute",
				flexDirection: "row",
				backgroundColor: colors.white1,
				top: slideAnim,
				zIndex: 1,
				borderRadius: 8,
				overflow: "hidden",
			}}
		>
			<View
				style={{
					width: "2%",
					height: "100%",
					backgroundColor: success ? colors.green : colors.red,
				}}
			></View>
			<View style={{ width: "95%", padding: 10, flexDirection: "row", gap: 6 }}>
				{success ? (
					<Ionicons name="checkmark-circle" size={20} color={colors.green} />
				) : (
					<Ionicons name="alert-circle" size={20} color={colors.red} />
				)}
				<View style={{ gap: 7 }}>
					<TextComponent type="text16"
						sx={{ fontFamily: font.DMSans_500Medium, color: colors.black1 }}
					>
						{success ? "Success" : "Error"}
					</TextComponent >
					<TextComponent type="text16"
						sx={{
							fontFamily: font.DMSans_400Regular,
							color: colors.black1,
						}}
					>
						{success || error}
					</TextComponent >
				</View>
			</View>
		</Animated.View>
	);
};

export default Toast;
