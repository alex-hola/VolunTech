package com.voluntech.demo;
import java.io.IOException;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


public class SetValidacion extends HttpServlet{
    List<String>variables = new ArrayList<String>(); 
    int Numero = 0 ; 
    Enumeration<String>enumeration  = null;
    DBController DB = null; 
    String elemento = null; 
    String[] value = null ; 

    public void doGet(HttpServletRequest request, HttpServletResponse response)throws ServletException , IOException
    {
        setAccessControlHeaders(response);
        response.setHeader("Content-Type", "application/json; charset=UTF-8");
        try {
        DB = new DBController();
        variables.clear();
        enumeration = request.getParameterNames(); 
        while (enumeration.hasMoreElements()) {
            elemento = (String)enumeration.nextElement();
            value = request.getParameterValues(elemento); 
            variables.add(value[0]);             
        }
            DB.setValidacion(variables);
        } catch (SQLException e) {
           System.out.println("Error: "+ e.getMessage());
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
