package com.voluntech.demo;

import java.sql.Date;

public class Voluntario extends User{

private int idVoluntario;
public String linkCurriculum; 
public Date fNacimiento; 
public double puntuacion; 



public Voluntario()
{
    

}
public void SetVoluntario(int userId, String lc , Date fN, long pntcn)
{
    idVoluntario = userId; 
    linkCurriculum = lc; 
    fNacimiento = fN; 
    puntuacion = pntcn; 

}

    




}
