package xyz.tomd;

import org.apache.camel.builder.RouteBuilder;
import org.springframework.stereotype.Component;

@Component
public class MySpringBootRouter extends RouteBuilder {

    @Override
    public void configure() {
        from("servlet:/hello")
                .setBody(constant("Hello world!"));
    }

}
