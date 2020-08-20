import 'jointjs/dist/joint.core.css';

import { dia } from 'jointjs/src/core.mjs';
import * as standard from 'jointjs/src/shapes/standard.mjs';

let joint : {dia: any, shapes?: any} = { dia };
joint.shapes = { standard };

export {
	joint
}

export default {
	install: function (Vue : any) {
		Object.defineProperty(Vue.prototype, '$joint', { value: joint });
	}
};
