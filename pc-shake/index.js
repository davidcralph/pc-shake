const Plugin  = require('powercord/Plugin');
const webpack = require('powercord/webpack');

module.exports = class Shake extends Plugin {
    start() {
        powercord
            .pluginManager
            .get('pc-commands')
            .register(
                'shake',
                'I don\'t know what this is',
                'shake <number>',
                async (number) => {
                    return webpack.getModule(['ComponentDispatch']).ComponentDispatch.dispatch(webpack.constants.ComponentActions.SHAKE_APP, {
                        duration: 10000,
                        intensity: number
                    });
                }
            )
    }
    unload() {
        powercord
            .pluginManager
            .get('pc-commands')
            .unregister('shake');
    }
};
