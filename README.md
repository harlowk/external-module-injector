# external-module-injector
Provides a wrapper for injecting external modules using SystemJS; in such a way that type-def errors are avoided and the module can be easily mocked for testing. 

Focused Use Case: 
Single-SPA, Angular, TS.

In the Single-SPA framework, external-modules are provided as a tool for sharing functionality between apps. Taking advantage of this awesome feature can sometime present issues when importing the module inside of a strictly-defined TS/JS Frameworks like Angular. The two primary issues are: (1) avoiding type-definition errors and (2) unit test visbility of an external module (often caused by testing libraries executing tests only within the scope of that app, not within the Single-SPA framework's external scope). 

This external-module-injector (em-injector) wraps the SystemJS import functionality in such a way that a import decleration of an external module can be done without actual visibility of the module. By exposing the SystemJS entries map, the em-injector allows you to query a module and declare its import via strings.   
