// ======================================================================================
// =================================   singleton.js   ===================================
// ======================================================================================
"use strict";

class Singleton {
	static #key = Symbol();
	static #_Singleton = new Singleton( this.#key );
	static #_InstanceCount = 0;

    // ** Private constructor **
	constructor( key ) {
		if ( key !== Singleton.#key ) {
			throw new TypeError("'Singleton' constructor is private");
		}

        this.name = "Singleton";
	} // ** Private constructor ** 'Singleton' design pattern
	
	static get This() {
		if ( Singleton.#_Singleton == undefined ) {
			this.#_Singleton = new Singleton();
			if ( this.#_InstanceCount > 0 ) {
				throw new TypeError("'Singleton' constructor called more than once");
			}
			this.#_InstanceCount++;
        }
        return Singleton.#_Singleton;
    } // Singleton get 'This'	
} // Singleton class

Singleton.This;

if ( typeof exports === 'object' ) {	
	exports.Singleton = Singleton	
} // exports of 'singleton.js'