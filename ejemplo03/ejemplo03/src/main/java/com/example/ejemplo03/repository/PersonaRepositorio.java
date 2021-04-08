package com.example.ejemplo03.repository;

import com.example.ejemplo03.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface PersonaRepositorio extends JpaRepository<Usuario, Integer> {
}
