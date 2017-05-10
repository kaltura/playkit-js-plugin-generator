//eslint-disable-next-line no-unused-vars
import <%= pluginName %>-plugin from '../../src/<%= pluginName %>.js'
import playkit from 'playkit-js'

describe('<%= className %>Plugin', function () {
  this.timeout(4000);

  it('should play mp4 stream while reporting youbora analytics', (done) => {
    let player = playkit({
      'sources': [{
        'mimetype': 'video/mp4',
        'url': 'http://deslasexta.antena3.com/mp_series1/2012/09/10/00001.mp4'
      }],
      'plugins': {
        '<%= pluginName %>': {}
      }
    });
    let video = document.getElementsByTagName("video")[0];
    video.onplaying = function () {
      player.destroy();
      done();
    };
    player.load();
    player.play();
  });
});
