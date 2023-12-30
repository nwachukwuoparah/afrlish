import React, { useCallback, useMemo, useRef, useState } from "react";
import {
	View,
	Image,
	StyleSheet,
	Modal,
	TouchableOpacity,
	Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import colors from "../../utillity/colors";
import TextComponent from "../reusables/Text.component";
import { font } from "../../utillity/font";

interface props {
	closeFunc: () => void;
	display: boolean;
}

export const OrderFoodModal = ({ closeFunc, display }: props) => {
	const [itemCount, setitemCount] = useState<number>(1);

	return (
		<Modal
			animationType="slide"
			transparent={true}
			visible={display}
			onRequestClose={closeFunc}
		>
			<View style={styles.container}>
				<Pressable onPress={closeFunc} style={{ height: "30%" }}></Pressable>
				<View style={styles.contentContainer}>
					<View style={styles.header}>
						<TouchableOpacity
							style={{ height: hp("5%"), width: hp("5%") }}
							onPress={closeFunc}
						>
							<Ionicons
								name="ios-close-outline"
								size={hp("4%")}
								color={colors.black}
							/>
						</TouchableOpacity>

						<TextComponent
							sx={{
								seflAlign: "center",
							}}
							type="text20"
						>
							Add to your tray
						</TextComponent>
						<View style={{ width: 50 }}></View>
					</View>

					<View style={{ width: wp("100%") }}>
						<Image
							style={styles.foodImg}
							source={{
								uri: "https://www.denverpost.com/wp-content/uploads/2021/12/Native-Foods-jalapeno-popper-burger-scaled-1.jpeg?w=1079",
							}}
						/>
						<View style={{ paddingHorizontal: "5%", width: "100%", gap: 15 }}>
							<View style={{ gap: 5 }}>
								<TextComponent type="text14" sx={{ color: colors.black1 }}>
									White rice and vegetable salad
								</TextComponent>
								<TextComponent sx={{ color: colors.grey }} type="text14">
									Grilled chicken salad with eggs, tomato, cabbage, sweet peas
								</TextComponent>
								<TextComponent
									type="text14"
									sx={{ fontFamily: font.DMSans_700Bold }}
								>
									£20 per portion
								</TextComponent>
							</View>

							<View style={styles.foodContentDetailsWrapper}>
								<View style={styles.foodContentDetails}>
									<TextComponent sx={{ color: colors.grey }} type="text14">
										Calories
									</TextComponent>
									<TextComponent
										type="text14"
										sx={{
											color: colors.black1,
											fontFamily: font.DMSans_500Medium,
										}}
									>
										124k
									</TextComponent>
								</View>
								<View style={styles.foodContentDetails}>
									<TextComponent sx={{ color: colors.grey }} type="text14">
										Carbs
									</TextComponent>
									<TextComponent
										type="text14"
										sx={{
											color: colors.black1,
											fontFamily: font.DMSans_500Medium,
										}}
									>
										65g
									</TextComponent>
								</View>
								<View style={styles.foodContentDetails}>
									<TextComponent sx={{ color: colors.grey }} type="text14">
										Fat
									</TextComponent>
									<TextComponent
										type="text14"
										sx={{
											color: colors.black1,
											fontFamily: font.DMSans_500Medium,
										}}
									>
										80g
									</TextComponent>
								</View>
								<View
									style={[styles.foodContentDetails, { borderRightWidth: 0 }]}
								>
									<TextComponent sx={{ color: colors.grey }} type="text14">
										Protein
									</TextComponent>
									<TextComponent
										type="text14"
										sx={{
											color: colors.black1,
											fontFamily: font.DMSans_500Medium,
										}}
									>
										100g
									</TextComponent>
								</View>
							</View>

							<View
								style={{
									flexDirection: "row",
									width: "100%",
									justifyContent: "space-between",
								}}
							>
								<View style={styles.increamentButnWrapper}>
									<TouchableOpacity
										style={styles.increamentButn}
										onPress={() =>
											itemCount > 1 &&
											setitemCount((prevCount) => prevCount - 1)
										}
									>
										<TextComponent type="text20">-</TextComponent>
									</TouchableOpacity>

									<TextComponent type="text20">{itemCount}</TextComponent>

									<TouchableOpacity
										style={styles.increamentButn}
										onPress={() => setitemCount((prevCount) => prevCount + 1)}
									>
										<TextComponent type="text20">+</TextComponent>
									</TouchableOpacity>
								</View>
								<TouchableOpacity
									// onPress={() => addToCartFunc(handleClosePress)}
									style={styles.addButn}
								>
									<TextComponent type="text20">Add £20</TextComponent>
								</TouchableOpacity>
							</View>

							<View
								style={{
									width: "100%",
									backgroundColor: colors.tint,
									marginTop: "3%",
									padding: "5%",
									borderRadius: 8,
								}}
							>
								<TextComponent
									sx={{ textAlign: "center", color: colors.grey }}
									type="text14"
								>
									Your calorie count for the week is 24 calories
								</TextComponent>
							</View>
						</View>
					</View>
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	container: {
		width: wp("100%"),
		height: hp("100%"),
		shadowColor: "#000",
		position: "absolute",
		shadowOpacity: 0.25,
		shadowRadius: 14.84,
		elevation: 5,
		backgroundColor: "rgba(0, 0, 0, 0.3)",
		alignSelf: "flex-end",
	},

	contentContainer: {
		height: "70%",
		opacity: 1,
		borderRadius: 20,
		alignItems: "center",
		overflow: "hidden",
		backgroundColor: colors.white,
	},

	header: {
		flexDirection: "row",
		width: "100%",
		alignItems: "center",
		padding: 5,
		justifyContent: "space-between",
	},

	foodImg: {
		width: "100%",
		height: "30%",
		marginVertical: "2.5%",
	},

	foodContentDetailsWrapper: {
		width: "100%",
		height: "18%",
		flexDirection: "row",
		borderWidth: 1,
		borderColor: colors.grey2,
		padding: 10,
		borderRadius: 8,
	},

	foodContentDetails: {
		height: "100%",
		justifyContent: "space-around",
		borderRightWidth: 1,
		flex: 0.25,
		borderColor: colors.grey,
		paddingLeft: "2.5%",
		gap: 10,
	},

	addButn: {
		backgroundColor: colors.yellow,
		width: wp("30%"),
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: "3%",
		borderRadius: 8,
	},

	increamentButnWrapper: {
		flexDirection: "row",
		width: "50%",
		justifyContent: "space-around",
		alignItems: "center",
	},

	increamentButn: {
		padding: 13,
		paddingHorizontal: 22,
		borderWidth: 1,
		borderRadius: 8,
		alignItems: "center",
		borderColor: colors.yellow,
	},
});
