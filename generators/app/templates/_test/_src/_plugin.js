// eslint-disable-next-line no-unused-vars
import <%= className %> from '../../src/<%= pluginName %>.js'
import loadPlayer from 'playkit-js'
import * as TestUtils from 'playkit-js/test/src/utils/test-utils'

const targetId = 'player-placeholder_<%= pluginName %>.spec';

describe('<%= className %>Plugin', function () {
  let player;
  let config = {
    sources: {
      progressive: [
        {
          mimetype: "video/mp4",
          url: "http://www.html5videoplayer.net/videos/toystory.mp4"
        }
      ]
    },
    plugins: {
      "<%= pluginName %>": {}
    }
  };

  function createPlayerPlaceholder(targetId) {
    TestUtils.createElement('DIV', targetId);
    let el = document.getElementById(targetId);
    el.style.height = '360px';
    el.style.width = '640px';
  }

  function setupPlayer(config) {
    player = loadPlayer(config);
    let el = document.getElementById(targetId);
    el.appendChild(player.getView());
  }

  before(function () {
    createPlayerPlaceholder(targetId);
  });

  afterEach(function () {
    player.destroy();
    player = null;
    TestUtils.removeVideoElementsFromTestPage();
  });

  after(function () {
    TestUtils.removeElement(targetId);
  });

  it('should play mp4 stream with <%= pluginName %> plugin', (done) => {
    setupPlayer(config);
    player.addEventListener(player.Event.PLAYING, () => {
      done();
    });
    player.play();
  });
});
