package com.example.ejemplo03.repository;

import com.example.ejemplo03.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface personaRepositorio extends JpaRepository<Usuario, Integer> {

}
