import React, { useEffect, useState, useContext, useReducer } from "react";
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
import { OrderFoodModal } from "../../components/Modal/OrderModal";
import { getCategory, getItem } from "../../utillity/api/query";
import { useQuery } from "@tanstack/react-query";
import LoadingComponent from "../../components/reusables/Loading.component";
import { orderReducer } from "../../components/cartReducer";
import {
	cacheAuthData,
	clearAuthData,
	getCachedAuthData,
} from "../../utillity/storage";
import CheckoutModal from "../../components/Modal/CheckoutModal";

const RestaurantScreen = ({ navigation, route }: any) => {
	const [cart, dispatch] = useReducer(orderReducer, []);
	const [details, setDetails] = useState(false);
	const [checkOut, setCheckOut] = useState(false);
	const [item, setItem] = useState();
	const [category, setCategory] = useState(`?vendorId=${route?.params.id}`);
	const displayModal = () => {
		setDetails(!details);
	};

  const displayCheckoutModal = () => {
		setCheckOut(!checkOut);
	};
	const { data, isFetching, error } = useQuery({
		queryKey: ["get-category", route?.params.id],
		queryFn: getCategory,
	});

	const { data: itemData, isFetching: itemFetching } = useQuery({
		queryKey: ["get-item", category],
		queryFn: getItem,
		gcTime: 5 * 60 * 1000,
	});

	useEffect(() => {
		cacheAuthData(JSON.stringify(cart), "cart");
		// console.log(JSON.stringify(cart, null, 2));
	}, [cart]);

	useEffect(() => {
		(async () => {
			const data = await getCachedAuthData("cart");
			if (data) {
				console.log("log", data);
			} else {
				console.log("no");
			}
		})();
	}, [cart]);

	return (
		<Container>
			<View style={styles.Header}>
				<ImageBackground
					style={{ alignItems: "flex-start", flex: 1, height: "100%" }}
					source={{
						uri: route?.params.image,
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
			<InnerWrapper sx={{ height: "79%" }}>
				<View>
					<View style={styles.headerRow}>
						<TextComponent type="text20">
							The Marseilles
							<TextComponent type="text12">
								42
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
							onPress={() => setCategory(`?vendorId=${route?.params.id}`)}
							color={
								category === `?vendorId=${route?.params.id}`
									? colors.yellow
									: colors.white
							}
							type="default"
						>
							<TextComponent type="text12">All</TextComponent>
						</CustButton>
						{data?.data.data.map((i: any) => (
							<CustButton
								onPress={() => {
									setCategory(`?vendorId=${route?.params.id}&menuId=${i?._id}`);
								}}
								key={i._id}
								sx={{
									width: wp("25%"),
									borderRadius: 0,
									justifyContent: "center",
									alignItems: "center",
									paddingHorizontal: "1.5%",
								}}
								color={
									category === `?vendorId=${route?.params.id}&menuId=${i?._id}`
										? colors.yellow
										: colors.white
								}
								type="default"
							>
								<TextComponent type="text12">{i?.title}</TextComponent>
							</CustButton>
						))}
					</ScrollView>
				</View>
				<FlatList
					style={styles.flatlist}
					data={itemData?.data.data}
					showsVerticalScrollIndicator={false}
					contentContainerStyle={{ gap: 20 }}
					renderItem={(item) => (
						<TouchableOpacity
							onPress={() => {
								displayModal();
								setItem(item?.item);
							}}
						>
							<FoodComponent {...item?.item} />
						</TouchableOpacity>
					)}
					keyExtractor={(item) => item._id}
				/>
				<OrderFoodModal
					closeFunc={displayModal}
					display={details}
					item={item}
					dispatch={dispatch}
					cart={cart}
				/>
				<CheckoutModal
					closeFunc={displayCheckoutModal }
					display={checkOut}
					dispatch={dispatch}
					cart={cart}
				/>
			</InnerWrapper>
			{cart.length > 0 && (
				<CheckoutTab
					onPress={() => {
						setCheckOut(!checkOut);
					}}
				/>
			)}
			<LoadingComponent displayLoadingComponent={isFetching || itemFetching} />
		</Container>
	);
};

const CheckoutTab = ({ onPress }: { onPress: () => void }) => {
	return (
		<View style={styles.checkoutTab}>
			<CustButton
				onPress={onPress}
				sx={styles.checkoutButn}
				color={colors.grey2}
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
				<TextComponent type="text16" sx={{ color: colors.black1 }}>
					Checkout your tray
				</TextComponent>
				<TextComponent type="text16" sx={{ color: colors.black1 }}>
					£20
				</TextComponent>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	flatlist: {
		width: "100%",
		marginTop: 10,
		marginBottom: 5,
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
		backgroundColor: colors.yellow1,
		paddingHorizontal: "5%",
		alignItems: "center",
		justifyContent: "center",
		height: hp("10%"),
	},

	checkoutButn: {
		height: hp("5%"),
		width: hp("5%"),
		position: "absolute",
		top: hp("-2.5%"),
	},
});

export default RestaurantScreen;
