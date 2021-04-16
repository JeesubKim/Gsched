import { useMemo } from 'react';
export type ClockProps = {

}
function Clock({}:ClockProps){

    const today = useMemo( () => new Date(), []);

    return <div>Clock</div>
}

export default Clock;