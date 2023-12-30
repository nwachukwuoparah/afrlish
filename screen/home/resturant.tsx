import React, { useEffect, useState, useContext } from "react";
import {
	FlatList,
	View,
	StyleSheet,
	TouchableOpacity,
	RefreshControl,
	ImageBackground,
	ScrollView,
} from "react-native";
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import CustButton from "../../components/reusables/Buttons.component";
import Container, {
	InnerWrapper,
} from "../../components/reusables/Containers.component";
import colors from "../../utillity/colors";
import TextComponent from "../../components/reusables/Text.component";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import FoodComponent from "../../components/reusables/FoodComponent";

const RestaurantScreen = ({ navigation }: any) => {
	return (
		<Container>
			<View style={styles.Header}>
				<ImageBackground
					style={{ alignItems: "flex-start", flex: 1, height: "100%" }}
					source={{
						uri: "https://www.denverpost.com/wp-content/uploads/2021/12/Native-Foods-jalapeno-popper-burger-scaled-1.jpeg?w=1079",
					}}
				>
					<CustButton
						onPress={navigation.goBack}
						color={colors.white}
						sx={{ height: hp("4.3%") }}
						type="back"
					/>
				</ImageBackground>
			</View>
			<InnerWrapper>
				<View>
					<View style={styles.headerRow}>
						<TextComponent type="text20">
							The Marseilles{" "}
							<TextComponent type="text12">
								42{" "}
								<Ionicons
									name="ios-star-sharp"
									size={hp("2%")}
									color={colors.yellow}
								/>
								(129)
							</TextComponent>
						</TextComponent>
						<Ionicons
							name="search-sharp"
							size={hp("3%")}
							color={colors.black}
						/>
					</View>
					<ScrollView
						showsHorizontalScrollIndicator={false}
						style={{
							borderBottomColor: colors.grey,
							borderBottomWidth: 1.5,
						}}
						horizontal
					>
						<CustButton
							sx={{
								width: wp("25%"),
								borderRadius: 0,
								justifyContent: "center",
								alignItems: "center",
								paddingHorizontal: "1.5%",
							}}
							color={colors.yellow}
							type="default"
						>
							<TextComponent type="text12">All</TextComponent>
						</CustButton>
						<CustButton
							sx={{
								width: wp("25%"),
								borderRadius: 0,
								justifyContent: "center",
								alignItems: "center",
								paddingHorizontal: "1.5%",
							}}
							color="transparent"
							type="default"
						>
							<TextComponent type="text12">Breakfast</TextComponent>
						</CustButton>
						<CustButton
							sx={{
								width: wp("25%"),
								borderRadius: 0,
								justifyContent: "center",
								alignItems: "center",
								paddingHorizontal: "1.5%",
							}}
							color="transparent"
							type="default"
						>
							<TextComponent type="text12">Lunch</TextComponent>
						</CustButton>
						<CustButton
							sx={{
								width: wp("25%"),
								borderRadius: 0,
								justifyContent: "center",
								alignItems: "center",
								paddingHorizontal: "1.5%",
							}}
							color="transparent"
							type="default"
						>
							<TextComponent type="text12">Dinner</TextComponent>
						</CustButton>
						<CustButton
							sx={{
								width: wp("25%"),
								borderRadius: 0,
								justifyContent: "center",
								alignItems: "center",
								paddingHorizontal: "1.5%",
							}}
							color="transparent"
							type="default"
						>
							<TextComponent type="text12">Snack</TextComponent>
						</CustButton>
					</ScrollView>
				</View>

				<FlatList
					style={styles.flatlist}
					data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]}
					renderItem={() => (
						<TouchableOpacity
						//  onPress={openCartModal}
						>
							<FoodComponent
								foodName="White rice and vegetable salad"
								details="Grilled chicken salad with eggs, tomato, cabbage, sweet peas"
								price={"£10"}
								foodImage="https://www.denverpost.com/wp-content/uploads/2021/12/Native-Foods-jalapeno-popper-burger-scaled-1.jpeg?w=1079"
							/>
						</TouchableOpacity>
					)}
				/>
				{/* {displayDetals && (
					<OrderFoodModal
						addToCartFunc={addToCart}
						closeFunc={() => setDisplayDetails(false)}
					/>
				)}
				{displayCheckoutTab && (
					<CheckoutTab onPress={() => setDisplayCheckoutModal(true)} />
				)}
				{displayCheckoutModal && (
					<CheckoutModal closeFunc={() => setDisplayCheckoutModal(false)} />
				)} */}
			</InnerWrapper>
		</Container>
	);
};

const CheckoutTab = ({ onPress }: { onPress: () => void }) => {
	return (
		<View style={styles.checkoutTab}>
			<CustButton
				onPress={onPress}
				sx={styles.checkoutButn}
				color={colors.white}
				type="rounded"
			>
				<FontAwesome
					name="angle-double-up"
					size={hp("3%")}
					color={colors.black}
				/>
			</CustButton>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
					width: "100%",
				}}
			>
				<TextComponent type="text20">Checkout your tray</TextComponent>
				<TextComponent type="text20">£20</TextComponent>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	flatlist: {
		width: "100%",
	},

	Header: {
		height: "15%",
		width: "100%",
	},

	headerRow: {
		justifyContent: "space-between",
		flexDirection: "row",
		width: "100%",
		paddingVertical: 10,
	},

	checkoutTab: {
		width: wp("100%"),
		backgroundColor: colors.yellow,
		paddingHorizontal: "5%",
		alignItems: "center",
		justifyContent: "center",
		height: hp("7%"),
		top: hp("-10%"),
	},

	checkoutButn: {
		height: hp("5%"),
		width: hp("5%"),
		position: "absolute",
		top: hp("-2.5%"),
	},
});

export default RestaurantScreen;
