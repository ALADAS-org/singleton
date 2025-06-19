(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Singleton = factory());
})(this, (function () { 'use strict';

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	var singleton$1 = {};

	var hasRequiredSingleton;

	function requireSingleton () {
		if (hasRequiredSingleton) return singleton$1;
		hasRequiredSingleton = 1;
		(function (exports) {

			class Singleton {
				static #_Key = Symbol();
				static #_Instance = new Singleton( this.#_Key );
				static #_InstanceCount = 0;

			    // ** Private constructor **
				constructor( key ) {
					if ( key !== Singleton.#_Key ) {
						throw new TypeError("'Singleton' constructor is private");
					}

			        this.name = "Singleton";
				} // ** Private constructor ** 'Singleton' design pattern
				
				static get This() {
					if ( Singleton.#_Instance == undefined ) {
						this.#_Instance = new Singleton();
						if ( this.#_InstanceCount > 0 ) {
							throw new TypeError("'Singleton' constructor called more than once");
						}
						this.#_InstanceCount++;
			        }
			        return Singleton.#_Instance;
			    } // Singleton get 'This'	
			} // Singleton class

			Singleton.This; // NB: ensures that #_InstanceCount = 1

			{	
				exports.Singleton = Singleton;	
			} // exports of 'singleton.js' 
		} (singleton$1));
		return singleton$1;
	}

	var singletonExports = requireSingleton();
	var singleton = /*@__PURE__*/getDefaultExportFromCjs(singletonExports);

	return singleton;

}));
