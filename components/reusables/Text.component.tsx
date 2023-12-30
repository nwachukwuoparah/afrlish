import { StyleSheet, Text } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { propType } from "../../utillity/type.check";
import { font } from "../../utillity/font";
const TextComponent = ({ type, children, sx }: propType) => {
	1;
	const styles = StyleSheet.create({
		text24: {
			fontSize: hp("3%"),
			fontFamily: font.DMSans_700Bold,
		},

		text20: {
			fontSize: hp("2.2%"),
			fontFamily: font.DMSans_500Medium,
		},

		text16: {
			fontSize: hp("1.8%"),
			fontFamily: font.DMSans_500Medium,
		},

		text14: {
			fontSize: hp("1.5%"),
			fontFamily: font.DMSans_400Regular,
		},

		text12: {
			fontSize: hp("1.4%"),
			fontFamily: font.DMSans_400Regular,
		},
	});

	switch (type) {
		case "text24":
			return <Text style={{ ...styles.text24, ...sx }}>{children}</Text>;
		case "text20":
			return <Text style={{ ...styles.text20, ...sx }}>{children}</Text>;
		case "text16":
			return <Text style={{ ...styles.text16, ...sx }}>{children}</Text>;
		case "text14":
			return <Text style={{ ...styles.text14, ...sx }}>{children}</Text>;
		case "text12":
			return <Text style={{ ...styles.text12, ...sx }}>{children}</Text>;
		default:
			return <></>;
	}
};
export default TextComponent;
