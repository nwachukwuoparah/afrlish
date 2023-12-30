import { Image, StyleSheet, View, Switch } from "react-native";
import { useContext } from "react";
import TextComponent from "./Text.component";
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import colors from "../../utillity/colors";
import { Entypo, Ionicons } from "@expo/vector-icons";
interface props {
	children?: any;
	foodName: string;
	foodImage: string;
	price: string;
	details: string;
}
const FoodComponent = ({
	children,
	foodName,
	price,
	foodImage,
	details,
}: props) => {

	return (
		<View style={styles.container}>
			<Image style={styles.image} source={{ uri: foodImage }} />
			<View style={styles.details}>
				<TextComponent type="text12">{foodName}</TextComponent>
				<TextComponent
					sx={{ marginVertical: "1%", color: colors.grey3 }}
					type="text12"
				>
					{details}
				</TextComponent>
				<TextComponent type="text20">{price}</TextComponent>
				{children}
			</View>
			<Ionicons name="chevron-forward" size={hp("2%")} color={colors.black} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: "90%",
		alignSelf: "center",
		flexDirection: "row",
		borderBottomWidth: 2,
		paddingVertical: "2.5%",
		marginVertical: "2.5%",
		justifyContent: "space-around",
		borderBottomColor: colors.grey,
	},

	image: {
		width: hp("15%"),
		height: hp("13%"),
		borderRadius: 15,
		marginRight: "3%",
		alignSelf: "center",
		overflow: "hidden",
	},

	details: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "space-around",
	},
});

export default FoodComponent;
