import {computed, observable} from 'mobx';
class DashboardStore{
    @observable sample = 'Adamim benim'; 
   
    @computed
    get getSample(){
        return this.sample;
    }
    set setSample(value){
        //if(typeof value === "string")
            this.sample = value;
    }
}
export default DashboardStore;