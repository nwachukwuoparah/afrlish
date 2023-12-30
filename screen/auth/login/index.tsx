import { View, Text, StyleSheet, Pressable } from "react-native";
import Container, {
	InnerWrapper,
	KeyboardView,
	ScrollContainer,
} from "../../../components/reusables/Containers.component";
import TextComponent from "../../../components/reusables/Text.component";
import InputText from "../../../components/textInput";
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import CustButton from "../../../components/reusables/Buttons.component";
import colors from "../../../utillity/colors";
import { useForm, SubmitHandler } from "react-hook-form";
import { LoginInType } from "../../../utillity/type.check";
import { yupResolver } from "@hookform/resolvers/yup";
import { StackNavigationProp } from "@react-navigation/stack";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../../../utillity/api/mutate";
import { useEffect } from "react";
import { loginSchems } from "../../../utillity/schema";
import LoadingComponent from "../../../components/reusables/Loading.component";
import { handleError } from "../../../utillity/error";
import { CommonActions } from "@react-navigation/native";
import { cacheAuthData, clearAuthData } from "../../../utillity/storage";
import ErrorCard from "../../../components/reusables/errorCard";
import Toast from "../../../components/toste";
import { font } from "../../../utillity/font";
type ScreenANavigationProp = StackNavigationProp<any>;

type ScreenAProps = {
	navigation: ScreenANavigationProp;
};

const Login = ({ navigation }: ScreenAProps) => {
	const {
		control,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm<any>({
		resolver: yupResolver(loginSchems),
	});

	const { isPending, mutate, error } = useMutation({
		mutationFn: loginUser,
		onSuccess: async (data) => {
			// console.log(data?.data);
			navigation.navigate("loginVerify");
		},
		onError: (err) => {
			handleError(handleError(err));
			clearAuthData("login-email");
		},
	});

	const onSubmit: SubmitHandler<LoginInType> = (data) => {
		cacheAuthData(watch("email"), "login-email");
		mutate(data);
		// console.log(data);
	};

	// useEffect(() => {
	// 	if (error) console.log(handleError(error)?.errors.msg);
	// }, [isPending, error]);

	return (
		<Container>
			{error && <Toast error={handleError(error)?.errors.msg} />}
			<InnerWrapper sx={{ height: "87%", width: "90%" }}>
				<ScrollContainer>
					<View style={styles.header}>
						<CustButton
							type="back"
							onPress={() => {
								navigation.navigate("verify");
							}}
						/>
						<TextComponent
							type="text24"
							sx={{
								color: colors.black,
							}}
						>
							Login
						</TextComponent>
						<TextComponent type="text16" sx={{ color: colors.grey }}>
							We’re excited to have you back🎉
						</TextComponent>
						<TextComponent
							type="text16"
							sx={{ color: colors.yellow2, textDecorationLine: "underline" }}
						>
							Or continue as guest
						</TextComponent>
					</View>
					<View style={styles.input_contain}>
						<InputText
							control={control}
							name="email"
							label="Email"
							type="text"
							placeholder="example@gmail.com"
							keyboardType="email-address"
							errors={errors}
						/>
					</View>
				</ScrollContainer>
			</InnerWrapper>
			<View style={styles.bottom}>
				<CustButton
					sx={styles.button}
					type="default"
					color={colors.black1}
					onPress={
						handleSubmit(onSubmit)
						// () => navigation.navigate("loginVerify")
					}
				>
					<TextComponent type="text16" sx={{ color: colors.black }}>
						Log me in!
					</TextComponent>
				</CustButton>
				<Pressable onPress={() => navigation.navigate("signUp")}>
					<TextComponent type="text14" sx={{ color: colors.black }}>
						Don't have an account?{" "}
						<TextComponent type="text14" sx={{ color: "#B09000" }}>
							Sign up
						</TextComponent>
					</TextComponent>
				</Pressable>
			</View>
			<LoadingComponent displayLoadingComponent={isPending} />
		</Container>
	);
};

const styles = StyleSheet.create({
	body: {
		height: hp("73%"),
		flex: 1,
		paddingHorizontal: 20,
		marginTop: 20,
	},
	header: {
		width: wp("90%"),
		marginTop: "5%",
		gap: 10,
	},
	input_contain: {
		width: "100%",
		marginTop: 40,
		gap: 30,
		alignItems: "center",
	},
	bottom: {
		padding: 20,
		width: wp("100%"),
		height: hp("20%"),
		backgroundColor: colors.white,
		alignItems: "center",
		gap: 7,
		shadowOpacity: 0.1,
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

export default Login;
