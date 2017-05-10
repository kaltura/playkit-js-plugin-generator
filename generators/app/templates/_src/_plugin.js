import {BasePlugin, registerPlugin} from 'playkit-js'

const pluginName = "<%= pluginName %>";

/**
 * Your class description.
 * @classdesc
 */
class <%= className %> extends BasePlugin {
  /**
   * TODO: Override and define your default configuration for the plugin.
   * @static
   */
  static defaultConfig: Object = {};

  /**
   * TODO: Define under what conditions the plugin is valid.
   * @static
   * @public
   * @returns {boolean} - Whether the plugin is valid.
   */
  static isValid(): boolean {
    // Write logic
  }

  /**
   * @constructor
   * @param {string} name - The plugin name.
   * @param {Player} player - The player reference.
   * @param {Object} config - The plugin configuration.
   */
  constructor(name: string, player: Player, config: Object) {
    super(name, player, config);
    /**
     Now you have access to the BasePlugin members:
     1. config: The runtime configuration of the plugin.
     2. name: The name of the plugin.
     3. logger: The logger of the plugin.
     4. player: Reference to the actual player.
     5. eventManager: The event manager of the plugin.
    */
  }

  /**
   * TODO: Define the destroy logic of your plugin.
   * @public
   * @return {void}
   */
  destroy(): void {
    // Write logic
  }
}

/**
 * Register the plugin in the playkit-js plugin framework.
 */
registerPlugin(pluginName, <%= className %>);
