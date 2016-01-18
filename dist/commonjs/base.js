'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _desc, _value, _class;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Base = undefined;

require('source-map-support/register');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _console = require('@nod/console');

var _environment = require('@nod/environment');

var _decorateThis = require('decorate-this');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var PROTECTED = Symbol('PROTECTED');

var Base = exports.Base = (_dec = (0, _decorateThis.param)((0, _decorateThis.Optional)({})), _dec2 = (0, _decorateThis.returns)(Object), (_class = function () {
  _createClass(Base, [{
    key: 'setOptions',
    value: function setOptions() {
      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      return _extends(this[PROTECTED].options, this.defaults, options);
    }
  }, {
    key: 'options',
    get: function get() {
      return this[PROTECTED].options;
    },
    set: function set() {
      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      return this.setOptions(options);
    }
  }]);

  function Base() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, Base);

    this.defaults = {
      console: new _console.Console({}),
      config: new _environment.Environment({}).config
    };

    Object.defineProperty(this, PROTECTED, {
      enumerable: false,
      value: {
        options: {}
      }
    });

    this.options = options;
    this.options = options.config;

    this.options.console.info(this.constructor.name + ': Initialized.');
    return this;
  }

  return Base;
}(), (_applyDecoratedDescriptor(_class.prototype, 'setOptions', [_autobindDecorator2.default, _dec, _dec2], Object.getOwnPropertyDescriptor(_class.prototype, 'setOptions'), _class.prototype)), _class));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPQSxJQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7O0lBRXpCLElBQUksV0FBSixJQUFJLFdBWWQsa0JBaEJNLEtBQUssRUFnQkwsa0JBaEJnQixRQUFRLEVBZ0JmLEVBQUUsQ0FBQyxDQUFDLFVBQ25CLGtCQWpCYSxPQUFPLEVBaUJaLE1BQU0sQ0FBQztlQWJMLElBQUk7O2lDQWNVO1VBQWQsT0FBTyx5REFBRyxFQUFFOztBQUNyQixhQUFPLFNBQWMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQ3ZFOzs7d0JBVGE7QUFDWixhQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUM7S0FDaEM7d0JBU3lCO1VBQWQsT0FBTyx5REFBRyxFQUFFOztBQUN0QixhQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDakM7OztBQUVELFdBdEJXLElBQUksR0FzQlc7UUFBZCxPQUFPLHlEQUFHLEVBQUU7OzBCQXRCYixJQUFJOztTQUVmLFFBQVEsR0FBRztBQUNULGFBQU8sRUFBRyxhQVRMLE9BQU8sQ0FTVSxFQUFFLENBQUM7QUFDekIsWUFBTSxFQUFHLGlCQVRKLFdBQVcsQ0FTUyxFQUFFLENBQUMsQ0FBQyxNQUFNO0tBQ3BDOztBQWtCQyxVQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUU7QUFDckMsZ0JBQVUsRUFBRyxLQUFLO0FBQ2xCLFdBQUssRUFBUTtBQUNYLGVBQU8sRUFBRyxFQUFFO09BQ2I7S0FDRixDQUFDLENBQUM7O0FBRUgsUUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIsUUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDOztBQUU5QixRQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLG9CQUFpQixDQUFDO0FBQ3BFLFdBQU8sSUFBSSxDQUFDO0dBQ2I7O1NBbkNVLElBQUkiLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IGF1dG9iaW5kIGZyb20gJ2F1dG9iaW5kLWRlY29yYXRvcic7XG5pbXBvcnQgeyBDb25zb2xlIH0gZnJvbSAnQG5vZC9jb25zb2xlJztcbmltcG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSAnQG5vZC9lbnZpcm9ubWVudCc7XG5pbXBvcnQgeyBwYXJhbSwgcmV0dXJucywgT3B0aW9uYWwgYXMgb3B0aW9uYWwgfSBmcm9tICdkZWNvcmF0ZS10aGlzJztcblxuY29uc3QgUFJPVEVDVEVEID0gU3ltYm9sKCdQUk9URUNURUQnKTtcblxuZXhwb3J0IGNsYXNzIEJhc2Uge1xuXG4gIGRlZmF1bHRzID0ge1xuICAgIGNvbnNvbGUgOiBuZXcgQ29uc29sZSh7fSksXG4gICAgY29uZmlnIDogbmV3IEVudmlyb25tZW50KHt9KS5jb25maWdcbiAgfTtcblxuICBnZXQgb3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpc1tQUk9URUNURURdLm9wdGlvbnM7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgQHBhcmFtKG9wdGlvbmFsKHt9KSlcbiAgQHJldHVybnMoT2JqZWN0KVxuICBzZXRPcHRpb25zKG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRoaXNbUFJPVEVDVEVEXS5vcHRpb25zLCB0aGlzLmRlZmF1bHRzLCBvcHRpb25zKTtcbiAgfVxuXG4gIHNldCBvcHRpb25zKG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLnNldE9wdGlvbnMob3B0aW9ucyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgUFJPVEVDVEVELCB7XG4gICAgICBlbnVtZXJhYmxlIDogZmFsc2UsXG4gICAgICB2YWx1ZSAgICAgIDoge1xuICAgICAgICBvcHRpb25zIDoge31cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucy5jb25maWc7XG5cbiAgICB0aGlzLm9wdGlvbnMuY29uc29sZS5pbmZvKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX06IEluaXRpYWxpemVkLmApO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
