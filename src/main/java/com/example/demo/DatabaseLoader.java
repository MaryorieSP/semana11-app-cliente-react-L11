package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final InstrumentoRepository repository;
	private final MusicoRepository repository2;

	@Autowired
	public DatabaseLoader(InstrumentoRepository repository,MusicoRepository repository2) {
		this.repository = repository;
		this.repository2 = repository2;
	}

	@Override
	public void run(String... strings) throws Exception {
		this.repository.save(new Instrumento("Guitarra", "Cuerda", "de madera, con caja de resonancia, 6 cuerdas templadas"));
		this.repository.save(new Instrumento("Ukelele", "Cuerda", "de madera, con caja de resonancia pequeña, 4 cuerdas templadas"));
		this.repository.save(new Instrumento("Melódica", "Viento", "Teclado pequeño de 2 octavas, sonorisado por soplido"));

		this.repository2.save(new Musico("Jimi Hendrix"));
		this.repository2.save(new Musico("Eric Clapton"));
	}
}