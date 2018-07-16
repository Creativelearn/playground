/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _jsreportStudio = __webpack_require__(2);
	
	var _jsreportStudio2 = _interopRequireDefault(_jsreportStudio);
	
	var _Startup = __webpack_require__(3);
	
	var _Startup2 = _interopRequireDefault(_Startup);
	
	var _ToolbarSaveForkButton = __webpack_require__(23);
	
	var _ToolbarSaveForkButton2 = _interopRequireDefault(_ToolbarSaveForkButton);
	
	var _LogoutButton = __webpack_require__(24);
	
	var _LogoutButton2 = _interopRequireDefault(_LogoutButton);
	
	var _LoginModal = __webpack_require__(25);
	
	var _LoginModal2 = _interopRequireDefault(_LoginModal);
	
	var _SaveModal = __webpack_require__(26);
	
	var _SaveModal2 = _interopRequireDefault(_SaveModal);
	
	var _ShareModal = __webpack_require__(27);
	
	var _ShareModal2 = _interopRequireDefault(_ShareModal);
	
	var _RenameModal = __webpack_require__(28);
	
	var _RenameModal2 = _interopRequireDefault(_RenameModal);
	
	var _playground = __webpack_require__(29);
	
	var _playground2 = _interopRequireDefault(_playground);
	
	var _UserEditor = __webpack_require__(30);
	
	var _UserEditor2 = _interopRequireDefault(_UserEditor);
	
	var _utils = __webpack_require__(31);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	_jsreportStudio2.default.playground = (0, _playground2.default)();
	
	_jsreportStudio2.default.locationResolver = function () {
	  if (_jsreportStudio2.default.playground.current.__isInitial) {
	    return '/';
	  }
	
	  return _jsreportStudio2.default.playground.current.user != null ? '/w/' + _jsreportStudio2.default.playground.current.user.username + '/' + _jsreportStudio2.default.playground.current.shortid : '/w/anon/' + _jsreportStudio2.default.playground.current.shortid;
	};
	
	_jsreportStudio2.default.toolbarVisibilityResolver = function (text) {
	  return text === 'Run' || text === 'Download' || text === 'Run to new tab' || text === 'Reformat' || text === 'settings';
	};
	
	(0, _utils.removeFacebookQuery)();
	var isEmbed = (0, _utils.getQueryParameter)('embed') != null;
	
	_jsreportStudio2.default.shouldOpenStartupPage = false;
	_jsreportStudio2.default.addEditorComponent('Help', _Startup2.default);
	_jsreportStudio2.default.addEditorComponent('playgroundUser', _UserEditor2.default);
	
	_jsreportStudio2.default.initializeListeners.push(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
	  return regeneratorRuntime.wrap(function _callee$(_context) {
	    while (1) {
	      switch (_context.prev = _context.next) {
	        case 0:
	          _context.next = 2;
	          return _jsreportStudio2.default.playground.init();
	
	        case 2:
	
	          if (_jsreportStudio2.default.playground.user) {
	            _jsreportStudio2.default.addToolbarComponent(function () {
	              return _react2.default.createElement(
	                'div',
	                { className: 'toolbar-button' },
	                _react2.default.createElement(
	                  'span',
	                  null,
	                  _react2.default.createElement('i', {
	                    className: 'fa fa-user' }),
	                  ' ',
	                  _jsreportStudio2.default.playground.user.fullName
	                )
	              );
	            }, 'settingsBottom');
	            _jsreportStudio2.default.addToolbarComponent(_LogoutButton2.default, 'settingsBottom');
	          } else {
	            _jsreportStudio2.default.addToolbarComponent(function () {
	              return _react2.default.createElement(
	                'div',
	                { className: 'toolbar-button', onClick: function onClick() {
	                    return _jsreportStudio2.default.openModal(_LoginModal2.default);
	                  } },
	                _react2.default.createElement(
	                  'span',
	                  null,
	                  _react2.default.createElement('i', {
	                    className: 'fa fa-sign-in' }),
	                  ' Login'
	                )
	              );
	            }, 'settingsBottom');
	          }
	
	        case 3:
	        case 'end':
	          return _context.stop();
	      }
	    }
	  }, _callee, undefined);
	})));
	
	function save() {
	  if (_jsreportStudio2.default.playground.user || !_jsreportStudio2.default.playground.current.__isInitial && _jsreportStudio2.default.playground.current.canEdit) {
	    return _jsreportStudio2.default.playground.save();
	  }
	
	  _jsreportStudio2.default.openModal(_SaveModal2.default);
	}
	
	_jsreportStudio2.default.readyListeners.push(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
	  var entities;
	  return regeneratorRuntime.wrap(function _callee2$(_context2) {
	    while (1) {
	      switch (_context2.prev = _context2.next) {
	        case 0:
	          if (!isEmbed) {
	            _jsreportStudio2.default.addToolbarComponent(function (props) {
	              return _react2.default.createElement(_ToolbarSaveForkButton2.default, {
	                canEdit: _jsreportStudio2.default.playground.current.__isInitial ? true : _jsreportStudio2.default.playground.current.canEdit,
	                save: save
	              });
	            });
	
	            if (_jsreportStudio2.default.playground.user) {
	              _jsreportStudio2.default.addToolbarComponent(function (props) {
	                return _react2.default.createElement(
	                  'div',
	                  { className: 'toolbar-button ' + (_jsreportStudio2.default.playground.current.name == null ? 'disabled' : ''),
	                    onClick: function onClick() {
	                      return _jsreportStudio2.default.playground.like();
	                    } },
	                  _react2.default.createElement('i', { className: 'fa fa-heart', title: 'Like workspace', style: {
	                      color: _jsreportStudio2.default.playground.current.hasLike ? 'red' : undefined
	                    } })
	                );
	              });
	            }
	          }
	
	          _jsreportStudio2.default.addToolbarComponent(function (props) {
	            return _react2.default.createElement(
	              'div',
	              { style: { backgroundColor: '#E67E22', float: 'right' },
	                className: 'toolbar-button', onClick: function onClick() {
	                  if (!isEmbed) {
	                    _jsreportStudio2.default.openModal(_RenameModal2.default);
	                  }
	                } },
	              _react2.default.createElement('i', { className: 'fa fa-' + (!isEmbed ? 'pencil' : 'flag') }),
	              _react2.default.createElement(
	                'h1',
	                { style: { display: 'inline', fontSize: '1rem', color: '#FFFFFF' } },
	                _jsreportStudio2.default.playground.current.name ? (0, _utils.trim)(_jsreportStudio2.default.playground.current.name) : 'Untitled ...'
	              )
	            );
	          }, 'right');
	
	          if (!isEmbed) {
	            _jsreportStudio2.default.addToolbarComponent(function (props) {
	              return _react2.default.createElement(
	                'div',
	                { className: 'toolbar-button', style: { backgroundColor: '#2ECC71' },
	                  onClick: function onClick() {
	                    return _jsreportStudio2.default.openTab({ key: 'Help', editorComponentKey: 'Help', title: 'Home' });
	                  } },
	                _react2.default.createElement('i', { className: 'fa fa-home' }),
	                'Home'
	              );
	            }, 'right');
	
	            if (_jsreportStudio2.default.playground.user) {
	              _jsreportStudio2.default.addToolbarComponent(function (props) {
	                return _react2.default.createElement(
	                  'div',
	                  { className: 'toolbar-button' },
	                  _react2.default.createElement('i', { className: 'fa fa-user' }),
	                  _jsreportStudio2.default.playground.user.fullName
	                );
	              }, 'right');
	            }
	
	            _jsreportStudio2.default.addToolbarComponent(function (props) {
	              return _react2.default.createElement(
	                'div',
	                {
	                  className: 'toolbar-button ' + (_jsreportStudio2.default.playground.current.name == null ? 'disabled' : ''),
	                  onClick: function onClick() {
	                    if (_jsreportStudio2.default.playground.current.name) {
	                      _jsreportStudio2.default.openModal(_ShareModal2.default);
	                    }
	                  } },
	                _react2.default.createElement('i', { className: 'fa fa-share' }),
	                'Share'
	              );
	            }, 'right');
	          } else {
	            _jsreportStudio2.default.addToolbarComponent(function (props) {
	              return _react2.default.createElement(
	                'div',
	                {
	                  className: 'toolbar-button', onClick: function onClick() {
	                    return window.open(window.location.href.split('?')[0], '_blank');
	                  } },
	                _react2.default.createElement('i', { className: 'fa fa-desktop' }),
	                'Full'
	              );
	            }, 'right');
	          }
	
	          if (isEmbed) {
	            _jsreportStudio2.default.collapseLeftPane();
	          } else {
	            _jsreportStudio2.default.openTab({ key: 'Help', editorComponentKey: 'Help', title: 'Home' });
	          }
	
	          entities = _jsreportStudio2.default.getAllEntities();
	
	          if (!(entities.length < 5)) {
	            _context2.next = 8;
	            break;
	          }
	
	          _context2.next = 8;
	          return Promise.all(entities.map(function (v) {
	            return _jsreportStudio2.default.openTab({ _id: v._id });
	          }));
	
	        case 8:
	
	          if (entities.length > 0) {
	            _jsreportStudio2.default.openTab({ _id: entities[0]._id });
	          }
	
	          if (_jsreportStudio2.default.playground.current.default) {
	            _jsreportStudio2.default.openTab({ _id: _jsreportStudio2.default.playground.current.default });
	          }
	
	        case 10:
	        case 'end':
	          return _context2.stop();
	      }
	    }
	  }, _callee2, undefined);
	})));

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = Studio.libraries['react'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = Studio;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _shortid = __webpack_require__(4);
	
	var _shortid2 = _interopRequireDefault(_shortid);
	
	var _jsreportStudio = __webpack_require__(2);
	
	var _jsreportStudio2 = _interopRequireDefault(_jsreportStudio);
	
	var _login = __webpack_require__(14);
	
	var _login2 = _interopRequireDefault(_login);
	
	var _style = __webpack_require__(15);
	
	var _style2 = _interopRequireDefault(_style);
	
	var _lodash = __webpack_require__(19);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _DeleteWorkspaceModal = __webpack_require__(20);
	
	var _DeleteWorkspaceModal2 = _interopRequireDefault(_DeleteWorkspaceModal);
	
	var _WorkspacesList = __webpack_require__(21);
	
	var _WorkspacesList2 = _interopRequireDefault(_WorkspacesList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Startup = function (_Component) {
	  _inherits(Startup, _Component);
	
	  function Startup() {
	    _classCallCheck(this, Startup);
	
	    var _this = _possibleConstructorReturn(this, (Startup.__proto__ || Object.getPrototypeOf(Startup)).call(this));
	
	    _this.state = { tab: 'popular', searchTerm: '' };
	
	    _this.handleSearchChange = (0, _lodash2.default)(_this.handleSearchChange.bind(_this), 500);
	    return _this;
	  }
	
	  _createClass(Startup, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      if (_jsreportStudio2.default.playground.startupReloadTrigger) {
	        _jsreportStudio2.default.playground.startupReloadTrigger = false;
	      }
	
	      this.refresh();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      if (_jsreportStudio2.default.playground.startupReloadTrigger) {
	        _jsreportStudio2.default.playground.startupReloadTrigger = false;
	
	        this.refresh();
	      }
	    }
	  }, {
	    key: 'refresh',
	    value: function refresh() {
	      this.setState({
	        refreshKey: _shortid2.default.generate()
	      });
	    }
	  }, {
	    key: 'handleSearchChange',
	    value: function handleSearchChange() {
	      this.refresh();
	    }
	  }, {
	    key: 'handleRemove',
	    value: function handleRemove(w) {
	      _jsreportStudio2.default.openModal(_DeleteWorkspaceModal2.default, {
	        workspace: w
	      });
	    }
	  }, {
	    key: 'renderPinnedExamples',
	    value: function renderPinnedExamples() {
	      var refreshKey = this.state.refreshKey;
	
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_WorkspacesList2.default, {
	          key: refreshKey,
	          resolveUrl: function resolveUrl(pageNumber) {
	            return '/api/playground/workspaces/examples?pageNumber=' + pageNumber;
	          },
	          onRemove: this.handleRemove
	        })
	      );
	    }
	  }, {
	    key: 'renderPopularWorkspaces',
	    value: function renderPopularWorkspaces() {
	      var refreshKey = this.state.refreshKey;
	
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_WorkspacesList2.default, {
	          key: refreshKey,
	          resolveUrl: function resolveUrl(pageNumber) {
	            return '/api/playground/workspaces/popular?pageNumber=' + pageNumber;
	          },
	          onRemove: this.handleRemove
	        })
	      );
	    }
	  }, {
	    key: 'renderUserWorkspaces',
	    value: function renderUserWorkspaces() {
	      return _jsreportStudio2.default.playground.user ? this.renderForUser() : this.renderForAnonym();
	    }
	  }, {
	    key: 'renderForUser',
	    value: function renderForUser() {
	      var refreshKey = this.state.refreshKey;
	
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_WorkspacesList2.default, {
	          key: refreshKey,
	          resolveUrl: function resolveUrl(pageNumber) {
	            return '/api/playground/workspaces/user/' + _jsreportStudio2.default.playground.user._id + '?pageNumber=' + pageNumber;
	          },
	          onRemove: this.handleRemove
	        })
	      );
	    }
	  }, {
	    key: 'renderForAnonym',
	    value: function renderForAnonym() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        (0, _login2.default)()
	      );
	    }
	  }, {
	    key: 'renderActions',
	    value: function renderActions() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h3',
	          null,
	          'actions'
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'button',
	            { className: 'button confirmation', onClick: function onClick() {
	                return _jsreportStudio2.default.playground.create();
	              } },
	            'new workspace'
	          ),
	          _react2.default.createElement(
	            'button',
	            { className: 'button confirmation' },
	            'search'
	          )
	        )
	      );
	    }
	  }, {
	    key: 'resolveSearchUrl',
	    value: function resolveSearchUrl() {
	      var searchTerm = this.state.searchTerm;
	
	
	      return '/api/playground/search?q=' + encodeURIComponent(searchTerm != null ? searchTerm : '');
	    }
	  }, {
	    key: 'renderSearch',
	    value: function renderSearch() {
	      var _this2 = this;
	
	      var _state = this.state,
	          searchTerm = _state.searchTerm,
	          refreshKey = _state.refreshKey;
	
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default.searchBox },
	          _react2.default.createElement(
	            'label',
	            null,
	            'search for a workspace...'
	          ),
	          _react2.default.createElement('input', {
	            type: 'text',
	            value: searchTerm,
	            onChange: function onChange(ev) {
	              return _this2.setState({ searchTerm: ev.target.value });
	            },
	            onKeyUp: this.handleSearchChange
	          })
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(_WorkspacesList2.default, {
	            key: refreshKey,
	            ref: 'searchList',
	            resolveUrl: function resolveUrl(pageNumber) {
	              return _this2.resolveSearchUrl();
	            },
	            editable: false
	          })
	        )
	      );
	    }
	  }, {
	    key: 'renderTab',
	    value: function renderTab() {
	      switch (this.state.tab) {
	        case 'examples':
	          return _react2.default.createElement(
	            'div',
	            null,
	            this.renderPinnedExamples()
	          );
	        case 'my':
	          return _react2.default.createElement(
	            'div',
	            null,
	            this.renderUserWorkspaces()
	          );
	        case 'popular':
	          return _react2.default.createElement(
	            'div',
	            null,
	            this.renderPopularWorkspaces()
	          );
	        case 'search':
	          return _react2.default.createElement(
	            'div',
	            null,
	            this.renderSearch()
	          );
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'custom-editor block' },
	        _react2.default.createElement(
	          'div',
	          null,
	          _jsreportStudio2.default.playground.user ? _react2.default.createElement(
	            'h2',
	            null,
	            'welcome ',
	            _react2.default.createElement(
	              'b',
	              null,
	              _jsreportStudio2.default.playground.user.fullName
	            )
	          ) : ''
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default.newBox },
	          'Start by creating a new workspace',
	          _react2.default.createElement(
	            'button',
	            {
	              className: 'button confirmation',
	              onClick: function onClick() {
	                return _jsreportStudio2.default.playground.create();
	              },
	              title: 'create template in new workspace'
	            },
	            _react2.default.createElement('i', { className: 'fa fa-plus-square' })
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'buton',
	            {
	              className: 'button confirmation',
	              style: { display: 'inline-block', marginLeft: 0, marginBottom: '1rem' },
	              onClick: function onClick() {
	                return _this3.refresh();
	              }
	            },
	            _react2.default.createElement('i', { className: 'fa fa-refresh' }),
	            ' Refresh'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default.tabs },
	          _react2.default.createElement(
	            'div',
	            { className: this.state.tab === 'examples' ? _style2.default.selectedTab : '', onClick: function onClick() {
	                return _this3.setState({ tab: 'examples' });
	              } },
	            'Examples'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: this.state.tab === 'my' ? _style2.default.selectedTab : '', onClick: function onClick() {
	                return _this3.setState({ tab: 'my' });
	              } },
	            'My workspaces'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: this.state.tab === 'popular' ? _style2.default.selectedTab : '', onClick: function onClick() {
	                return _this3.setState({ tab: 'popular' });
	              } },
	            'Popular workspaces'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: this.state.tab === 'search' ? _style2.default.selectedTab : '', onClick: function onClick() {
	                return _this3.setState({ tab: 'search' });
	              } },
	            _react2.default.createElement('i', { className: 'fa fa-search' }),
	            ' Search'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'block-item', style: { overflow: 'auto' } },
	          this.renderTab()
	        )
	      );
	    }
	  }]);
	
	  return Startup;
	}(_react.Component);
	
	exports.default = Startup;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	module.exports = __webpack_require__(5);


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var alphabet = __webpack_require__(6);
	var encode = __webpack_require__(8);
	var decode = __webpack_require__(10);
	var build = __webpack_require__(11);
	var isValid = __webpack_require__(12);
	
	// if you are using cluster or multiple servers use this to make each instance
	// has a unique value for worker
	// Note: I don't know if this is automatically set when using third
	// party cluster solutions such as pm2.
	var clusterWorkerId = __webpack_require__(13) || 0;
	
	/**
	 * Set the seed.
	 * Highly recommended if you don't want people to try to figure out your id schema.
	 * exposed as shortid.seed(int)
	 * @param seed Integer value to seed the random alphabet.  ALWAYS USE THE SAME SEED or you might get overlaps.
	 */
	function seed(seedValue) {
	    alphabet.seed(seedValue);
	    return module.exports;
	}
	
	/**
	 * Set the cluster worker or machine id
	 * exposed as shortid.worker(int)
	 * @param workerId worker must be positive integer.  Number less than 16 is recommended.
	 * returns shortid module so it can be chained.
	 */
	function worker(workerId) {
	    clusterWorkerId = workerId;
	    return module.exports;
	}
	
	/**
	 *
	 * sets new characters to use in the alphabet
	 * returns the shuffled alphabet
	 */
	function characters(newCharacters) {
	    if (newCharacters !== undefined) {
	        alphabet.characters(newCharacters);
	    }
	
	    return alphabet.shuffled();
	}
	
	/**
	 * Generate unique id
	 * Returns string id
	 */
	function generate() {
	  return build(clusterWorkerId);
	}
	
	// Export all other functions as properties of the generate function
	module.exports = generate;
	module.exports.generate = generate;
	module.exports.seed = seed;
	module.exports.worker = worker;
	module.exports.characters = characters;
	module.exports.decode = decode;
	module.exports.isValid = isValid;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var randomFromSeed = __webpack_require__(7);
	
	var ORIGINAL = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
	var alphabet;
	var previousSeed;
	
	var shuffled;
	
	function reset() {
	    shuffled = false;
	}
	
	function setCharacters(_alphabet_) {
	    if (!_alphabet_) {
	        if (alphabet !== ORIGINAL) {
	            alphabet = ORIGINAL;
	            reset();
	        }
	        return;
	    }
	
	    if (_alphabet_ === alphabet) {
	        return;
	    }
	
	    if (_alphabet_.length !== ORIGINAL.length) {
	        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. You submitted ' + _alphabet_.length + ' characters: ' + _alphabet_);
	    }
	
	    var unique = _alphabet_.split('').filter(function(item, ind, arr){
	       return ind !== arr.lastIndexOf(item);
	    });
	
	    if (unique.length) {
	        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. These characters were not unique: ' + unique.join(', '));
	    }
	
	    alphabet = _alphabet_;
	    reset();
	}
	
	function characters(_alphabet_) {
	    setCharacters(_alphabet_);
	    return alphabet;
	}
	
	function setSeed(seed) {
	    randomFromSeed.seed(seed);
	    if (previousSeed !== seed) {
	        reset();
	        previousSeed = seed;
	    }
	}
	
	function shuffle() {
	    if (!alphabet) {
	        setCharacters(ORIGINAL);
	    }
	
	    var sourceArray = alphabet.split('');
	    var targetArray = [];
	    var r = randomFromSeed.nextValue();
	    var characterIndex;
	
	    while (sourceArray.length > 0) {
	        r = randomFromSeed.nextValue();
	        characterIndex = Math.floor(r * sourceArray.length);
	        targetArray.push(sourceArray.splice(characterIndex, 1)[0]);
	    }
	    return targetArray.join('');
	}
	
	function getShuffled() {
	    if (shuffled) {
	        return shuffled;
	    }
	    shuffled = shuffle();
	    return shuffled;
	}
	
	/**
	 * lookup shuffled letter
	 * @param index
	 * @returns {string}
	 */
	function lookup(index) {
	    var alphabetShuffled = getShuffled();
	    return alphabetShuffled[index];
	}
	
	module.exports = {
	    characters: characters,
	    seed: setSeed,
	    lookup: lookup,
	    shuffled: getShuffled
	};


