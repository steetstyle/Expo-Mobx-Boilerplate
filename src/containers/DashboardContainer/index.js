import * as React from 'react';
import Dashboard from '../../stories/screens/Dashboard';
import { observer, inject } from 'mobx-react';

export interface Props {}
export interface State {}

@inject('dashboardStore')
@observer
class DashboardContainer extends React.Component<Props, State> {
    render(){
        return <Dashboard dashboardStore={this.props.dashboardStore}/>;
    }
}
export default DashboardContainer;