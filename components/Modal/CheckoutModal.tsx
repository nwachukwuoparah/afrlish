import {
	KeyboardAvoidingView,
	StyleSheet,
	TouchableOpacity,
	View,
} from "react-native";
import { Modal } from "react-native";
import colors from "../../utillity/colors";
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import CustButton from "../reusables/Buttons.component";
import TextComponent from "../reusables/Text.component";
import InputText from "../textInput";
import Container, {
	InnerWrapper,
	KeyboardView,
	ScrollContainer,
} from "../reusables/Containers.component";
import { useMemo, useState } from "react";
// import RadioGroup, { RadioButtonProps } from 'react-native-radio-buttons-group';
import { Ionicons, MaterialIcons, Entypo, AntDesign } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";
import { font } from "../../utillity/font";

interface props {
	closeFunc: () => void;
	display: boolean;
	dispatch: any;
	cart: any;
}

const CheckoutModal = ({ closeFunc, display, dispatch, cart }: props) => {
	const [itemCount, setitemCount] = useState<number>(1);
	const [selectedId, setSelectedId] = useState<string | undefined>();

	return (
		<Modal
			style={{
				backgroundColor: colors.white,
			}}
			animationType="slide"
			visible={display}
		>
			<View
				style={{
					alignItems: "center",
					width: wp("100%"),
					height: hp("100%"),
					backgroundColor: colors.white,
				}}
			>
				<View style={styles.header}>
					<CustButton onPress={closeFunc} color={colors.black} type="back" />
					<TextComponent sx={{ textAlign: "center" }} type="text16">
						Check Out
					</TextComponent>
					<View></View>
				</View>

				<InnerWrapper sx={{}}>
					<View
						style={{
							borderRadius: 10,
							width: "100%",
							height: hp("6%"),
							flexDirection: "row",
							marginVertical: "5%",
							alignItems: "center",
							justifyContent: "center",
							backgroundColor: "#fff",
							overflow: "hidden",
						}}
					>
						<TouchableOpacity
							style={{
								width: "50%",
								backgroundColor: colors.yellow1,
								height: "100%",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<TextComponent type="text16">Delivery</TextComponent>
						</TouchableOpacity>

						<TouchableOpacity
							style={{
								width: "50%",
								backgroundColor: colors.white1,
								height: "100%",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<TextComponent type="text16">Pick up</TextComponent>
						</TouchableOpacity>
					</View>

					<KeyboardAvoidingView>
						<ScrollContainer>
							<View
								style={{
									backgroundColor: colors.grey2,
									padding: "3%",
									borderRadius: 10,
									marginBottom: "10%",
								}}
							>
								<TextComponent
									sx={{
										marginBottom: "3%",
										color: colors.grey,
										fontFamily: font.DMSans_700Bold,
									}}
									type="text16"
								>
									Plate 1
								</TextComponent>
								{cart.map((i: any) => (
									<View
										key={i.id}
										style={{
											flexDirection: "row",
											width: "100%",
											justifyContent: "space-between",
											paddingBottom: "3%",
											borderBottomWidth: 1,
											borderColor: colors.white,
										}}
									>
										<View style={{ gap: 5 }}>
											<TextComponent type="text16">
												White rice and vege...
											</TextComponent>
											<TextComponent type="text12">£20</TextComponent>
										</View>
										<View style={styles.increamentButnWrapper}>
											<View style={styles.increamentButn}>
												<TouchableOpacity
													onPress={() =>
														itemCount > 1 &&
														setitemCount((prevCount) => prevCount - 1)
													}
													style={{ width: "100%", alignItems: "center" }}
												>
													<TextComponent type="text20">-</TextComponent>
												</TouchableOpacity>
											</View>
											<TextComponent type="text20">{itemCount}</TextComponent>

											<View style={styles.increamentButn}>
												<TouchableOpacity
													onPress={() =>
														setitemCount((prevCount) => prevCount + 1)
													}
													style={{ width: "100%", alignItems: "center" }}
												>
													<TextComponent type="text20">+</TextComponent>
												</TouchableOpacity>
											</View>
										</View>
									</View>
								))}

								<View
									style={{
										marginVertical: "5%",
										alignItems: "center",
										width: "100%",
										flexDirection: "row",
										justifyContent: "space-between",
									}}
								>
									<TouchableOpacity
										style={{
											paddingVertical: "3%",
											width: "30%",
											alignItems: "center",
											borderWidth: 1,
											borderColor: colors.yellow,
											backgroundColor: colors.white,
											flexDirection: "row",
											justifyContent: "center",
											borderRadius: 8,
										}}
									>
										<Ionicons
											name="ios-add"
											size={hp("2.3%")}
											color={colors.black}
										/>
										<TextComponent type="text14" sx={{ color: colors.black1 }}>
											Add item
										</TextComponent>
									</TouchableOpacity>
									<TouchableOpacity>
										<MaterialIcons
											name="delete-outline"
											size={hp("4%")}
											color={colors.red}
										/>
									</TouchableOpacity>
								</View>
							</View>
							<View style={{ marginBottom: hp("27%") }}>
								<TextComponent type="text16">Delivering To:</TextComponent>
								<View
									style={{
										backgroundColor: colors.grey,
										flexDirection: "row",
										justifyContent: "space-between",
										width: "100%",
										marginVertical: "3%",
										paddingHorizontal: "3%",
										paddingVertical: "5%",
									}}
								>
									<Entypo
										name="location"
										size={hp("2%")}
										color={colors.black}
									/>
									<TextComponent sx={{ width: "90%" }} type="text12">
										{" "}
										No 3 Guru Maraji street, Victoria, UK{" "}
									</TextComponent>
									<Entypo name="edit" size={hp("2%")} color={colors.black} />
								</View>
								{/* <InputComponent
									onChange={() => null}
									extraStyles={{
										wrapper: { width: "100%", marginVertical: "3%" },
									}}
									placeholder="Add note for restaurant (optional)"
									type="text"
								/> */}
								{/* <InputComponent
									onChange={() => null}
									extraStyles={{
										wrapper: { width: "100%", marginVertical: "3%" },
									}}
									placeholder="Add note for rider (optional)"
									type="text"
								/> */}
								{/* <InputComponent
									onChange={() => null}
									extraStyles={{
										wrapper: { width: "100%", marginVertical: "3%" },
									}}
									placeholder="Enter promo code"
									type="text"
								/> */}
								<TextComponent type="text16">Payment Summary:</TextComponent>
								<View
									style={{
										backgroundColor: colors.grey,
										flexDirection: "row",
										justifyContent: "space-between",
										width: "100%",
										marginVertical: "3%",
										paddingHorizontal: "3%",
										paddingVertical: "5%",
									}}
								>
									<TextComponent sx={{ width: "90%" }} type="text12">
										Wihte Rice and Vegitable
									</TextComponent>
									<TextComponent sx={{ width: "90%" }} type="text12">
										£20
									</TextComponent>
								</View>
								<View
									style={{
										backgroundColor: colors.grey,
										flexDirection: "row",
										justifyContent: "space-between",
										width: "100%",
										marginVertical: "3%",
										paddingHorizontal: "3%",
										paddingVertical: "5%",
									}}
								>
									<TextComponent sx={{ width: "90%" }} type="text12">
										Water
									</TextComponent>
									<TextComponent sx={{ width: "90%" }} type="text12">
										£5
									</TextComponent>
								</View>
								<View
									style={{
										backgroundColor: colors.grey,
										flexDirection: "row",
										justifyContent: "space-between",
										width: "100%",
										marginVertical: "3%",
										paddingHorizontal: "3%",
										paddingVertical: "5%",
									}}
								>
									<TextComponent sx={{ width: "90%" }} type="text12">
										Delivery Fee
									</TextComponent>
									<TextComponent sx={{ width: "90%" }} type="text12">
										£10
									</TextComponent>
								</View>
							</View>
						</ScrollContainer>
					</KeyboardAvoidingView>
				</InnerWrapper>
				<View>
					<CustButton
						sx={{
							width: undefined,
							paddingHorizontal: "5%",
							marginBottom: "5%",
							backgroundColor: colors.yellow,
						}}
						type="default"
					>
						<TextComponent type="text12">Add plate</TextComponent>
					</CustButton>
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	header: {
		flexDirection: "row",
		width: "100%",
		justifyContent: "space-between",
		alignItems: "center",
		// height: "10%",
		backgroundColor: colors.white1,
		paddingHorizontal: "6%",
		paddingTop: "15%",
		paddingBottom: "3%",
	},

	increamentButnWrapper: {
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		gap: 10,
	},

	increamentButn: {
		paddingVertical: 7,
		paddingHorizontal: 15,
		borderWidth: 1,
		borderRadius: 8,
		backgroundColor: colors.white,
		alignItems: "center",
		borderColor: colors.yellow,
	},
});

export default CheckoutModal;
