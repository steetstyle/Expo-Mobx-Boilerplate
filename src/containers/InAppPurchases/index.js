import * as React from 'react';
import { observer, inject } from 'mobx-react';
import InAppPurchases from '../../stories/screens/InAppPurchases';

export interface Props {}
export interface State {}

@inject('dashboardStore')
@observer
class InAppPurchasesContainer extends React.Component<Props, State> {
    render(){
        return <InAppPurchases dashboardStore={this.props.dashboardStore}/>;
    }
}
export default InAppPurchasesContainer;