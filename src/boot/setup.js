import * as Expo from 'expo';
import * as React from 'react';
import { Provider } from 'mobx-react';
import * as Font from 'expo-font';
import {View} from 'react-native'
import App from '../App';

export interface Props {}

export interface State {
	isReady: boolean
}

export default function Setup(stores){
    return class Setup extends React.Component<Props, State> {
            constructor(){
                super();
                this.state = {
                    isReady: false
                };
            }

            componentDidMount(){
                this.loadFonts();
            }

            async loadFonts() {
                this.setState({ isReady: true });
            }

            render() {
                if (!this.state.isReady) {
                    return <View />
                }
                return (
                        <Provider {...stores}>
                            <App />
                        </Provider>
                );
            }
        }
}