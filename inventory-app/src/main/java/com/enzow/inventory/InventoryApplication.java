package com.enzow.inventory;

import com.enzow.inventory.model.Product;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Entry point for the Inventory Spring Boot Application.
 * This class boots up the app context and launches the embedded web server.
 */
@SpringBootApplication
public class InventoryApplication {

	public static void main(String[] args) {

		//Main method that starts the Spring Boot App.
		SpringApplication.run(InventoryApplication.class, args);
	}

}
