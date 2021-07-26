import * as React from 'react';
import {
    View,
    Text
} from "react-native";

export interface Props {}
export interface State {}

class Dashboard extends React.Component<Props, State> {
    render(){
        return <View>
            <Text>
                {this.props.dashboardStore.getSample}
            </Text>
            </View>;
    }
}

export default Dashboard;