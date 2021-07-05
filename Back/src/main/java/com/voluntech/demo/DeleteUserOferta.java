package com.voluntech.demo;
import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;
import java.util.*;


public class DeleteUserOferta extends HttpServlet{
    DBController DB = new DBController(); 
    
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        
    response.setHeader("content-Type", "application/json; charset=utf-8");
    setAccessControlHeaders(response);

    List<String> oferta = new ArrayList<String>(); 
    Enumeration<String> enumeration = request.getParameterNames(); 
    String elemento = null; 
    String[] value = null; 

    oferta.clear();

    try {
        while(enumeration.hasMoreElements())
        {
            elemento = (String)enumeration.nextElement(); 
            value = request.getParameterValues(elemento); 
            oferta.add(value[0]); 
        }



        DB.deleteUserOferta(oferta);
        
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