import { scheduleOnce } from '@ember/runloop';
import { helper } from '@ember/component/helper';


export function eventHelper([target, eventName]) {
  // slice params to avoid mutating the provided params
  let [arrgs] = arguments;
  return function() {
    scheduleOnce('afterRender', () => {
      let newArgs = arrgs.slice(2);
      target.trigger(eventName, ...newArgs);
    });
  };
}

export default helper(eventHelper);
