package com.example.ejemplo03.services;

import java.util.List;

import com.example.ejemplo03.model.Usuario;
import com.example.ejemplo03.repository.personaRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class PersonaService {

@Autowired
private personaRepositorio repositorio;


  public List<Usuario> getUsers( ) {
    return repositorio.findAll();
  }




public Usuario add(Usuario p) {
	return repositorio.save(p);

}


public Usuario edit(Usuario p) {
  Usuario existingUser = repositorio.findById(p.getIdUsuario()).orElse(null);
  existingUser.setNombeUsuario(p.getNombeUsuario());
  existingUser.setApellidoUsuario(p.getApellidoUsuario());
  existingUser.setDireccionUsuario(p.getDireccionUsuario());
  existingUser.setEmailUsuario(p.getEmailUsuario());
  return repositorio.save(existingUser);
}


public void delete(int id) {
	  repositorio.deleteById(id);
}



}
