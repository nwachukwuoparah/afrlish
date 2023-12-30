import { View, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import Container, {
	InnerWrapper,
} from "../../components/reusables/Containers.component";
import { useContext, useState, useEffect, useRef } from "react";
import LoadingComponent from "../../components/reusables/Loading.component";
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import colors from "../../utillity/colors";
import {
	GooglePlacesAutocomplete,
	GooglePlacesAutocompleteRef,
} from "react-native-google-places-autocomplete";
import TextComponent from "../../components/reusables/Text.component";
import InputText from "../../components/textInput";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";
import StoreComponent from "../../components/storComponent";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface props {
	navigation: StackNavigationProp<any, any>;
}

const HomeScreen = ({ navigation }: props) => {
	const {
		control,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm<any>({
		// resolver: yupResolver(loginSchems),
	});

	return (
		<Container>
			<InnerWrapper>
				<View style={styles.header}>
					<View style={styles.headerRow}>
						<View>
							<TextComponent sx={colors.grey3} type="text12">
								Delivering to
							</TextComponent>
							<TextComponent type="text12">
								<Ionicons
									name="ios-location-outline"
									size={hp("2.5%")}
									color={colors.black}
								/>
								No 3 Guru Maraji street, Victoria....
							</TextComponent>
						</View>
						<TouchableOpacity>
							<Ionicons
								name="notifications-outline"
								size={hp("3%")}
								color={colors.black}
							/>
						</TouchableOpacity>
					</View>
					<View style={styles.headerRow}>
						<InputText
							sx={{
								wrapper: {
									width: "91%",
									borderColor: colors.yellow,
									paddingHorizontal: 10,
									borderRadius: 15,
								},
								textInput: { width: "90%" },
							}}
							type="text"
							placeholder="Search for restaurants, meals"
							name=""
							control={control}
							errors={errors}
						>
							<Ionicons
								name="search-sharp"
								size={hp("2.5%")}
								color={colors.black1}
							/>
						</InputText>
						<TouchableOpacity>
							<MaterialCommunityIcons
								name="filter-variant"
								size={hp("3%")}
								color={colors.black}
							/>
						</TouchableOpacity>
					</View>
				</View>
				<FlatList
					style={{
						width: "100%",
						height: hp("65%"),
					}}
					showsVerticalScrollIndicator={false}
					renderItem={({ item, index }) => (
						<StoreComponent
							onPress={() => navigation.navigate("restaurant")}
							name="Mama Chops"
							type="20-25min"
							price="Prices from £20"
							status="open"
							rating="4.2"
							image="https://www.denverpost.com/wp-content/uploads/2021/12/Native-Foods-jalapeno-popper-burger-scaled-1.jpeg?w=1079"
						/>
					)}
					data={[1, 2, 3, 4, 5, 6]}
					keyExtractor={(index) => index.toString()}
				/>
			</InnerWrapper>
		</Container>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	header: {
		width: "100%",
		height: hp("15%"),
		justifyContent: "flex-end",
	},

	headerRow: {
		width: "100%",
		alignItems: "center",
		flexDirection: "row",
		marginVertical: "3%",
		justifyContent: "space-between",
	},

	logo: {
		borderRadius: 100,
		alignItems: "center",
		width: hp("15%"),
		height: hp("15%"),
		marginTop: "7%",
		marginBottom: "5%",
		backgroundColor: colors.yellow,
		justifyContent: "center",
	},
});
