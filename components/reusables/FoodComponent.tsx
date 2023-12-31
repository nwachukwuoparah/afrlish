import { Image, StyleSheet, View, Switch } from "react-native";
import { useContext } from "react";
import TextComponent from "./Text.component";
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import colors from "../../utillity/colors";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { font } from "../../utillity/font";
interface props {
	name: string;
	image: string;
	description: string;
	price: string;
}
const FoodComponent = ({ name, image, description, price }: props) => {
	console.log(name, image, description, price);

	return (
		<View style={styles.container}>
			<Image style={styles.image} source={{ uri: image }} />
			<View style={styles.details}>
				<View style={{ flexDirection: "row", justifyContent: "space-between" }}>
					<TextComponent type="text16" sx={{ color: colors.black1 }}>
						{name}
					</TextComponent>
					<Ionicons
						name="chevron-forward"
						size={hp("2%")}
						color={colors.black}
					/>
				</View>

				<TextComponent sx={{ color: colors.grey }} type="text14">
					{description}
				</TextComponent>
				<TextComponent type="text14" sx={{ fontFamily: font.DMSans_700Bold }}>
					{price}
				</TextComponent>
				{/* {children} */}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: hp("12%"),
		flexDirection: "row",
		borderBottomWidth: 1,
		paddingBottom: "2.5%",
		justifyContent: "space-around",
		borderBottomColor: colors.grey3,
	},

	image: {
		width: "30%",
		height: "100%",
		borderRadius: 8,
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
