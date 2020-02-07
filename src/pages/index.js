/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Modal
} from 'react-native';

const App: () => React$Node = () => {
    return (
        <>
            <View style="{}">
                <Text>我是测试咯!{true ? 'JSP1111ang.co2m' : '技术胖11'}</Text>
            </View>
        </>
    );
};
const styles = StyleSheet.create({
    helloWrold: {
        color: "#fff",
        backgroundColor: "red",
    }
});

export default App;
