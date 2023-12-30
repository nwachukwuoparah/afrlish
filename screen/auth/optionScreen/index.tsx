import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import Container, {
	InnerWrapper,
} from "../../../components/reusables/Containers.component";
import TextComponent from "../../../components/reusables/Text.component";
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import appColors from "../../../utill/helpers/colors";
import { optionData } from "../../../utill/helpers/dummy";
import { useMutation } from "@tanstack/react-query";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackType } from "../../../utill/helpers/type.check";
import LoadingComponent from "../../../components/reusables/Loading.component";
import AddResturant from "../../profile/addResturant";
import { font } from "../../../utill/helpers/font";

type ScreenANavigationProp = StackNavigationProp<RootStackType, "vendor">;

type ScreenAProps = {
	navigation: ScreenANavigationProp;
};

const OptionScreen = ({ navigation }: ScreenAProps) => {
	const [checked, setChecked] = useState<boolean>(false);
	const [value, setValue] = useState<string>("");

	return (
		<Container>
			<InnerWrapper>
				<View style={styles.header}>
					<TextComponent
						type="text24"
						sx={{
							marginBottom: 10,
							fontfamily: font.DMSans_700Bold,
							color: appColors.black,
						}}
					>
						What are you joining us as?
					</TextComponent>
					<TextComponent
						type="text16"
						sx={{ fontfamily: font.DMSans_400Regular }}
					>
						Let’s get you started 🎉 We need some personal info to create your
						account
					</TextComponent>
					<View style={styles.progress}>
						<View style={styles.progress_bar}></View>
					</View>
				</View>
				<View style={styles.options}>
					{optionData.map((i, index) => (
						<Pressable
							key={index}
							onPress={() => {
								setValue(i.value);
								setChecked(!checked);
							}}
						>
							{/* , { type: i.title } */}
							<View style={styles.card} key={i.value}>
								<View style={styles.radioButton}>
									{value === i.value && <View style={styles.check}></View>}
								</View>
								<View>
									<TextComponent
										type="text16"
										sx={{ marginBottom: 5, fontfamily: font.DMSans_500Medium }}
									>
										{i.title}
									</TextComponent>
									<TextComponent
										type="text14"
										sx={{ fontfamily: font.DMSans_400Regular, width: 200 }}
									>
										{i.description}
									</TextComponent>
								</View>
								<i.img />
							</View>
						</Pressable>
					))}
				</View>
			</InnerWrapper>
			<AddResturant
				type={value}
				show={checked}
				onPress={() => setChecked(!checked)}
				navigation={navigation}
			/>
		</Container>
	);
};

const styles = StyleSheet.create({
	body: {
		flex: 1,
		paddingHorizontal: 20,
		marginTop: 30,
	},
	header: {
		width: wp("90%"),
		marginTop: 25,
	},
	progress: {
		borderRadius: 50,
		marginTop: 10,
		width: wp("90%"),
		height: 8,
		backgroundColor: "#F0F0F0",
	},
	progress_bar: {
		width: wp("90%"),
		height: 8,
		borderRadius: 50,
		backgroundColor: "#FFEA8A",
	},
	options: {
		marginTop: 50,
		gap: 20,
	},
	card: {
		flexDirection: "row",
		gap: 10,
		borderWidth: 1,
		borderRadius: 10,
		paddingHorizontal: 15,
		paddingVertical: 20,
	},
	radioButton: {
		width: 20,
		height: 20,
		borderWidth: 2,
		borderRadius: 50,
		alignItems: "center",
		justifyContent: "center",
	},
	check: {
		width: 10,
		height: 10,
		borderWidth: 2,
		borderRadius: 50,
		backgroundColor: appColors.black,
	},
});

export default OptionScreen;
