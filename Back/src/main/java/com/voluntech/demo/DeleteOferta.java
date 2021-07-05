package com.voluntech.demo;
import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;
import java.util.*;


public class DeleteOferta extends HttpServlet{
    DBController DB = new DBController(); 
    
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        
    response.setHeader("content-Type", "application/json; charset=utf-8");
    setAccessControlHeaders(response);
    

       Enumeration<String>enumeration = request.getParameterNames();
       String elemento = null; 
       String[] value = null; 
        

        try {
            while (enumeration.hasMoreElements()) {
                elemento =(String)enumeration.nextElement(); 
                value = request.getParameterValues(elemento); 
            }

            DB.deleteOferta(Integer.parseInt(value[0].toString()));

        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
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