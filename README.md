# TypescriptSettings [![npm version](https://badge.fury.io/js/typescriptSettings.svg)](https://badge.fury.io/js/typescriptSettings) [![GPL Licence](https://badges.frapsoft.com/os/gpl/gpl.svg?v=103)](https://opensource.org/licenses/GPL-3.0/)

TypescriptSettings is a super simple library with no dependencies for reading json files 
to use in a library that will be published to npm or the like. 
Written in typescript for easy use and tested with mocha for confidence.

## Getting Started

To include in your project, simply npm install
```
npm install typescriptSettings
``` 

then all the user needs to do in their project using your 
library is create a file called `settings.json`

```
{
    "libraryName" : {
        "settingField" : "settingValue"
    }
}
```

### Code Example

The tests that need to be written and included will be something like: 
```
import Settings from "typescriptSettings";

console.log(`Setting: ${Settings.getSettings().libraryName.settingField}`);
```

## Contribution Guide

Just fork and open a pull request and we will go from there. 
If there are a lot of requests I will make a more robust contributing guide.

## Authors

* [**Scott Lavigne**](https://www.linkedin.com/in/scottlavigne/) - *Initial work* - [Oberd](https://oberd.com/)

## License

This project is licensed under the GNU GPLv3 License - see 
[gnu's site](https://www.gnu.org/licenses/gpl-3.0.en.html) for details