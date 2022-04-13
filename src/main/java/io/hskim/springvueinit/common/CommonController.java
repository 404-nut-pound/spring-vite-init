package io.hskim.springvueinit.common;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CommonController {

  @GetMapping(value = "/api/hello")
  public String getHello() {
    return "Hello!";
  }
}
