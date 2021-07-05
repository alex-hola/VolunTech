package com.voluntech.demo;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class ModificaOferta extends HttpServlet {
    List<String> oferta = new ArrayList<String>(); 
    int Numero = 0 ; 
    Enumeration<String>enumeration  = null;
    DBController DB = null; 
    String elemento = null; 
    String[] value = null ; 

    public void doGet(HttpServletRequest request, HttpServletResponse response)throws ServletException , IOException
    {

        response.setHeader("Content-Type", "application/json; charset=UTF-8");
        
        oferta.clear();
        DB = new DBController();
        enumeration = request.getParameterNames(); 

        try {
            while (enumeration.hasMoreElements()) {
                
                elemento = (String)enumeration.nextElement();
                value = request.getParameterValues(elemento); 
                oferta.add(value[0]); 
            }

           
            
            DB.modificaOferta(oferta);

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
