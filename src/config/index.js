// import core dependencies
import Config from "react-global-configuration";

import masterConfig from './common';
import devMasterConfig from './dev';

/*
* Set global environment for application
*
* vary based on the different environments 
* and can be managed from .env file
*/
const _ENV_ = 'dev';

// Setting different --config environments for use
Config.set(devMasterConfig, { freeze: false, assign: false, environment: 'dev' });
Config.set(masterConfig); // Default config

// Setting --config environment
Config.setEnvironment(`${_ENV_}`);