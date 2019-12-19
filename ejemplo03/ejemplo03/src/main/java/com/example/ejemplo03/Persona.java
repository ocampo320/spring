package com.example.ejemplo03;

import javax.persistence.*;

import org.omg.CORBA.PRIVATE_MEMBER;


@Entity
@Table(name="personas")

public class Persona {
	
	@Id
	@Column()
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id_usuario;
	
	
	@Column()
	private String nombre_usuario;
	
	
	@Column()
	private String apellido_usuario;


	public int getId() {
		return id_usuario;
	}


	public void setId(int id) {
		this.id_usuario = id;
	}


	public String getName() {
		return nombre_usuario;
	}


	public void setName(String name) {
		this.nombre_usuario = name;
	}


	public String getApelido() {
		return apellido_usuario;
	}


	public void setApelido(String apelido) {
		this.apellido_usuario = apelido;
	}
	
	
	
	
	

}
