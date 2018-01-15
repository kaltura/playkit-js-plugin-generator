// @flow
import {registerPlugin} from 'playkit-js'
import <%= className %> from './<%= pluginName %>'

declare var __VERSION__: string;
declare var __NAME__: string;

export default <%= className %>;
export {__VERSION__ as VERSION, __NAME__ as NAME};

const pluginName: string = "<%= pluginName %>";

registerPlugin(pluginName, <%= className %>);
