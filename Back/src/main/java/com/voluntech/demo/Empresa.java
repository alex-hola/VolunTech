package com.voluntech.demo;

public class Empresa extends User{

    public int idEmpresa; 
    public String nombreEmpresa; 
    public String identificacionFiscal; 
    public String tipoDeEmpresa; 
    
    public Empresa()
    {

    }
    public void setVariables(int i, String empresa, String fiscal ,String tipo)
    {
        idEmpresa= i ;
        nombreEmpresa = empresa; 
        identificacionFiscal = fiscal; 
        tipoDeEmpresa = tipo; 
        
    }
    
    
}
