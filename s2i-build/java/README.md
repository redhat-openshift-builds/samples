# simple-camel-app
Reference: https://github.com/monodot/simple-camel-spring-boot-app/tree/master

To run:

    mvn clean spring-boot:run
    
This will start a REST service on port 8080 using the embedded servlet container, Undertow:

    $ curl http://localhost:8080/camel/hello
    Hello world!

Note that the default servlet path for Camel is `/camel`.

**NB: Requires JDK 11** (for no good reason, other than I just wanted to test it out). So, ensure you're using JDK 11, e.g. with [sdkman][sdkman]:

    sdk install java 11.0.9.hs-adpt
    sdk use java 11.0.9.hs-adpt

[sdkman]: https://sdkman.io/
