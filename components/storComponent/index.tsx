import {
	Image,
	StyleSheet,
	View,
	Switch,
	TouchableOpacity,
} from "react-native";
import TextComponent from "../reusables/Text.component";
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import colors from "../../utillity/colors";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { font } from "../../utillity/font";

interface props {
	displayOutOfStockButn?: boolean;
	name: string;
	image: string;
	type: string | any;
	price: string;
	amount?: string;
	onPress?: () => void;
	rating: string; //this should be required
	status: string; //this should be required
	vendorType: string;
	isAvailable: boolean;
}

const StoreComponent = ({
	displayOutOfStockButn,
	name,
	vendorType,
	price,
	amount,
	rating,
	status,
	image,
	onPress,
	isAvailable,
}: props) => {
	return (
		<TouchableOpacity onPress={onPress} style={styles.container}>
			<Image resizeMode="cover" style={styles.img} source={{ uri: image }} />
			<View style={styles.details}>
				<View style={styles.row}>
					<TextComponent type="text12">{name}</TextComponent>
					<View
						style={{
							backgroundColor: colors.tint,
							padding: "3%",
							borderRadius: 8,
						}}
					>
						<TextComponent sx={colors.grey1} type="text12">
							{vendorType}
						</TextComponent>
					</View>
				</View>
				{price && (
					<View style={styles.row}>
						<TextComponent type="text12">{price}</TextComponent>
					</View>
				)}
				{amount && (
					<View style={styles.row}>
						<TextComponent type="text12">
							For 100 people: <TextComponent type="text20">£1000</TextComponent>
						</TextComponent>
					</View>
				)}
				<View style={styles.row}>
					<TextComponent type="text12">
						42{" "}
						<Ionicons
							name="ios-star-sharp"
							size={hp("2%")}
							color={colors.yellow}
						/>
						(129)
					</TextComponent>
					{isAvailable === true && (
						<TextComponent
							sx={{ color: colors.green, fontFamily: font.DMSans_500Medium }}
							type="text12"
						>
							Open
						</TextComponent>
					)}
				</View>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: hp("35"),
		borderRadius: 8,
		marginVertical: "5%",
		backgroundColor: colors.white,
		justifyContent: "space-between",
	},

	img: {
		width: "100%",
		height: "70%",
		borderRadius: 10,
		overflow: "hidden",
	},

	details: {
		height: "40%",
		marginTop: "1.5%",
		paddingBottom: "10%",
	},

	row: {
		width: "100%",
		flexDirection: "row",
		marginVertical: ".5%",
		alignItems: "center",
		justifyContent: "space-between",
	},
});

export default StoreComponent;
