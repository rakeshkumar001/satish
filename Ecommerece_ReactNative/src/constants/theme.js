import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const colors = {
    primary: '#f08024',
    secondary: '#373639',
    dark: '#0f0f0f',
    light:'#fff6ee',
    cardBackground:'#293144'
};

export const shadow = {
    light: {
        shadowColor: colors.black,
        shadowRadius: 4,
        shadowOpacity: 0.1,
        shadowOffset: {
            width: 0,
            height: 2,
        },
    },
    dark: {
        shadowColor: colors.black,
        shadowRadius: 4,
        shadowOpacity: 0.3,
        shadowOffset: {
            width: 0,
            height: 2,
        },
    },
};

export const sizes = {
    width,
    height,
    title: 32,
    h2: 24,
    h3: 18,
    body: 14,
    radius: 16,
};

export const spacing = {
    s: 8,
    m: 18,
    l: 24,
    xl: 40,
};