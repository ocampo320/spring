package com.example.ejemplo03.services;

import java.util.List;

import com.example.ejemplo03.model.Usuario;
import com.example.ejemplo03.repository.personaRepositorio;
import com.example.ejemplo03.services.personaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class personaServiceImp implements personaService {

@Autowired
private personaRepositorio repositorio;

@Override
public List<Usuario> listar() {
	return repositorio.findAll();
}

@Override
public Usuario listarId(int id) {
	// TODO Auto-generated method stub
	return null;
}

@Override
public Usuario add(Usuario p) {
	return repositorio.save(p);

}

@Override
public Usuario edit(Usuario p) {
	// TODO Auto-generated method stub
	return null;
}

@Override
public Usuario delete(int id) {
	// TODO Auto-generated method stub
	return null;
}



}
