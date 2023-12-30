import { StyleSheet, View } from "react-native"
import TextComponent from "./Text.component"
import appColors from "../../utill/helpers/colors"


const OrderNote = (props: any) => {


  return (
    <View style={styles.note}>
      <View style={styles.note_top}>
        <TextComponent type="text16" sx={{ color: appColors.black1, fontWeight: 500 }}>Notes</TextComponent>
        <View style={{ gap: 1 }}>
          <TextComponent type="text14" sx={{ color: appColors.black1, fontWeight: 400 }}>Morning delivery should be around 9:00am</TextComponent>
          <TextComponent type="text14" sx={{ color: appColors.black1, fontWeight: 400 }}>Afternoon:2:00pm </TextComponent>
          <TextComponent type="text14" sx={{ color: appColors.black1, fontWeight: 400 }}>Evening: 5:00pm</TextComponent>
        </View>
      </View>
      <View style={styles.note_bottom}>
        <TextComponent type="text16" sx={{ color: appColors.black1, fontWeight: 500 }}>Delivering to:</TextComponent>
        <TextComponent type="text14" sx={{ color: appColors.black1, fontWeight: 400 }}>No 3 Guru Maraji street, UK</TextComponent>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  note: {
    marginTop: 23
  },
  note_top: {
    backgroundColor: appColors.grey2,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingTop: 15,
    paddingBottom: 20,
    gap: 5
  },
  note_bottom: {
    paddingHorizontal: 12,
    padding: 25,
    gap: 5
  }
})

export default OrderNote