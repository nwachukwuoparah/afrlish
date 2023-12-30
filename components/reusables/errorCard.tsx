import React, { useEffect, useRef, useState } from "react";
import Container from "./Containers.component";
import { Animated, View, Modal, StyleSheet } from "react-native";
import TextComponent from "./Text.component";
import appColors from "../../utill/helpers/colors";
import { font } from "../../utill/helpers/font";
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from "react-native-responsive-screen";

function ErrorCard({ err, sx }: any) {
	const fadeAnim = useRef(new Animated.Value(0)).current;
	const [display, setDisplay] = useState(false);
	
	useEffect(() => {
		(() => {
			// Will change fadeAnim value to 1 in 5 seconds
			Animated.timing(fadeAnim, {
				toValue: 1,
				duration: 2000,
				useNativeDriver: true,
			}).start();
      console.log("come")
			setDisplay(true);
		})();
		setTimeout(() => {
			Animated.timing(fadeAnim, {
				toValue: 0,
				duration: 3000,
				useNativeDriver: true,
			}).start();
      console.log("go")
			setDisplay(false);
		}, 4000);
	}, []);
	const styles = StyleSheet.create({
		container: {
			position: "absolute",
			alignItems: "center",
			justifyContent: "center",
			width: wp("100%"),
			height: hp("100%"),
			backgroundColor: "rgba(0, 0, 0, 0.15)",
			shadowOpacity: 0.4,
			display: "flex",
		},
	});
	return (
		<Modal transparent visible={err && display ? true : false}>
			<View style={styles.container}>
				<Animated.View
					style={[
						{
							// Bind opacity to animated value
							opacity: fadeAnim,
						},
					]}
				>
					<TextComponent
						type="text20"
						sx={{
							color: appColors.red,
							fontFamily: font.DMSans_700Bold,
							textAlign: "center",
						}}
					>
						{err.errors["msg"]}
					</TextComponent>
				</Animated.View>
			</View>
		</Modal>
	);
}

export default ErrorCard;
