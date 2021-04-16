import { atom } from 'recoil';
export type ScheduleState = {
    
}

const initialState : ScheduleState = {

}

const scheduleState = atom({
    key:'scheduleState',
    default:initialState
})