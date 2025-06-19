// ======================================================================================
// =================================   singleton.js   ===================================
// ======================================================================================
"use strict";

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

if ( typeof exports === 'object' ) {	
	exports.Singleton = Singleton	
} // exports of 'singleton.js'