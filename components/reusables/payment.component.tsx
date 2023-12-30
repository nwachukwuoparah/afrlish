import { Pressable, StyleSheet, View } from "react-native";
import TextComponent from "./Text.component";
import appColors from "../../utill/helpers/colors";
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { AntDesign } from "@expo/vector-icons";
import { Delete } from "../../assets";
import PaymentEdit from "../../assets/paymentEdit.svg";
import { font } from "../../utill/helpers/font";

export const PaymentInfoCard = ({ onPress, navigation, value }: any) => {
	return (
		<View style={styles.profile}>
			<View style={{ gap: 10 }}>
				<TextComponent
					type="text16"
					sx={{ fontFamily: font.DMSans_500Medium, color: appColors.black1 }}
				>
					{value.bank}
				</TextComponent>
				<TextComponent
					type="text14"
					sx={{ fontFamily: font.DMSans_400Regular, color: appColors.grey }}
				>
					{value.name}
				</TextComponent>
			</View>
			<View style={{ flexDirection: "row", gap: 15 }}>
				<Pressable onPress={() => navigation.navigate("payment-info", value)}>
					<PaymentEdit />
				</Pressable>
				<Pressable onPress={onPress}>
					<Delete />
				</Pressable>
			</View>
		</View>
	);
};

const PaymentCard = ({ onPress }: any) => {
	return (
		<Pressable onPress={onPress}>
			<View style={styles.item}>
				<View style={styles.item_left}>
					<TextComponent
						type="text14"
						sx={{ fontFamily: font.DMSans_400Regular, color: appColors.grey }}
					>
						Order #012
					</TextComponent>
					<TextComponent
						type="text16"
						sx={{ fontFamily: font.DMSans_400Regular, color: appColors.grey }}
					>
						£7
					</TextComponent>
				</View>

				<View style={styles.item_right}>
					<TextComponent
						type="text14"
						sx={{  fontFamily: font.DMSans_400Regular, color: appColors.grey }}
					>
						09.59pm
					</TextComponent>
					<TextComponent
						type="text14"
						sx={{  fontFamily: font.DMSans_400Regular, color: appColors.grey }}
					>
						25/09/2023
					</TextComponent>
				</View>
			</View>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	profile: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		borderBottomWidth: 1,
		borderColor: appColors.grey1,
		padding: 17,
		backgroundColor: appColors.white1,
		marginBottom: 10,
		marginTop: 40,
		borderTopRightRadius: 8,
		borderTopLeftRadius: 8,
	},
	item: {
		height: hp("10%"),
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 10,
		borderTopLeftRadius: 8,
		borderTopRightRadius: 8,
		borderBottomWidth: 1,
		borderBottomColor: appColors.grey1,
		backgroundColor: appColors.white1,
		marginBottom: 7.5,
		marginTop: 7.5,
	},
	item_left: {
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
		alignItems: "flex-end",
		gap: 20,
		// backgroundColor: "red"
	},
});

export default PaymentCard;
