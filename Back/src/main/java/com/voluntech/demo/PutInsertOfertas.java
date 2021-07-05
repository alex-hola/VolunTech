package com.voluntech.demo;
import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;
import java.util.*;


public class PutInsertOfertas extends HttpServlet{
    DBController DB = new DBController(); 
    
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        
    response.setHeader("content-Type", "application/json; charset=utf-8");
    setAccessControlHeaders(response);

    List<String> oferta = new ArrayList<String>(); 
    Enumeration<String> enumeration = request.getParameterNames(); 
    String elemento = null; 
    String[] value = null; 

    oferta.clear();

    /*
        requirements: 

        titulo -> vendra por codigo 
        Descripcion  -> vendra por codigo 
        fecha de publicacion -> sera puesto por codigo 
        las vacantes seran por defecto 0 ; -> sera puesto por codigo 

    */

    try {
        while(enumeration.hasMoreElements())
        {
            elemento = (String)enumeration.nextElement(); 
            value = request.getParameterValues(elemento); 
            oferta.add(value[0]); 
        }



        DB.putInsertOfertas(oferta);
        
    } catch (Exception e) {
        System.out.println("Error: " +e.getMessage());
    }


    }
    @Override
    protected void doOptions(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        setAccessControlHeaders(resp);
        resp.setStatus(HttpServletResponse.SC_OK);
    }
    private void setAccessControlHeaders(HttpServletResponse resp) {
        resp.setHeader("Access-Control-Allow-Origin", "*");
        resp.setHeader("Access-Control-Allow-Methods", "GET");
    }
    
}
