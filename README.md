# rxjs-store

[![Latest release](http://img.shields.io/bower/v/rxjs-store.svg)](https://github.com/Risto-Stevcev/rxjs-store/releases)
[![License](http://img.shields.io/:license-MIT-blue.svg?style=flat)](LICENSE)

A very simple wrapper that provides redux-like functionality using RxJS observables


Redux is basically just an observable, except that it's not generic enough to be used like one. 
By using RxJS observables, you can solve many of the problems that redux has, such as asynchronous effects, in a very 
simple way. Since it's using an observable, it's easy to combine and compose the store with other streams like events 
or ajax calls. This simple wrapper provides the same functionality as redux at only 23 lines of code
