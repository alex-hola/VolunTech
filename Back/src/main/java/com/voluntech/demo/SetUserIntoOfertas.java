package com.voluntech.demo;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class SetUserIntoOfertas extends HttpServlet {
    private static final long serialVersionUID = 1L;
  
    Enumeration<String>enumeration  = null;
    List<String> parameters = new ArrayList<String>(); 
    DBController DB = null; 
    String elemento = null; 
    String[] value = null ; 

    public void doGet(HttpServletRequest request, HttpServletResponse response)throws ServletException , IOException
    {
        response.setHeader("Content-Type", "application/json; charset=UTF-8");
        parameters.clear();
        DB = new DBController();
        enumeration = request.getParameterNames(); 

        try {

            while (enumeration.hasMoreElements()) {
                
                elemento = (String)enumeration.nextElement(); 
                value = request.getParameterValues(elemento); 
                parameters.add(value[0].toString()); 

            }

            DB.setUserInOferta(parameters);
            
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