/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	// Found this seed-based random generator somewhere
	// Based on The Central Randomizer 1.3 (C) 1997 by Paul Houle (houle@msc.cornell.edu)
	
	var seed = 1;
	
	/**
	 * return a random number based on a seed
	 * @param seed
	 * @returns {number}
	 */
	function getNextValue() {
	    seed = (seed * 9301 + 49297) % 233280;
	    return seed/(233280.0);
	}
	
	function setSeed(_seed_) {
	    seed = _seed_;
	}
	
	module.exports = {
	    nextValue: getNextValue,
	    seed: setSeed
	};


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var randomByte = __webpack_require__(9);
	
	function encode(lookup, number) {
	    var loopCounter = 0;
	    var done;
	
	    var str = '';
	
	    while (!done) {
	        str = str + lookup( ( (number >> (4 * loopCounter)) & 0x0f ) | randomByte() );
	        done = number < (Math.pow(16, loopCounter + 1 ) );
	        loopCounter++;
	    }
	    return str;
	}
	
	module.exports = encode;


/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	var crypto = typeof window === 'object' && (window.crypto || window.msCrypto); // IE 11 uses window.msCrypto
	
	function randomByte() {
	    if (!crypto || !crypto.getRandomValues) {
	        return Math.floor(Math.random() * 256) & 0x30;
	    }
	    var dest = new Uint8Array(1);
	    crypto.getRandomValues(dest);
	    return dest[0] & 0x30;
	}
	
	module.exports = randomByte;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var alphabet = __webpack_require__(6);
	
	/**
	 * Decode the id to get the version and worker
	 * Mainly for debugging and testing.
	 * @param id - the shortid-generated id.
	 */
	function decode(id) {
	    var characters = alphabet.shuffled();
	    return {
	        version: characters.indexOf(id.substr(0, 1)) & 0x0f,
	        worker: characters.indexOf(id.substr(1, 1)) & 0x0f
	    };
	}
	
	module.exports = decode;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var encode = __webpack_require__(8);
	var alphabet = __webpack_require__(6);
	
	// Ignore all milliseconds before a certain time to reduce the size of the date entropy without sacrificing uniqueness.
	// This number should be updated every year or so to keep the generated id short.
	// To regenerate `new Date() - 0` and bump the version. Always bump the version!
	var REDUCE_TIME = 1459707606518;
	
	// don't change unless we change the algos or REDUCE_TIME
	// must be an integer and less than 16
	var version = 6;
	
	// Counter is used when shortid is called multiple times in one second.
	var counter;
	
	// Remember the last time shortid was called in case counter is needed.
	var previousSeconds;
	
	/**
	 * Generate unique id
	 * Returns string id
	 */
	function build(clusterWorkerId) {
	
	    var str = '';
	
	    var seconds = Math.floor((Date.now() - REDUCE_TIME) * 0.001);
	
	    if (seconds === previousSeconds) {
	        counter++;
	    } else {
	        counter = 0;
	        previousSeconds = seconds;
	    }
	
	    str = str + encode(alphabet.lookup, version);
	    str = str + encode(alphabet.lookup, clusterWorkerId);
	    if (counter > 0) {
	        str = str + encode(alphabet.lookup, counter);
	    }
	    str = str + encode(alphabet.lookup, seconds);
	
	    return str;
	}
	
	module.exports = build;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var alphabet = __webpack_require__(6);
	
	function isShortId(id) {
	    if (!id || typeof id !== 'string' || id.length < 6 ) {
	        return false;
	    }
	
	    var characters = alphabet.characters();
	    var len = id.length;
	    for(var i = 0; i < len;i++) {
	        if (characters.indexOf(id[i]) === -1) {
	            return false;
	        }
	    }
	    return true;
	}
	
	module.exports = isShortId;


