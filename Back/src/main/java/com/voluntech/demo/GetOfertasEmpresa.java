package com.voluntech.demo;
import java.io.*;
import java.util.Enumeration;
import javax.servlet.ServletException;
import javax.servlet.http.*;

public class GetOfertasEmpresa extends HttpServlet   {
    DBController DB = new DBController();
    public void doGet(HttpServletRequest request,HttpServletResponse response) throws ServletException , IOException
    {
        response.setHeader("Content-Type", "application/json; charset=UTF-8");
        setAccessControlHeaders(response);
        Enumeration<String>enumeration = request.getParameterNames(); 
        String elemento = null ; 
        String[] value = null; 
        try {
            while (enumeration.hasMoreElements()) {
                elemento =(String)enumeration.nextElement(); 
                value = request.getParameterValues(elemento); 
            }
            String user = DB.getOfertasEmpresa(value[0].toString());
            
            PrintWriter out = response.getWriter(); 
            out.print(user); 
            out.flush();


        } catch (Exception e) {
            System.out.println(e.getMessage()); 
            
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
