import {
  useNavigation,
} from '@react-navigation/native';
import { Button, Text, View } from "react-native";

const WelcomeScreen = () => {

    const navigation = useNavigation();

    const handleClickGoHome = () => {
        setTimeout(() => {
            navigation.navigate("Home" as never)
        }, 10000);
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>
                Nguyễn Kim Hồng - 21110829
            </Text>
            <Button title="Go to Home" onPress={handleClickGoHome} />
        </View>
    );
}

export default WelcomeScreen;