import DashboardStore from "../stores/ViewStores/DashboardStore";


export default function(){
    const dashboardStore = new DashboardStore();

    return {
        dashboardStore
    };
}