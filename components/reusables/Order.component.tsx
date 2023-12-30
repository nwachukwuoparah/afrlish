import { View, StyleSheet, Image, Pressable } from "react-native";
import TextComponent from "./Text.component";
import appColors from "../../utill/helpers/colors";
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { CardImage } from "../../assets";
import CustButton from "./Buttons.component";
import { font } from "../../utill/helpers/font";
import { useEffect, useState } from "react";
import {
	QueryFilters,
	useMutation,
	useQueryClient,
} from "@tanstack/react-query";
import { handleError } from "../../utill/helpers/error";
import { outOfStock } from "../../utill/api/mutate";
import { ActivityIndicator } from "react-native";

export const OrderCard = ({ onPress, status,totalAmount ,userName,itemId}: any) => {
	return (
		<Pressable onPress={onPress}>
			<View style={styles.item}>
				<View style={styles.item_left}>
					<TextComponent
						type="text14"
						sx={{
							fontFamily: font.DMSans_400Regular,
							color: appColors.grey,
						}}
					>
						Order {userName}
					</TextComponent>
					<TextComponent
						type="text16"
						sx={{ fontFamily: font.DMSans_500Medium }}
					>
						{itemId?.length} Plate
					</TextComponent>
					<View style={styles.status}>
						<TextComponent
							type="text12"
							sx={{ fontWeight: 700, color: appColors.grey }}
						>
							{status}
						</TextComponent>
					</View>
				</View>
				<View style={styles.item_right}>
					<MaterialIcons
						name="keyboard-arrow-right"
						size={hp(2.5)}
						color={appColors.black1}
					/>
					<TextComponent
						type="text16"
						sx={{ fontWeight: 500, color: appColors.black1 }}
					>
						£ {totalAmount}
					</TextComponent>
				</View>
			</View>
		</Pressable>
	);
};

export const OrderDetailCard = ({
	status,
	type,
	item,
	onPress,
}: {
	status?: string;
	type?: string;
	onPress?: () => void;
	item?: any;
}) => {
	const queryClient = useQueryClient();
	const {
		isPending,
		mutate,
		error: itemError,
		data: itemData,
	} = useMutation({
		mutationFn: outOfStock,
		onSuccess: (data) => {
			// console.log(data?.data);
			queryClient.invalidateQueries("get-item" as QueryFilters);
		},
		onError: (err) => {
			handleError(err);
		},
	});

	useEffect(() => {
		// console.log(item);
	}, [item]);

	return (
		<View style={styles.cardContain}>
			<View style={styles.card}>
				<View style={styles.cardCont}>
					<Image
						source={{ uri: item.image }}
						style={{ width: 100, height: 90, borderRadius: 8 }}
					/>
					<View style={styles.text}>
						<TextComponent
							type="text14"
							sx={{
								fontFamily: font.DMSans_400Regular,
								color: appColors.grey,
							}}
						>
							{item.name}
						</TextComponent>
						<TextComponent
							type="text16"
							sx={{
								fontFamily: font.DMSans_500Medium,
								color: appColors.black1,
							}}
						>
							Quantity: 4
						</TextComponent>
						<TextComponent
							type="text14"
							sx={{
								fontFamily: font.DMSans_400Regular,
								color: appColors.black1,
							}}
						>
							£ {item?.bulkEventPrice ? item?.bulkEventPrice.price : item.price}
						</TextComponent>
					</View>
				</View>
				{type === "menu" && (
					<Entypo name="chevron-small-right" size={24} color="black" />
				)}
				{status === "on-going" && <View style={styles.checkBox}></View>}
			</View>
			{type === "menu" && (
				<View style={styles.action}>
					<CustButton
						onPress={onPress}
						type="rounded-rect"
						sx={{
							...styles.button,
							width: "25%",
							borderColor: appColors.grey1,
						}}
					>
						<TextComponent
							type="text14"
							sx={{ fontWeight: 500, color: appColors.grey }}
						>
							Edit
						</TextComponent>
					</CustButton>
					<CustButton
						onPress={() =>
							mutate({
								value: {
									outOfStock: !item?.outOfStock,
								},
								id: item._id,
							})
						}
						type="rounded-rect"
						color={item.outOfStock ? appColors.yellow : appColors.white}
						sx={{
							...styles.button,
							width: "70%",
							borderColor: appColors.yellow,
						}}
					>
						{isPending ? (
							<ActivityIndicator />
						) : (
							<TextComponent
								type="text16"
								sx={{ fontWeight: 500, color: appColors.black1 }}
							>
								Mark as out of stock
							</TextComponent>
						)}
					</CustButton>
				</View>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	item: {
		height: hp("17%"),
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 10,
		paddingVertical: 10,
		borderTopLeftRadius: 8,
		borderTopRightRadius: 8,
		borderBottomWidth: 1,
		borderBottomColor: appColors.grey1,
		backgroundColor: appColors.white1,
		marginBottom: 20,
	},
	item_left: {
		width:"80%",
		gap: 12,
		// backgroundColor: "red"
	},
	status: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: appColors.grey2,
		width: "35%",
		height: "25%",
		borderRadius: 8,
	},
	item_right: {
		justifyContent: "space-between",
		alignItems: "flex-end",
		// backgroundColor: "red"
	},
	cardContain: {
		borderBottomWidth: 1,
		borderBottomColor: appColors.grey2,
		paddingBottom: 15,
		gap: 20,
	},
	card: {
		flexDirection: "row",
		justifyContent: "space-between",

		marginTop: 10,
	},
	cardCont: {
		flexDirection: "row",
		gap: 25,
	},
	text: {
		gap: 9,
	},
	checkBox: {
		width: 20,
		height: 20,
		borderWidth: 2,
		borderRadius: 2,
		// alignItems: "center",
		justifyContent: "center",
		alignSelf: "center",
	},
	action: {
		// width:"100%",
		flexDirection: "row",
		gap: 10,
	},
	button: {
		padding: 10,
		borderRadius: 8,
		borderWidth: 1.2,
	},
});
