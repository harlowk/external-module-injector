# module-systemjs-injector
Provides a wrapper for injecting external modules using SystemJS. Avoid type-def errors at runtime and easily mock modules for testing. 

### Import Single-SPA Modules in an Angular TS Framework.  

In the Single-SPA framework, external-modules are provided as a tool for sharing functionality between apps. Taking advantage of this awesome feature can sometime present issues when importing the module inside of a strictly-defined TS/JS Frameworks like Angular. 

This library intends to resolve two common issues.
  - Type-definition errors.
  - Unit-Test visbility of an external module. 

This module-systemjs-injector (ms-injector) wraps the SystemJS import functionality in such a way that a import decleration of an external module can be done without actual visibility of the module. By exposing the SystemJS entries map, the ms-injector allows you to query a module and declare its import via strings.   
