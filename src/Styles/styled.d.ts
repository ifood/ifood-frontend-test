import 'styled-components';

declare module 'styled-components' {

    export interface DefaultTheme {
        title: string;

        colors: {
            first: string;
            second: string;
            third: string;

            white: string;
            black: string;
            gray: string;

            on: string;
            off: string;
        },
    }
}

