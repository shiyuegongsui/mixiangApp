import { Dimensions, PixelRatio } from 'react-native'

const designWidth = 750; //设计稿的宽度
const deviceWidth = Dimensions.get('window').width; // 设备屏幕宽度


export function rem(value) {
    return (value * deviceWidth) / 750
}

