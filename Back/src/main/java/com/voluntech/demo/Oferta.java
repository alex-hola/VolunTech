package com.voluntech.demo;

import java.sql.Date;

public class Oferta {

    private int id; 
    private String  nombre; 
    private String vacantes; 
    private String descripcion; 
    private String tipoDeTrabajo; 
    private String logoEmpresa; 
    private Date fpublicacion; 
    private int validada; 
    private int terninada; 
    private int mentorAsignado; 

    public Oferta()
    {}
    
    public void setMentorAsignado(int mentorAsignado) {
        this.mentorAsignado = mentorAsignado;
    }

    public void setParametros(int i , String na , String va, String tra, String type, String log, Date publi, int b, int c)
    {
        id = i ; 
        nombre = na; 
        vacantes = va;
        descripcion = tra; 
        tipoDeTrabajo = type; 
        logoEmpresa = log; 
        fpublicacion = publi;
        validada = b; 
        terninada = c; 

    }
    
    
}
