package com.example.ejemplo03.model;

import javax.persistence.*;

import lombok.*;
import org.omg.CORBA.PRIVATE_MEMBER;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="USUARIO")

public class Usuario {

	@Id
	@Column()
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idUsuario;


	@Column()
	private String nombeUsuario;


	@Column()
	private String apellidoUsuario;

  @Column()
  private String emailUsuario;



  @Column()
  private String telefonoUsuario;

  @Column()
  private String direccionUsuario;

}
