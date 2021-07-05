package com.voluntech.demo;



public class User {

    public Integer idUser; 
    public String name; 
    public String surname; 
    public String pass; 
    public String email; 
    public String phone;
    public String desc; 
    public String photoPath; 
    private int typeOfUser; 
    private int noUser; 

    public void setUser(Integer usuario, String nombre, String apellido, String contrasena , String correo, String telefono , String descripcion , String foto , int tU, int user)
    {
        idUser = usuario; 
        name = nombre; 
        surname = apellido; 
        pass = contrasena; 
        email = correo ; 
        phone = telefono ; 
        desc = descripcion; 
        photoPath = foto; 
        typeOfUser = tU; 
        noUser = user; 
         
    }
    public User()
    {
        
    }



}