/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = 0;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	  var _onClick = props.onClick || function (href) {
	    window.location.href = href;
	  };
	
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      'a',
	      { target: '_top', title: 'facebook', onClick: function onClick() {
	          return _onClick('/login/facebook');
	        }, style: { color: '#3b5998', marginRight: '0.5rem', cursor: 'pointer' } },
	      _react2.default.createElement('i', { className: 'fa fa-facebook-square fa-3x' })
	    ),
	    _react2.default.createElement(
	      'a',
	      { target: '_top', title: 'twitter', onClick: function onClick() {
	          return _onClick('/login/twitter');
	        }, style: { color: '#2fc2ef', marginRight: '0.5rem', cursor: 'pointer' } },
	      _react2.default.createElement('i', { className: 'fa fa-twitter-square fa-3x' })
	    ),
	    _react2.default.createElement(
	      'a',
	      { target: '_top', title: 'github', onClick: function onClick() {
	          return _onClick('/login/github');
	        }, style: { color: '#337ab7', marginRight: '0.5rem', cursor: 'pointer' } },
	      _react2.default.createElement('i', { className: 'fa fa-github fa-3x' })
	    )
	  );
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(16);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(18)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!../node_modules/postcss-loader/index.js!../node_modules/sass-loader/index.js?outputStyle=expanded&sourceMap!./style.scss", function() {
				var newContent = require("!!../node_modules/css-loader/index.js?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!../node_modules/postcss-loader/index.js!../node_modules/sass-loader/index.js?outputStyle=expanded&sourceMap!./style.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(17)();
	// imports
	
	
	// module
	exports.push([module.id, ".workspacesTable___2qtx1 > tbody > tr > td:nth-child(4),\n.workspacesTable___2qtx1 > tbody > tr > td:nth-child(5) {\n  text-align: right;\n}\n\n.workspacesTable___2qtx1 > tbody > th:nth-child(2) {\n  text-align: right;\n}\n\n.workspacesTable___2qtx1 > tbody > tr > td > i {\n  color: #555555;\n  margin-left: 0.3rem;\n}\n\n.tabs___2dVUS {\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  background-color: #FEFEFE;\n  border-bottom: 0.1rem #1C97EA solid;\n  margin-bottom: 2rem;\n}\n\n.tabs___2dVUS > div {\n  border-right: 1px #E6E6E6 solid;\n  cursor: pointer;\n}\n\n.tabs___2dVUS > div:hover {\n  background-color: #1C97EA;\n  color: #FFFFFF;\n}\n\n.tabs___2dVUS > .selectedTab___1ej3A {\n  background: #007ACC;\n  color: #FFFFFF;\n}\n\n.tabs___2dVUS > div {\n  padding: 0.5rem;\n}\n\n.searchBox___LauJK {\n  margin-bottom: 2rem;\n}\n\n.newBox___2zSAI {\n  margin-bottom: 2rem;\n}\n\n.contextMenu___3PI92 {\n  background-color: #c6c6c6;\n  position: absolute;\n  padding: 0.5rem;\n  min-width: 9rem;\n  z-index: 200;\n}\n\n.contextMenuContainer___f0_Ko {\n  position: relative;\n  z-index: 200;\n}\n\n.contextButton___1CVdi {\n  color: #2f2f2f;\n  padding: 0.5rem;\n  font-size: 0.8rem;\n  cursor: pointer;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.contextButton___1CVdi:hover {\n  background-color: #1C97EA;\n  color: #FFFFFF;\n}\n", "", {"version":3,"sources":["/./studio/studio/style.scss","/./studio/work/jsreport/playground/node_modules/jsreport-studio/src/theme/common.scss"],"names":[],"mappings":"AAEA;;EAEI,kBACJ;CAAE;;AAEF;EACI,kBACJ;CAAE;;AAEF;EACI,eAAc;EACd,oBACJ;CAAE;;AAEF;EACI,qBAAa;EAAb,cAAa;EACb,YAAW;EACX,0BAAyB;EACzB,oCAAmC;EACnC,oBACJ;CAAE;;AAEF;EACI,gCAA+B;EAC/B,gBACJ;CAAE;;AAEF;EACI,0BAAyB;EACzB,eAAc;CACjB;;AAED;EACI,oBAAmB;EACnB,eAAc;CACjB;;AAED;EACI,gBACJ;CAAE;;AAEF;EACI,oBACJ;CAAE;;AAEF;EACI,oBACJ;CAAE;;AAEF;EACE,0BC1CsB;ED2CtB,mBAAkB;EAClB,gBAAe;EACf,gBAAe;EACf,aAAY;CACb;;AAED;EACE,mBAAkB;EAClB,aAAY;CACb;;AAED;EACE,eCjEoB;EDkEpB,gBAAe;EACf,kBAAiB;EACjB,gBAAe;EC3Cf,4BAA2B;EAC3B,0BAAyB;EAEzB,uBAAsB;EACtB,sBAAqB;EACrB,kBAAiB;CDwClB;;AAED;EACE,0BCnEmC;EDoEnC,eCrEyB;CDsE1B","file":"style.scss","sourcesContent":["@import \"~jsreport-studio/src/theme/common\";\r\n\r\n.workspacesTable > tbody > tr > td:nth-child(4),\r\n.workspacesTable > tbody > tr > td:nth-child(5) {\r\n    text-align: right\r\n}\r\n\r\n.workspacesTable > tbody > th:nth-child(2) {\r\n    text-align: right\r\n}\r\n\r\n.workspacesTable > tbody > tr > td > i {\r\n    color: #555555;\r\n    margin-left: 0.3rem\r\n}\r\n\r\n.tabs {\r\n    display: flex;\r\n    width: 100%;\r\n    background-color: #FEFEFE;\r\n    border-bottom: 0.1rem #1C97EA solid;\r\n    margin-bottom: 2rem\r\n}\r\n\r\n.tabs > div {\r\n    border-right: 1px #E6E6E6 solid;\r\n    cursor: pointer\r\n}\r\n\r\n.tabs > div:hover {\r\n    background-color: #1C97EA;\r\n    color: #FFFFFF;\r\n}\r\n\r\n.tabs > .selectedTab {\r\n    background: #007ACC;\r\n    color: #FFFFFF;\r\n}\r\n\r\n.tabs > div {\r\n    padding: 0.5rem\r\n}\r\n\r\n.searchBox {\r\n    margin-bottom: 2rem\r\n}\r\n\r\n.newBox {\r\n    margin-bottom: 2rem\r\n}\r\n\r\n.contextMenu {\r\n  background-color: $secondaryColor;\r\n  position: absolute;\r\n  padding: 0.5rem;\r\n  min-width: 9rem;\r\n  z-index: 200;\r\n}\r\n\r\n.contextMenuContainer {\r\n  position: relative;\r\n  z-index: 200;\r\n}\r\n\r\n.contextButton {\r\n  color: $primaryColor;\r\n  padding: 0.5rem;\r\n  font-size: 0.8rem;\r\n  cursor: pointer;\r\n  @include no-select();\r\n}\r\n\r\n.contextButton:hover {\r\n  background-color: $primaryHoverBackgroundColor;\r\n  color: $primaryHoverColor\r\n}\r\n","$primaryColor: #2f2f2f;\n\n$primarySelectionBackgroundColor: #007ACC;\n$primarySelectionColor: #FFFFFF;\n\n$primaryHoverColor: #FFFFFF;\n$primaryHoverBackgroundColor: #1C97EA;\n\n$formPrimaryColor: #ffc40d;\n\n$secondaryColor: #c6c6c6;\n$secondaryBackgroundColor: #F6F6F6;\n\n$tertiaryColor: $primarySelectionColor;\n$tertiaryBackgroundColor:rgb(85, 85, 85);\n\n\n\n$secondaryHoverColor: #c6c6c6;\n$secondaryHoverBackgroundColor: #73a2ff;\n\n$alternativeHoverColor: #4CAF50;\n\n\n@mixin no-select() {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"workspacesTable": "workspacesTable___2qtx1",
		"tabs": "tabs___2dVUS",
		"selectedTab": "selectedTab___1ej3A",
		"searchBox": "searchBox___LauJK",
		"newBox": "newBox___2zSAI",
		"contextMenu": "contextMenu___3PI92",
		"contextMenuContainer": "contextMenuContainer___f0_Ko",
		"contextButton": "contextButton___1CVdi"
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 19 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */
	
	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;
	
	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';
	
	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;
	
	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
	
	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;
	
	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;
	
	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;
	
	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max,
	    nativeMin = Math.min;
	
	/**
	 * Gets the timestamp of the number of milliseconds that have elapsed since
	 * the Unix epoch (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Date
	 * @returns {number} Returns the timestamp.
	 * @example
	 *
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => Logs the number of milliseconds it took for the deferred invocation.
	 */
	var now = function() {
	  return root.Date.now();
	};
	
	/**
	 * Creates a debounced function that delays invoking `func` until after `wait`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked. The debounced function comes with a `cancel` method to cancel
	 * delayed `func` invocations and a `flush` method to immediately invoke them.
	 * Provide `options` to indicate whether `func` should be invoked on the
	 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
	 * with the last arguments provided to the debounced function. Subsequent
	 * calls to the debounced function return the result of the last `func`
	 * invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the debounced function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to debounce.
	 * @param {number} [wait=0] The number of milliseconds to delay.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=false]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {number} [options.maxWait]
	 *  The maximum time `func` is allowed to be delayed before it's invoked.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // Avoid costly calculations while the window size is in flux.
	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	 *
	 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
	 * jQuery(element).on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * }));
	 *
	 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
	 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
	 * var source = new EventSource('/stream');
	 * jQuery(source).on('message', debounced);
	 *
	 * // Cancel the trailing debounced invocation.
	 * jQuery(window).on('popstate', debounced.cancel);
	 */
	function debounce(func, wait, options) {
	  var lastArgs,
	      lastThis,
	      maxWait,
	      result,
	      timerId,
	      lastCallTime,
	      lastInvokeTime = 0,
	      leading = false,
	      maxing = false,
	      trailing = true;
	
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  wait = toNumber(wait) || 0;
	  if (isObject(options)) {
	    leading = !!options.leading;
	    maxing = 'maxWait' in options;
	    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }
	
	  function invokeFunc(time) {
	    var args = lastArgs,
	        thisArg = lastThis;
	
	    lastArgs = lastThis = undefined;
	    lastInvokeTime = time;
	    result = func.apply(thisArg, args);
	    return result;
	  }
	
	  function leadingEdge(time) {
	    // Reset any `maxWait` timer.
	    lastInvokeTime = time;
	    // Start the timer for the trailing edge.
	    timerId = setTimeout(timerExpired, wait);
	    // Invoke the leading edge.
	    return leading ? invokeFunc(time) : result;
	  }
	
	  function remainingWait(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime,
	        result = wait - timeSinceLastCall;
	
	    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
	  }
	
	  function shouldInvoke(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime;
	
	    // Either this is the first call, activity has stopped and we're at the
	    // trailing edge, the system time has gone backwards and we're treating
	    // it as the trailing edge, or we've hit the `maxWait` limit.
	    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
	      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
	  }
	
	  function timerExpired() {
	    var time = now();
	    if (shouldInvoke(time)) {
	      return trailingEdge(time);
	    }
	    // Restart the timer.
	    timerId = setTimeout(timerExpired, remainingWait(time));
	  }
	
	  function trailingEdge(time) {
	    timerId = undefined;
	
	    // Only invoke if we have `lastArgs` which means `func` has been
	    // debounced at least once.
	    if (trailing && lastArgs) {
	      return invokeFunc(time);
	    }
	    lastArgs = lastThis = undefined;
	    return result;
	  }
	
	  function cancel() {
	    if (timerId !== undefined) {
	      clearTimeout(timerId);
	    }
	    lastInvokeTime = 0;
	    lastArgs = lastCallTime = lastThis = timerId = undefined;
	  }
	
	  function flush() {
	    return timerId === undefined ? result : trailingEdge(now());
	  }
	
	  function debounced() {
	    var time = now(),
	        isInvoking = shouldInvoke(time);
	
	    lastArgs = arguments;
	    lastThis = this;
	    lastCallTime = time;
	
	    if (isInvoking) {
	      if (timerId === undefined) {
	        return leadingEdge(lastCallTime);
	      }
	      if (maxing) {
	        // Handle invocations in a tight loop.
	        timerId = setTimeout(timerExpired, wait);
	        return invokeFunc(lastCallTime);
	      }
	    }
	    if (timerId === undefined) {
	      timerId = setTimeout(timerExpired, wait);
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  debounced.flush = flush;
	  return debounced;
	}
	
	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}
	
	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}
	
	module.exports = debounce;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _jsreportStudio = __webpack_require__(2);
	
	var _jsreportStudio2 = _interopRequireDefault(_jsreportStudio);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var DeleteWorkspaceModal = function (_Component) {
	  _inherits(DeleteWorkspaceModal, _Component);
	
	  function DeleteWorkspaceModal() {
	    _classCallCheck(this, DeleteWorkspaceModal);
	
	    return _possibleConstructorReturn(this, (DeleteWorkspaceModal.__proto__ || Object.getPrototypeOf(DeleteWorkspaceModal)).apply(this, arguments));
	  }
	
	  _createClass(DeleteWorkspaceModal, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;
	
	      setTimeout(function () {
	        return _this2.refs.cancel.focus();
	      }, 0);
	    }
	  }, {
	    key: 'remove',
	    value: function remove() {
	      var workspace = this.props.options.workspace;
	
	      this.props.close();
	
	      _jsreportStudio2.default.playground.remove(workspace);
	    }
	  }, {
	    key: 'cancel',
	    value: function cancel() {
	      this.props.close();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;
	
	      var workspace = this.props.options.workspace;
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          null,
	          'Are you sure you want to delete workspace ',
	          _react2.default.createElement(
	            'b',
	            null,
	            workspace.name
	          ),
	          '?'
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          _react2.default.createElement(
	            'small',
	            null,
	            _react2.default.createElement(
	              'i',
	              null,
	              '*This action is irreversible and all examples and links to this workspace will stop working'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'button-bar' },
	          _react2.default.createElement(
	            'button',
	            { className: 'button danger', onClick: function onClick() {
	                return _this3.remove();
	              } },
	            'Yes'
	          ),
	          _react2.default.createElement(
	            'button',
	            { className: 'button confirmation', ref: 'cancel', onClick: function onClick() {
	                return _this3.cancel();
	              } },
	            'Cancel'
	          )
	        )
	      );
	    }
	  }]);
	
	  return DeleteWorkspaceModal;
	}(_react.Component);
	
	exports.default = DeleteWorkspaceModal;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _jsreportStudio = __webpack_require__(2);
	
	var _jsreportStudio2 = _interopRequireDefault(_jsreportStudio);
	
	var _style = __webpack_require__(15);
	
	var _style2 = _interopRequireDefault(_style);
	
	var _reactList = __webpack_require__(22);
	
	var _reactList2 = _interopRequireDefault(_reactList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var WorkspacesList = function (_Component) {
	  _inherits(WorkspacesList, _Component);
	
	  function WorkspacesList() {
	    _classCallCheck(this, WorkspacesList);
	
	    var _this = _possibleConstructorReturn(this, (WorkspacesList.__proto__ || Object.getPrototypeOf(WorkspacesList)).call(this));
	
	    _this.loading = false;
	    _this.mounted = false;
	    _this.state = _this.initialState();
	    _this.tryHide = _this.tryHide.bind(_this);
	    return _this;
	  }
	
	  _createClass(WorkspacesList, [{
	    key: 'initialState',
	    value: function initialState() {
	      return { items: [], count: 0, pageNumber: 0 };
	    }
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.mounted = true;
	      this.lazyFetch();
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      window.addEventListener('click', this.tryHide);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.mounted = false;
	      window.removeEventListener('click', this.tryHide);
	    }
	  }, {
	    key: 'contextMenu',
	    value: function contextMenu(e, entity) {
	      e.preventDefault();
	      this.setState({ contextMenuId: entity._id });
	    }
	  }, {
	    key: 'tryHide',
	    value: function tryHide(ev) {
	      if (this.state.contextMenuId) {
	        ev.preventDefault();
	        ev.stopPropagation();
	        this.setState({ contextMenuId: null });
	      }
	    }
	  }, {
	    key: 'lazyFetch',
	    value: function () {
	      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
	        var response;
	        return regeneratorRuntime.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                if (!this.loading) {
	                  _context.next = 2;
	                  break;
	                }
	
	                return _context.abrupt('return');
	
	              case 2:
	                response = void 0;
	
	                this.loading = true;
	                _context.prev = 4;
	                _context.next = 7;
	                return _jsreportStudio2.default.api.get(this.props.resolveUrl(this.state.pageNumber));
	
	              case 7:
	                response = _context.sent;
	
	              case 8:
	                _context.prev = 8;
	
	                this.loading = false;
	                return _context.finish(8);
	
	              case 11:
	                if (this.mounted) {
	                  _context.next = 13;
	                  break;
	                }
	
	                return _context.abrupt('return');
	
	              case 13:
	
	                this.setState({
	                  items: this.state.items.concat(response.items),
	                  count: response.count,
	                  pageNumber: this.state.pageNumber + 1
	                });
	
	                if (this.state.items.length <= this.state.pending && response.count) {
	                  this.lazyFetch();
	                }
	
	              case 15:
	              case 'end':
	                return _context.stop();
	            }
	          }
	        }, _callee, this, [[4,, 8, 11]]);
	      }));
	
	      function lazyFetch() {
	        return _ref.apply(this, arguments);
	      }
	
	      return lazyFetch;
	    }()
	  }, {
	    key: 'tryRenderItem',
	    value: function tryRenderItem(index) {
	      var w = this.state.items[index];
	
	      if (!w) {
	        this.state.pending = Math.max(this.state.pending, index);
	        this.lazyFetch();
	
	        return _react2.default.createElement(
	          'tr',
	          { key: index },
	          _react2.default.createElement(
	            'td',
	            null,
	            _react2.default.createElement('i', { className: 'fa fa-spinner fa-spin fa-fw' })
	          )
	        );
	      }
	
	      return this.renderItem(w, index);
	    }
	  }, {
	    key: 'openUser',
	    value: function openUser(e, u) {
	      if (!u) {
	        return;
	      }
	
	      e.stopPropagation();
	      _jsreportStudio2.default.openTab({ key: 'playgroundUser' + u._id, editorComponentKey: 'playgroundUser', title: u.fullName, user: u });
	    }
	  }, {
	    key: 'renderContextMenu',
	    value: function renderContextMenu(w) {
	      var _this2 = this;
	
	      var onRemove = this.props.onRemove;
	
	
	      return _react2.default.createElement(
	        'div',
	        { key: 'entity-contextmenu', className: _style2.default.contextMenuContainer },
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default.contextMenu },
	          _react2.default.createElement(
	            'div',
	            {
	              className: _style2.default.contextButton,
	              onClick: function onClick(e) {
	                e.stopPropagation();
	                onRemove && onRemove(w);
	                _this2.tryHide(e);
	              }
	            },
	            _react2.default.createElement('i', { className: 'fa fa-trash' }),
	            ' Delete'
	          )
	        )
	      );
	    }
	  }, {
	    key: 'renderItem',
	    value: function renderItem(w, index) {
	      var _this3 = this;
	
	      var contextMenuId = this.state.contextMenuId;
	      var editable = this.props.editable;
	
	
	      var isOwner = false;
	
	      if (_jsreportStudio2.default.playground.user && _jsreportStudio2.default.playground.user._id === w.userId) {
	        isOwner = true;
	      }
	
	      return _react2.default.createElement(
	        'tr',
	        {
	          key: w._id,
	          onClick: function onClick() {
	            return contextMenuId == null && _jsreportStudio2.default.playground.open(w);
	          },
	          onContextMenu: function onContextMenu(e) {
	            if (!isOwner) {
	              e.preventDefault();
	              return;
	            }
	
	            _this3.contextMenu(e, w);
	          },
	          title: w.description
	        },
	        _react2.default.createElement(
	          'td',
	          { className: 'selection' },
	          w.name,
	          editable !== false && contextMenuId === w._id ? this.renderContextMenu(w) : null
	        ),
	        _react2.default.createElement(
	          'td',
	          { onClick: function onClick(e) {
	              return contextMenuId == null && _this3.openUser(e, w.user);
	            }, style: { color: '#007ACC' } },
	          w.user ? w.user.fullName : '',
	          isOwner && _react2.default.createElement('i', { className: 'fa fa-bolt', title: 'You are the owner of this workspace' })
	        ),
	        _react2.default.createElement(
	          'td',
	          null,
	          w.modificationDate.toLocaleDateString()
	        ),
	        _react2.default.createElement(
	          'td',
	          null,
	          w.views || 0,
	          _react2.default.createElement('i', { className: 'fa fa-eye' })
	        ),
	        _react2.default.createElement(
	          'td',
	          null,
	          w.likes || 0,
	          _react2.default.createElement('i', { className: 'fa fa-heart' })
	        )
	      );
	    }
	  }, {
	    key: 'renderTable',
	    value: function renderTable(items, ref) {
	      return _react2.default.createElement(
	        'table',
	        { className: 'table ' + _style2.default.workspacesTable, ref: ref },
	        _react2.default.createElement(
	          'thead',
	          null,
	          _react2.default.createElement(
	            'tr',
	            null,
	            _react2.default.createElement(
	              'th',
	              null,
	              'name'
	            ),
	            _react2.default.createElement(
	              'th',
	              null,
	              'user'
	            ),
	            _react2.default.createElement(
	              'th',
	              null,
	              'modified'
	            ),
	            _react2.default.createElement('th', null),
	            _react2.default.createElement('th', null)
	          )
	        ),
	        _react2.default.createElement(
	          'tbody',
	          null,
	          items
	        )
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this4 = this;
	
	      return _react2.default.createElement(_reactList2.default, {
	        type: 'uniform',
	        itemsRenderer: this.renderTable,
	        itemRenderer: function itemRenderer(index) {
	          return _this4.tryRenderItem(index);
	        },
	        length: this.state.count
	      });
	    }
	  }]);
	
	  return WorkspacesList;
	}(_react.Component);
	
	exports.default = WorkspacesList;

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = Studio.libraries['react-list'];

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ToolbarSaveForkButton = function (_Component) {
	  _inherits(ToolbarSaveForkButton, _Component);
	
	  function ToolbarSaveForkButton(props) {
	    _classCallCheck(this, ToolbarSaveForkButton);
	
	    var _this = _possibleConstructorReturn(this, (ToolbarSaveForkButton.__proto__ || Object.getPrototypeOf(ToolbarSaveForkButton)).call(this, props));
	
	    _this.handleShortcut = _this.handleShortcut.bind(_this);
	    return _this;
	  }
	
	  _createClass(ToolbarSaveForkButton, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      window.addEventListener('keydown', this.handleShortcut);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      window.removeEventListener('keydown', this.handleShortcut);
	    }
	  }, {
	    key: 'handleShortcut',
	    value: function handleShortcut(e) {
	      // ctrl + s
	      if (e.ctrlKey && e.which === 83) {
	        e.preventDefault();
	
	        if (this.props.save) {
	          this.props.save();
	          return false;
	        }
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          save = _props.save,
	          canEdit = _props.canEdit;
	
	
	      return _react2.default.createElement(
	        'div',
	        {
	          className: 'toolbar-button', onClick: function onClick() {
	            return save();
	          } },
	        canEdit ? _react2.default.createElement(
	          'span',
	          { title: 'Save workspace (CTRL+S)' },
	          _react2.default.createElement('i', { className: 'fa fa-floppy-o' }),
	          ' Save'
	        ) : _react2.default.createElement(
	          'span',
	          { title: 'Fork workspace' },
	          _react2.default.createElement('i', { className: 'fa fa-clone' }),
	          ' Fork'
	        )
	      );
	    }
	  }]);
	
	  return ToolbarSaveForkButton;
	}(_react.Component);
	
	exports.default = ToolbarSaveForkButton;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _jsreportStudio = __webpack_require__(2);
	
	var _jsreportStudio2 = _interopRequireDefault(_jsreportStudio);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var LogoutButton = function (_Component) {
	  _inherits(LogoutButton, _Component);
	
	  function LogoutButton() {
	    _classCallCheck(this, LogoutButton);
	
	    return _possibleConstructorReturn(this, (LogoutButton.__proto__ || Object.getPrototypeOf(LogoutButton)).apply(this, arguments));
	  }
	
	  _createClass(LogoutButton, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      return _react2.default.createElement(
	        'div',
	        { onClick: function onClick() {
	            return _this2.refs.logout.click();
	          }, style: { cursor: 'pointer' } },
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'form',
	            { method: 'POST', action: _jsreportStudio2.default.resolveUrl('/logout') },
	            _react2.default.createElement('input', { ref: 'logout', type: 'submit', id: 'logoutBtn', style: { display: 'none' } })
	          ),
	          _react2.default.createElement('i', { className: 'fa fa-power-off' }),
	          ' Logout'
	        )
	      );
	    }
	  }]);
	
	  return LogoutButton;
	}(_react.Component);
	
	exports.default = LogoutButton;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      'h3',
	      null,
	      'login'
	    ),
	    _react2.default.createElement(
	      'div',
	      null,
	      (0, _login2.default)()
	    )
	  );
	};
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _login = __webpack_require__(14);
	
	var _login2 = _interopRequireDefault(_login);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _login = __webpack_require__(14);
	
	var _login2 = _interopRequireDefault(_login);
	
	var _jsreportStudio = __webpack_require__(2);
	
	var _jsreportStudio2 = _interopRequireDefault(_jsreportStudio);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SaveModal = function (_Component) {
	  _inherits(SaveModal, _Component);
	
	  function SaveModal() {
	    _classCallCheck(this, SaveModal);
	
	    return _possibleConstructorReturn(this, (SaveModal.__proto__ || Object.getPrototypeOf(SaveModal)).apply(this, arguments));
	  }
	
	  _createClass(SaveModal, [{
	    key: 'save',
	    value: function () {
	      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(href) {
	        return regeneratorRuntime.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                _context.next = 2;
	                return _jsreportStudio2.default.playground.save();
	
	              case 2:
	                this.props.close();
	
	                if (href) {
	                  window.location.href = href;
	                }
	
	              case 4:
	              case 'end':
	                return _context.stop();
	            }
	          }
	        }, _callee, this);
	      }));
	
	      function save(_x) {
	        return _ref.apply(this, arguments);
	      }
	
	      return save;
	    }()
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h3',
	          null,
	          'save to your account'
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          'You will be able to come back anytime and find it.'
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          (0, _login2.default)({ onClick: function onClick(href) {
	              return _this2.save(href);
	            } })
	        ),
	        _react2.default.createElement(
	          'h3',
	          { style: { marginTop: '2rem' } },
	          'save as anonym'
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          'Not so cool but quick'
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'button',
	            { className: 'button confirmation', style: { float: 'left', marginLeft: 0 }, onClick: function onClick() {
	                return _this2.save();
	              } },
	            _react2.default.createElement('i', { className: 'fa fa-floppy' }),
	            ' Save as anonym'
	          )
	        )
	      );
	    }
	  }]);
	
	  return SaveModal;
	}(_react.Component);
	
	exports.default = SaveModal;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ShareModal = function (_Component) {
	  _inherits(ShareModal, _Component);
	
	  function ShareModal() {
	    _classCallCheck(this, ShareModal);
	
	    return _possibleConstructorReturn(this, (ShareModal.__proto__ || Object.getPrototypeOf(ShareModal)).apply(this, arguments));
	  }
	
	  _createClass(ShareModal, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { style: { padding: '1.5rem' } },
	        _react2.default.createElement(
	          'p',
	          null,
	          _react2.default.createElement(
	            'b',
	            null,
	            _react2.default.createElement('i', { className: 'fa fa-code' }),
	            '\xA0Use the following code to embed your workspace in another page:'
	          )
	        ),
	        _react2.default.createElement('br', null),
	        _react2.default.createElement(
	          'code',
	          { style: { backgroundColor: 'wheat' } },
	          '<iframe src="',
	          window.location.href,
	          '?embed=1" width="100%" height="400" frameborder="0"></iframe>'
	        )
	      );
	    }
	  }]);
	
	  return ShareModal;
	}(_react.Component);
	
	exports.default = ShareModal;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _jsreportStudio = __webpack_require__(2);
	
	var _jsreportStudio2 = _interopRequireDefault(_jsreportStudio);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SaveModal = function (_Component) {
	  _inherits(SaveModal, _Component);
	
	  function SaveModal() {
	    _classCallCheck(this, SaveModal);
	
	    return _possibleConstructorReturn(this, (SaveModal.__proto__ || Object.getPrototypeOf(SaveModal)).apply(this, arguments));
	  }
	
	  _createClass(SaveModal, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'workspace name'
	          ),
	          _react2.default.createElement('input', { type: 'text', ref: 'name', defaultValue: _jsreportStudio2.default.playground.current.name || '' })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'description'
	          ),
	          _react2.default.createElement('textarea', { ref: 'description', rows: '4', defaultValue: _jsreportStudio2.default.playground.current.description || '' })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'default entity'
	          ),
	          _react2.default.createElement(
	            'select',
	            { ref: 'defaultEntity' },
	            _jsreportStudio2.default.getAllEntities().map(function (e) {
	              return _react2.default.createElement(
	                'option',
	                { key: e._id, value: e._id },
	                e.name + ' (' + e.__entitySet + ')'
	              );
	            })
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'button-bar' },
	          _react2.default.createElement(
	            'button',
	            {
	              className: 'button confirmation',
	              onClick: _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
	                return regeneratorRuntime.wrap(function _callee$(_context) {
	                  while (1) {
	                    switch (_context.prev = _context.next) {
	                      case 0:
	                        _jsreportStudio2.default.playground.current.name = _this2.refs.name.value;
	                        _jsreportStudio2.default.playground.current.description = _this2.refs.description.value;
	                        _jsreportStudio2.default.playground.current.default = _this2.refs.defaultEntity.value;
	
	                        if (!_jsreportStudio2.default.playground.current._id) {
	                          _context.next = 6;
	                          break;
	                        }
	
	                        _context.next = 6;
	                        return _jsreportStudio2.default.playground.save();
	
	                      case 6:
	                        _this2.props.close();
	
	                      case 7:
	                      case 'end':
	                        return _context.stop();
	                    }
	                  }
	                }, _callee, _this2);
	              })) },
	            'save'
	          )
	        )
	      );
	    }
	  }]);
	
	  return SaveModal;
	}(_react.Component);
	
	exports.default = SaveModal;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _jsreportStudio = __webpack_require__(2);
	
	var _jsreportStudio2 = _interopRequireDefault(_jsreportStudio);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	function updateTitle(workspaceName) {
	  var separatorIndex = document.title.lastIndexOf('|');
	
	  if (!workspaceName) {
	    document.title = document.title.slice(separatorIndex + 2);
	  } else {
	    if (separatorIndex === -1) {
	      document.title = workspaceName + ' | ' + document.title;
	    } else {
	      document.title = workspaceName + ' | ' + document.title.slice(separatorIndex + 2);
	    }
	  }
	}
	
	exports.default = function () {
	  return {
	    init: function init() {
	      var _this = this;
	
	      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
	        return regeneratorRuntime.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                _context.next = 2;
	                return _jsreportStudio2.default.api.get('api/playground/user');
	
	              case 2:
	                _this.user = _context.sent;
	                _context.next = 5;
	                return _jsreportStudio2.default.api.get('api/playground/workspace');
	
	              case 5:
	                _this.current = _context.sent;
	
	              case 6:
	              case 'end':
	                return _context.stop();
	            }
	          }
	        }, _callee, _this);
	      }))();
	    },
	    save: function save() {
	      var _this2 = this;
	
	      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
	        var shouldInvokeSave, newEntities, entities, prevDefault, newDefault;
	        return regeneratorRuntime.wrap(function _callee2$(_context2) {
	          while (1) {
	            switch (_context2.prev = _context2.next) {
	              case 0:
	                if (!_this2.lock) {
	                  _context2.next = 2;
	                  break;
	                }
	
	                return _context2.abrupt('return');
	
	              case 2:
	                _context2.prev = 2;
	
	                updateTitle(_this2.current.name);
	                _context2.next = 6;
	                return _jsreportStudio2.default.store.dispatch(_jsreportStudio2.default.entities.actions.flushUpdates());
	
	              case 6:
	                _this2.lock = true;
	                shouldInvokeSave = _this2.current.canEdit;
	                newEntities = _jsreportStudio2.default.getAllEntities().filter(function (e) {
	                  return e.__isNew;
	                });
	                entities = _jsreportStudio2.default.getAllEntities().filter(function (e) {
	                  return e.__isLoaded;
	                }).map(function (e) {
	                  return _jsreportStudio2.default.entities.actions.prune(e);
	                });
	                _context2.next = 12;
	                return _jsreportStudio2.default.api.post('/api/playground/workspace', {
	                  data: {
	                    workspace: _extends({
	                      name: 'untitled'
	                    }, _this2.current),
	                    entities: entities
	                  }
	                });
	
	              case 12:
	                _this2.current = _context2.sent;
	                _context2.next = 15;
	                return _jsreportStudio2.default.store.dispatch(_jsreportStudio2.default.editor.actions.updateHistory());
	
	              case 15:
	                if (!shouldInvokeSave) {
	                  _context2.next = 27;
	                  break;
	                }
	
	                prevDefault = newEntities.find(function (e) {
	                  return e._id === _this2.current.default;
	                });
	                newDefault = void 0;
	                _context2.next = 20;
	                return _jsreportStudio2.default.store.dispatch(_jsreportStudio2.default.editor.actions.saveAll());
	
	              case 20:
	
	                if (prevDefault) {
	                  newDefault = _jsreportStudio2.default.getAllEntities().find(function (e) {
	                    return e.shortid === prevDefault.shortid && e.name === prevDefault.name && e.__entitySet === prevDefault.__entitySet;
	                  });
	                }
	
	                if (!newDefault) {
	                  _context2.next = 25;
	                  break;
	                }
	
	                _context2.next = 24;
	                return _jsreportStudio2.default.api.post('/api/playground/workspace', {
	                  data: {
	                    workspace: _extends({}, _this2.current, {
	                      default: newDefault._id
	                    })
	                  }
	                });
	
	              case 24:
	                _this2.current = _context2.sent;
	
	              case 25:
	                _context2.next = 31;
	                break;
	
	              case 27:
	                _context2.next = 29;
	                return _jsreportStudio2.default.reset();
	
	              case 29:
	                _jsreportStudio2.default.openTab({ key: 'Help', editorComponentKey: 'Help', title: 'Home' });
	                _jsreportStudio2.default.getAllEntities().forEach(function (e) {
	                  return _jsreportStudio2.default.openTab({ _id: e._id });
	                });
	
	              case 31:
	                _context2.next = 33;
	                return _jsreportStudio2.default.api.get('api/playground/workspace');
	
	              case 33:
	                _this2.current = _context2.sent;
	
	                _this2.startupReloadTrigger = true;
	
	              case 35:
	                _context2.prev = 35;
	
	                _this2.lock = false;
	                return _context2.finish(35);
	
	              case 38:
	              case 'end':
	                return _context2.stop();
	            }
	          }
	        }, _callee2, _this2, [[2,, 35, 38]]);
	      }))();
	    },
	    like: function like() {
	      var _this3 = this;
	
	      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
	        return regeneratorRuntime.wrap(function _callee3$(_context3) {
	          while (1) {
	            switch (_context3.prev = _context3.next) {
	              case 0:
	                if (!(!_this3.current._id || _this3.lock)) {
	                  _context3.next = 2;
	                  break;
	                }
	
	                return _context3.abrupt('return');
	
	              case 2:
	                _context3.prev = 2;
	
	                _this3.lock = true;
	
	                if (!_this3.current.hasLike) {
	                  _context3.next = 10;
	                  break;
	                }
	
	                _this3.current.hasLike = false;
	                _context3.next = 8;
	                return _jsreportStudio2.default.api.del('/api/playground/like');
	
	              case 8:
	                _context3.next = 13;
	                break;
	
	              case 10:
	                _this3.current.hasLike = true;
	                _context3.next = 13;
	                return _jsreportStudio2.default.api.post('/api/playground/like');
	
	              case 13:
	                _this3.startupReloadTrigger = true;
	
	              case 14:
	                _context3.prev = 14;
	
	                _this3.lock = false;
	                return _context3.finish(14);
	
	              case 17:
	              case 'end':
	                return _context3.stop();
	            }
	          }
	        }, _callee3, _this3, [[2,, 14, 17]]);
	      }))();
	    },
	    open: function open(w) {
	      var _this4 = this;
	
	      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
	        var entities;
	        return regeneratorRuntime.wrap(function _callee4$(_context4) {
	          while (1) {
	            switch (_context4.prev = _context4.next) {
	              case 0:
	                updateTitle(w.name);
	                _this4.current = w;
	                _context4.next = 4;
	                return _jsreportStudio2.default.store.dispatch(_jsreportStudio2.default.editor.actions.updateHistory());
	
	              case 4:
	                _context4.next = 6;
	                return _jsreportStudio2.default.api.get('api/playground/workspace');
	
	              case 6:
	                _this4.current = _context4.sent;
	                _context4.next = 9;
	                return _jsreportStudio2.default.reset();
	
	              case 9:
	                _jsreportStudio2.default.openTab({ key: 'Help', editorComponentKey: 'Help', title: 'Home' });
	                entities = _jsreportStudio2.default.getAllEntities();
	
	                if (entities.length > 0) {
	                  _jsreportStudio2.default.openTab({ _id: entities[0]._id });
	                }
	
	              case 12:
	              case 'end':
	                return _context4.stop();
	            }
	          }
	        }, _callee4, _this4);
	      }))();
	    },
	    create: function create() {
	      var _this5 = this;
	
	      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
	        return regeneratorRuntime.wrap(function _callee5$(_context5) {
	          while (1) {
	            switch (_context5.prev = _context5.next) {
	              case 0:
	                _this5.current = { canEdit: true, __isInitial: true };
	                _context5.next = 3;
	                return _jsreportStudio2.default.reset();
	
	              case 3:
	                _jsreportStudio2.default.openTab({ key: 'Help', editorComponentKey: 'Help', title: 'Home' });
	                _jsreportStudio2.default.openNewModal('templates');
	
	              case 5:
	              case 'end':
	                return _context5.stop();
	            }
	          }
	        }, _callee5, _this5);
	      }))();
	    },
	    remove: function remove(w) {
	      var _this6 = this;
	
	      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
	        var wid;
	        return regeneratorRuntime.wrap(function _callee6$(_context6) {
	          while (1) {
	            switch (_context6.prev = _context6.next) {
	              case 0:
	                wid = w._id;
	                _context6.next = 3;
	                return _jsreportStudio2.default.api.del('api/playground/workspaces/' + wid + '/remove');
	
	              case 3:
	                if (!(w._id === _this6.current._id)) {
	                  _context6.next = 12;
	                  break;
	                }
	
	                _this6.current = { canEdit: true, __isInitial: true };
	                updateTitle(null);
	                _context6.next = 8;
	                return _jsreportStudio2.default.reset();
	
	              case 8:
	                _context6.next = 10;
	                return _jsreportStudio2.default.api.get('api/playground/workspace');
	
	              case 10:
	                _this6.current = _context6.sent;
	
	                _jsreportStudio2.default.openTab({ key: 'Help', editorComponentKey: 'Help', title: 'Home' });
	
	              case 12:
	
	                _this6.startupReloadTrigger = true;
	
	              case 13:
	              case 'end':
	                return _context6.stop();
	            }
	          }
	        }, _callee6, _this6);
	      }))();
	    }
	  };
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _WorkspacesList = __webpack_require__(21);
	
	var _WorkspacesList2 = _interopRequireDefault(_WorkspacesList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Startup = function (_Component) {
	  _inherits(Startup, _Component);
	
	  function Startup() {
	    _classCallCheck(this, Startup);
	
	    return _possibleConstructorReturn(this, (Startup.__proto__ || Object.getPrototypeOf(Startup)).apply(this, arguments));
	  }
	
	  _createClass(Startup, [{
	    key: 'render',
	    value: function render() {
	      var user = this.props.tab.user;
	
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'custom-editor block' },
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'h2',
	            null,
	            user.fullName
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(_WorkspacesList2.default, { resolveUrl: function resolveUrl(pageNumber) {
	              return '/api/playground/workspaces/user/' + user._id + '?pageNumber=' + pageNumber;
	            } })
	        )
	      );
	    }
	  }]);
	
	  return Startup;
	}(_react.Component);
	
	exports.default = Startup;

/***/ },
/* 31 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getQueryParameter = getQueryParameter;
	exports.removeFacebookQuery = removeFacebookQuery;
	exports.trim = trim;
	function getQueryParameter(name) {
	  var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
	  return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
	}
	
	function removeFacebookQuery() {
	  if (window.location.hash === '#_=_') {
	    history.replaceState ? history.replaceState(null, null, window.location.href.split('#')[0]) : window.location.hash = '';
	  }
	}
	
	function trim(str) {
	  if (str.length > 30) {
	    return str.substring(0, 25) + ' ...';
	  }
	  return str;
	}

/***/ }
/******/ ]);