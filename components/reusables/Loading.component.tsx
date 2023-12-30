import { ActivityIndicator, Modal, StyleSheet, View } from "react-native";
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from "react-native-responsive-screen";
// import Loading from "../../assets/Loader.svg";
import { SafeAreaView } from "react-native-safe-area-context";

const LoadingComponent = ({
	displayLoadingComponent,
}: {
	displayLoadingComponent: boolean;
}) => {
	const styles = StyleSheet.create({
		container: {
			position: "absolute",
			alignItems: "center",
			justifyContent: "center",
			width: wp("100%"),
			height: hp("100%"),
			backgroundColor: "rgba(0, 0, 0, 0.3)",
			shadowOpacity: 0.4,
			display: "flex",
		},
	});
	return (
		<Modal transparent visible={displayLoadingComponent} >
			<View style={styles.container}>
				{/* <Loading /> */}
			</View>
			{/* <ActivityIndicator size="large" shouldRasterizeIOS /> */}
		</Modal>
	);
};

export default LoadingComponent;
