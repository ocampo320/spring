package com.example.ejemplo03.repository;

import java.util.List;

import com.example.ejemplo03.model.Usuario;
import org.springframework.data.repository.Repository;

public interface personaRepositorio extends Repository<Usuario, Integer>{
	List<Usuario>findAll();
    Usuario findById(int id);
    Usuario save(Usuario p);
    void delete(Usuario p);



}
