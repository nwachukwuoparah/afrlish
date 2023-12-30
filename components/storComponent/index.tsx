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
}

const StoreComponent = ({
	displayOutOfStockButn,
	name,
	type,
	price,
	amount,
	rating,
	status,
	image,
	onPress,
}: props) => {
	return (
		<TouchableOpacity onPress={onPress} style={styles.container}>
			<Image resizeMode="cover" style={styles.img} source={{ uri: image }} />
			<View style={styles.details}>
				<View style={styles.row}>
					<TextComponent type="text12">{name}</TextComponent>
					<View
						style={{
							backgroundColor: colors.yellow1,
							padding: "2.5%",
							borderRadius: 10,
						}}
					>
						<TextComponent sx={colors.grey3} type="text12">
							{type}
						</TextComponent>
					</View>
				</View>
				<View style={styles.row}>
					<TextComponent type="text12">{price}</TextComponent>
				</View>
				<View style={styles.row}>
					{amount && (
						<TextComponent type="text12">
							For 100 people: <TextComponent type="text20">£1000</TextComponent>
						</TextComponent>
					)}
				</View>
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
					<TextComponent sx={colors.green} type="text12">
						{status}
					</TextComponent>
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
