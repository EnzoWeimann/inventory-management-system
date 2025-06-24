package com.enzow.inventory.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Exception thrown when a requested ID is not found in the system.
 * Responds with HTTP status code 404 (Not Found).
 */
@ResponseStatus(value= HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException{

    /**
     * Constructs a new ResourceNotFoundException with a custom message.
     * @param message Detail message explaining the exception.
     */
    public ResourceNotFoundException(String message){
        super(message);
    }
}
