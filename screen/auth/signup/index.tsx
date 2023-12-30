import { View, Text, StyleSheet, Pressable } from "react-native";
import Container, {
	InnerWrapper,
	KeyboardView,
	ScrollContainer,
} from "../../../components/reusables/Containers.component";
import TextComponent from "../../../components/reusables/Text.component";
import InputText, { Phone_Input } from "../../../components/textInput";
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import CustButton from "../../../components/reusables/Buttons.component";
import colors from "../../../utillity/colors";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchems } from "../../../utillity/schema";
import { StackNavigationProp } from "@react-navigation/stack";
import LoadingComponent from "../../../components/reusables/Loading.component";
import { createUser } from "../../../utillity/api/mutate";
import { useMutation } from "@tanstack/react-query";
import {
	clearAuthData,
	getCachedAuthData,
	cacheAuthData,
} from "../../../utillity/storage";
import { handleError } from "../../../utillity/error";
import { useEffect, useLayoutEffect } from "react";
import ErrorCard from "../../../components/reusables/errorCard";
import Toast from "../../../components/toste";
import { TouchableOpacity } from "react-native-gesture-handler";

type ScreenANavigationProp = StackNavigationProp<any>;
type ScreenAProps = {
	navigation: ScreenANavigationProp;
};
// let signUPToken = null;
// (async () => {
// 	try {
// 		signUPToken = await getCachedAuthData("sign-up-token");
// 	} catch (err) {
// 		return (signUPToken = null);
// 	}
// })();
const SignupScreen = ({ navigation }: ScreenAProps) => {
	const {
		control,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<any>({
		resolver: yupResolver(signUpSchems),
	});

	const { isPending, mutate, error, data } = useMutation({
		mutationFn: createUser,
		onSuccess: async (data) => {
			// console.log(data?.data.data?.userToken);
			await cacheAuthData(data?.data.data?.userToken, "signup-token");
			await cacheAuthData(2, "step");
			navigation.navigate("verify");
		},
		onError: (err) => {
			console.log(JSON.stringify(handleError(err), null, 2));
			clearAuthData("user-email");
		},
	});

	const onSubmit: SubmitHandler<any> = async (data) => {
		await cacheAuthData(watch("email"), "user-email");
		mutate(data);
		// console.log(data);
	};

	useEffect(() => {
		(async () => {
			try {
				const step = await getCachedAuthData("step");
				if (step === 2) {
					navigation.navigate("verify");
				}
			} catch (err) {
				return null;
			}
		})();
	}, []);

	return (
		<Container>
			{error && <Toast error={handleError(error)?.message} />}
			<KeyboardView sx={{ height: "87%" }}>
				<InnerWrapper>
					<View style={styles.header}>
						<TextComponent
							type="text24"
							sx={{
								color: colors.black,
							}}
						>
							Create your account
						</TextComponent>
						<TextComponent type="text16" sx={{ color: colors.grey }}>
							You’re 5 minutes away from ordering your first meal🎉
						</TextComponent>
						<TextComponent
							type="text16"
							sx={{ color: colors.yellow2, textDecorationLine: "underline" }}
						>
							Or continue as guest
						</TextComponent>
					</View>
					<ScrollContainer innerStyles={{ alignItems: "center" }}>
						<View style={styles.input_contain}>
							<InputText
								control={control}
								name="fullName"
								type="text"
								placeholder="Full name *"
								errors={errors}
								label="Full name"
							/>
							<Phone_Input
								control={control}
								errors={errors}
								label="Phone number"
							/>
							<InputText
								control={control}
								name="email"
								label="Email"
								type="text"
								placeholder="example@gmail.com"
								keyboardType="email-address"
								errors={errors}
							/>
							<InputText
								control={control}
								name="language"
								label="Language"
								type="text"
								placeholder="enter your language"
								errors={errors}
							/>
						</View>
					</ScrollContainer>
				</InnerWrapper>
			</KeyboardView>
			<View style={styles.bottom}>
				<CustButton
					sx={styles.button}
					type="default"
					color="#212121"
					onPress={handleSubmit(onSubmit)}
					//  onPress={() => navigation.navigate("verify")}
				>
					<TextComponent
						type="text16"
						sx={{
							color: colors.black,
						}}
					>
						Sign me up!
					</TextComponent>
				</CustButton>

				<TouchableOpacity onPress={() => navigation.navigate("login")}>
					<TextComponent type="text14" sx={{ color: colors.black }}>
						Already have an account?{" "}
						<TextComponent type="text14" sx={{ color: "#B09000" }}>
							Log in
						</TextComponent>
					</TextComponent>
				</TouchableOpacity>
			</View>
			<LoadingComponent displayLoadingComponent={isPending} />
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
		width: "100%",
		marginTop: "5%",
		gap: 10,
	},
	input_contain: {
		width: "100%",
		marginTop: 20,
		gap: 20,
		alignItems: "center",
	},
	bottom: {
		padding: 20,
		width: wp("100%"),
		height: hp("18%"),
		backgroundColor: colors?.white,
		alignItems: "center",
		gap: 7,
		shadowOpacicty: 0.1,
		shadowRadius: 0.5,
		shadowColor: "#6C6C6C",
		shadowOffset: { height: -2, width: 0 },
	},
	button: {
		width: wp("90%"),
		borderRadius: 10,
		paddingVertical: 17,
		backgroundColor: colors.yellow,
	},
});

export default SignupScreen;
