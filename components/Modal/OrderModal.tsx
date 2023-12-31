import React, {
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState,
} from "react";
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
import { getCachedAuthData } from "../../utillity/storage";

interface props {
	closeFunc: () => void;
	display: boolean;
	item: any;
	dispatch: any;
	cart: any;
}

export const OrderFoodModal = ({
	closeFunc,
	display,
	item,
	dispatch,
	cart,
}: props) => {
	const [value, setValue] = useState<any>();

	useEffect(() => {
		(() => {
			const newItem = cart.filter((i: any) => i.id === item._id);
			console.log("value", newItem);
			setValue(newItem[0]);
		})();
	}, [cart, display]);

	useEffect(() => {
		console.log(item);
	}, [item]);
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
							type="text16"
						>
							Add to your tray
						</TextComponent>
						<View style={{ width: 50 }}></View>
					</View>

					<View style={{ width: wp("100%") }}>
						<Image
							style={styles.foodImg}
							source={{
								uri: item?.image,
							}}
						/>
						<View style={{ paddingHorizontal: "5%", width: "100%", gap: 15 }}>
							<View style={{ gap: 5 }}>
								<TextComponent
									type="text16"
									sx={{ color: colors.black1, fontFamily: font.DMSans_700Bold }}
								>
									{item?.name}
								</TextComponent>
								<TextComponent sx={{ color: colors.grey }} type="text14">
									{item?.description}
								</TextComponent>
								<TextComponent
									type="text14"
									sx={{ fontFamily: font.DMSans_700Bold }}
								>
									£ {item?.price} per portion
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
										{item?.calorie ? item?.calorie : "--"} g
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
										{item?.carb ? item?.carb : "--"} g
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
										{item?.fat ? item?.fat : "--"} g
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
										{item?.protein ? item?.protein : "--"} g
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
										style={{
											...styles.increamentButn,
											opacity: cart.length === 0 ? 0.4 : 9,
										}}
										onPress={() => {
											if (cart.length > 0) {
												console.log("call");
												dispatch({
													type: "REDUCE_QUANTITY",
													payload: {
														id: item._id,
													},
												});
											}
										}}
									>
										<TextComponent type="text20">-</TextComponent>
									</TouchableOpacity>

									<TextComponent type="text20">
										{value?.quantity ? value?.quantity : 0}
									</TextComponent>

									<TouchableOpacity
										style={{
											...styles.increamentButn,
											opacity: cart.length === 0 ? 0.4 : 9,
										}}
										onPress={() => {
											if (cart.length !== 0) {
												dispatch({
													type: "ADD_TO_CART",
													payload: {
														id: item._id,
														quantity: 1,
														price: item.price,
													},
												});
											}
										}}
									>
										<TextComponent type="text20">+</TextComponent>
									</TouchableOpacity>
								</View>
								<TouchableOpacity
									onPress={() => {
										closeFunc();
										dispatch({
											type: "ADD_TO_CART",
											payload: {
												id: item._id,
												quantity: 1,
												price: item.price,
											},
										});
									}}
									style={styles.addButn}
								>
									<TextComponent type="text16">Add £20</TextComponent>
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
		padding: 10,
		paddingHorizontal: 15,
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
		alignItems: "center",
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
