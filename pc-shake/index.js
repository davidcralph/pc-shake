const Plugin                   = require('powercord/Plugin');
const { getModule, constants } = require('powercord/webpack');

module.exports = class Shake extends Plugin {
    start() {
        powercord
            .pluginManager
            .get('pc-commands')
            .register(
                'shake',
                'I don\'t know what this is',
                'shake <number> [duration]',
                async (number, duration) => {
                    return getModule(['ComponentDispatch']).ComponentDispatch.dispatch(constants.ComponentActions.SHAKE_APP, {
                        duration: duration? duration: 10000,
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
