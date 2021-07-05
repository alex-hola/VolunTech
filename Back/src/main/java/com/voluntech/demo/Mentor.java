package com.voluntech.demo;
import java.sql.Date;

public class Mentor extends User {

    private int idMentor; 
    private String curriculum; 
    private Date fnacimiento; 
    private long valoration; 

    public Mentor()
    {
         
    }
    public void SetVariables(int id, String curr , Date fN , long val)
    {
        idMentor = id; 
        curriculum = curr; 
        fnacimiento = fN; 
        valoration = val; 
    }
    public int getIdMentor() {
        return idMentor;
    }
    public String getCurriculum() {
        return curriculum;
    }
    public Date getFnacimiento() {
        return fnacimiento;
    }
    public long getValoration() {
        return valoration;
    }
    
}
